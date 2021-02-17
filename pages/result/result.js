// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //本地图片链接
    picFilePath:'',
    // 上一页选择的识别分类
    selectItem:'',
    // 识别结果
    result:[],
    // 识别结果条数
    resultNum: 0,
    // 压缩图片大小
    cWidth: 300,
    cHeight : 300,
    // 压缩后的图片链接
    canvasImgUrl:'',
    // 点击预览图片列表
    previewImgUrl:[],
    // 识别结果高度
    resultHeights:[],
    //当前swiper标签索引
    current:0,
    // 识别记录缓存
    historyLists: [],
    // 显示识别记录
    historyShow: false,
    //当前存在识别记录数量
    historyNum:0,
    //当前swiper标签索引
    current:0,
  },

  // 点击结果进行复制
  copyResult(e){
    let score = ''
    let root = ''
    let name = ''
    let desc = ''
    if(this.data.selectItem == 'advanced_general'){
      score = e.currentTarget.dataset.result.score
      root = e.currentTarget.dataset.result.root
      name = e.currentTarget.dataset.result.keyword
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};分类：${root};相似度：${score};描述：${desc}`
      })
    }
    else if(this.data.selectItem == 'red_wine'){
      name = e.currentTarget.dataset.result.wineNameCn
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};描述：${desc}`
      })
    }
    else if(this.data.selectItem == 'dishs'){
      score = e.currentTarget.dataset.result.probability
      root = e.currentTarget.dataset.result.has_calorie == true? '有':'无'
      name = e.currentTarget.dataset.result.name
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};卡路里：${root};相似度：${score};描述：${desc}`
      })
    }else{
      score = e.currentTarget.dataset.result.score
      name = e.currentTarget.dataset.result.name
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};相似度：${score};描述：${desc}`
      })
    }
    
  },

  // 选择图片后加载完成触发
  selectPicOk(){
    let that = this
    // 判断图片来源--区分上一页识别相关跳转
    if(that.data.picFilePath.indexOf("://tmp") != -1){
    // 缓存图片文件
    let newResult = that.data.result
    let fs = wx.getFileSystemManager()
    let path = that.data.picFilePath
    fs.saveFile({
      tempFilePath: path,
      success(res){
        let url = res.savedFilePath
        // 保存识别记录缓存
        let newDate = new Date() //日期时间
        let time = newDate.toLocaleString()
        let title = ''
        let score = ''
        if(newResult.length != 0){
          if(that.data.selectItem == 'advanced_general'){
            title = newResult[0].keyword
            score = newResult[0].score
          }
          else if(that.data.selectItem == 'red_wine'){
            title = newResult[0].wineNameCn
          }
          else{
            title = newResult[0].name
            score = newResult[0].score
            if(that.data.selectItem == 'dishs'){
              score = newResult[0].probability
            }
          }
        }
        that.saveHistoryStorage(url,title,time,score)
        let imgList = []
        imgList.push(url)
        that.setData({previewImgUrl:imgList})
      },
      fail(res){
        console.log(res)
      }
    })
  }
  },

  // 点击上传的图片预览
  preViewImg(){
    let that = this
    if(that.data.picFilePath.indexOf("://tmp") != -1){
      wx.previewImage({
        urls: that.data.previewImgUrl
      })
    }
  },

  // 点击预览历史记录的图片
  preViewHistoryImg(e){
    let imageList = []
    let url = e.currentTarget.dataset.history
    imageList.push(url)
    wx.previewImage({
      urls: imageList,
    })
  },

  // 点击结果中的图片预览
  showResultImg(e){
    let url = e.currentTarget.dataset.img
    let urlList = []
    urlList.push(url)
    wx.previewImage({
      urls: urlList,
    })
  },

  onShareAppMessage: function () {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    },

  //用户点击右上角分享朋友圈
  onShareTimeline: function () {
    return {
        title: '',
        query: {
          key: value
        },
        imageUrl: ''
      }
  }, 

  // 缓存识别记录---图片地址、标题、时间、匹配率
  saveHistoryStorage(url,title,time,score){
    let name = `${title};${time};${score}`
    wx.setStorageSync(name, url)
    let num = wx.getStorageSync('historySaw')
    if(num == 0 || num == null){
      wx.setStorageSync('historySaw', 1)
    }else{
      let newNum = num + 1
      wx.setStorageSync('historySaw', newNum)
    }
  },

  swiperChange(e){
    this.setData({current:e.detail.current})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收上一页面传送来的结果数据
    let eventChannel = this.getOpenerEventChannel()
    let that = this
    let imgList = []
    eventChannel.on('sendResult',function(res){
      imgList.push(res.picFilePath)
      if(res.result[0].wineNameCn === ""){
        that.setData({picFilePath:res.picFilePath})
        wx.showToast({
          title: '识别不到该红酒',
          icon: 'error',
          duration: 2000
        })
      }
      else if(res.result[0].name === "" && res.selectItem == "animal"){
        that.setData({picFilePath:res.picFilePath})
        wx.showToast({
          title: '识别不到该动物',
          icon: 'error',
          duration: 2000
        })
      }
      else if(res.result[0].name === "" && res.selectItem == "dishs"){
        that.setData({picFilePath:res.picFilePath})
        wx.showToast({
          title: '识别不到该菜品',
          icon: 'error',
          duration: 2000
        })
      }
      else if(res.result[0].name === "" && res.selectItem == "plant"){
        that.setData({picFilePath:res.picFilePath})
        wx.showToast({
          title: '识别不到该植物',
          icon: 'error',
          duration: 2000
        })
      }
      else if(res.result[0].keyword === "" && res.selectItem == "advanced_general"){
        that.setData({picFilePath:res.picFilePath})
        wx.showToast({
          title: '识别不到该图片',
          icon: 'error',
          duration: 2000
        })
      }
      else{
        if(res.resultNum){
          that.setData({result:res.result,resultNum:res.resultNum,picFilePath:res.picFilePath,selectItem:res.selectItem})
          if(res.picFilePath.indexOf("://tmp") != -1){
            wx.showToast({
              title: '识别成功',
              icon: 'success'
            })
          }
        }else{
          that.setData({result:res.result,picFilePath:res.picFilePath,selectItem:res.selectItem})
          if(res.picFilePath.indexOf("://tmp") != -1){
            wx.showToast({
              title: '识别成功',
              icon: 'success'
            })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 动态设置识别结果滑块高度
    let that = this
    let query = wx.createSelectorQuery()
    // 获取设备显示高度
    query.select('.result_container').boundingClientRect()
    let containerHeight
    query.exec(function(res){
      containerHeight = res[0].height
      // 遍历获取识别结果标签高度
      query.selectAll('.result_card').boundingClientRect(function (rect) {
        let heightList = []
        rect.forEach(item=>{
          if(containerHeight > 780){
            if((item.height < 400) || (400< item.height && item.height < 500)){
            heightList.push(containerHeight-330)
            that.setData({resultHeights:heightList})
          }
          else{
            heightList.push(item.height)
            that.setData({resultHeights:heightList})
          }
          }else{
            if((item.height < 400) || (400< item.height && item.height < 440)){
              heightList.push(containerHeight-310)
              that.setData({resultHeights:heightList})
            }
            else{
              heightList.push(item.height)
              that.setData({resultHeights:heightList})
            }
          }
        })
      }).exec()
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
// 分享至聊天
onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

//用户点击右上角分享朋友圈
onShareTimeline: function () {
}, 
})