// index.js
Page({
  data: {
    picFilePath:'', //本地图片链接
    // 分类
    items: [
      {value: 'advanced_general', name: '通用',checked: 'true',iconName: 'hongmoshibie',textColor:'green',image_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs14.sinaimg.cn%2Fmiddle%2F75b250c5gad935b495b6d%26690&refer=http%3A%2F%2Fs14.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615024759&t=94e86706f4545b73e14a42454b268dfb'},
      {value: 'plant', name: '植物',iconName: 'hua1',textColor:'',image_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3654018995,4247149748&fm=26&gp=0.jpg'},
      {value: 'animal', name: '动物',iconName: 'dongwutubiao_gou',textColor:'',image_url:'https://pic.rmb.bdstatic.com/19d6b84364ea87cef2dd86f45c302c3a.jpeg'},
      {value: 'red_wine', name: '酒类',iconName: 'wine',textColor:'',image_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.99114.com%2Fgroup3%2FM00%2F4C%2F03%2FrBADvVs64oqAfXj1AABzjrc3t0s471.jpg&refer=http%3A%2F%2Fimg1.99114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615027414&t=d4efd7cf3a670f100b41edc107c8d30d'},
      {value: 'dishs', name: '菜品',iconName: 'shiwu1',textColor:'',image_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_water_img%2F19%2F04%2F16%2F25c5deb007e6dfc2968313b95095ab32.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615023747&t=ec81392bdbff748079bd2f7142eca48d'}
    ],
    // 选中的分类
    selectItem:'advanced_general',
    // 识别结果
    result:[],
    // 识别结果条数
    resultNum: 0,
    // 左侧边栏动画效果
    isRuleTrue:false,
    useSwitch:false,
    // 底部导航点击
    moreTap:false,
    cameraTap:false,
    photoTap:false,
    // 首页背景图片
    image_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs14.sinaimg.cn%2Fmiddle%2F75b250c5gad935b495b6d%26690&refer=http%3A%2F%2Fs14.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615024759&t=94e86706f4545b73e14a42454b268dfb',
    // 压缩图片大小
    cWidth: 300,
    cHeight : 300,
    // 压缩后的图片链接
    canvasImgUrl:'',
    // 点击预览图片列表
    previewImgUrl:[],
    // 滑动坐标
    startX:0,
    startY:0,
    // 识别结果高度
    resultHeights:[],
    //当前swiper标签索引
    current:0
  },
  // 事件处理函数
  // 获取本地图片
  upLoad(e){
    let that = this
    let type = e.currentTarget.dataset.type
      if(type == 'camera'){
        that.setData({cameraTap:true,photoTap:false,moreTap:false,isRuleTrue: false})
      }else{
        that.setData({photoTap:true,cameraTap:false,moreTap:false,isRuleTrue: false})
      }
      wx.chooseImage({
              count: 1, //可选择图片张数
              sizeType: ['compressed'], //图片大小：压缩图片，第一次
              sourceType: [type], //图片来源：相册或相机
              success (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                let tempFilePath = res.tempFilePaths[0]
        //         that.setData({picFilePath:tempFilePath})

                wx.showLoading({
                  title: '压缩图片中',
                })
              // 对图片进行二次压缩
                //-----返回选定照片的本地文件路径列表，获取照片信息-----------
              wx.getImageInfo({
                  src: tempFilePath,  
                  success: function(res){
                    let img_path = res.path //未二次压缩前的图片链接
                    //---------利用canvas压缩图片--------------
                  var ratio = 2;
                  var canvasWidth = res.width //图片原始长宽
                  var canvasHeight = res.height
                  while (canvasWidth > 400 || canvasHeight > 400){// 保证宽高在400以内
                      canvasWidth = Math.trunc(res.width / ratio)
                      canvasHeight = Math.trunc(res.height / ratio)
                      ratio++;
                  }
                  that.setData({
                      cWidth: canvasWidth,
                      cHeight: canvasHeight
                  })
                  //----------绘制图形并取出图片路径--------------
                  var ctx = wx.createCanvasContext('canvas')
                  ctx.drawImage(img_path, 0, 0, canvasWidth, canvasHeight)
                  ctx.draw(false, setTimeout(function(){
                      wx.canvasToTempFilePath({
                          canvasId: 'canvas',
                          destWidth: canvasWidth,
                          destHeight: canvasHeight,
                          success: function (res) {
                              // console.log(res.tempFilePath)
                              //最终图片路径
                              wx.hideLoading({
                                success: () => {
                                  wx.showToast({
                                    title: '图片压缩成功',
                                    icon: 'success',
                                    success(){
                                      let imgList = []
                                      imgList.push(img_path)
                                      that.setData({picFilePath:img_path,canvasImgUrl:res.tempFilePath,previewImgUrl:imgList})  
                                    }
                                  })
                                },
                              })
                          },
                          fail: function (res) {
                              console.log(res.errMsg)
                              wx.hideLoading({
                                success: () => {
                                  wx.showToast({
                                    title: '图片压缩失败',
                                    icon: 'error'
                                  })
                                },
                              })
                          }
                      })
                  },2000))    //留一定的时间绘制canvas
                      },
                      fail: function(res){
                        console.log(res.errMsg)
                        wx.hideLoading({
                          success: () => {
                            wx.showToast({
                              title: '图片获取失败',
                              icon: 'error'
                            })
                          },
                        })
                    },
                })
              },
              fail(res){
                wx.showToast({
                  title: '未选择图片',
                  icon:'error'
                })
                that.setData({cameraTap:false,photoTap:false})
              }
            })
  },

  // 选择图片后加载完成触发
  selectPicOk(){
    let that = this
    wx.showToast({
      title: '图片加载成功',
      success(){
        that.recognizePic()
      }
    })
  },

  // 点击上传的图片预览
  preViewImg(){
    let that = this
    wx.previewImage({
      urls: that.data.previewImgUrl,
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

  // 分析图片
  recognizePic(){
    let that = this
    let uploadTask = wx.uploadFile({
      url: 'https://hscode.vip/api/img/get-image-recognition-result', // 接口地址
      filePath: that.data.canvasImgUrl, // 上传二次压缩后的图片
      timeout: 10000, //超时时间
      name: 'img_file', // 图片对应的key参数，服务器可根据此参数获取图片
      formData: {
        img_type: that.data.selectItem // 识别分类参数
      },
      success (res){
        let dataStr = res.data // 这是一个字符串
        let data = JSON.parse(dataStr) // 转换为对象
        if(data.code != 200){
          wx.hideLoading({
            success: () => {
              that.setData({picFilePath:'',canvasImgUrl:''})
              wx.showToast({
                title: data.data,
                icon: 'none',
                duration: 3000
              })
            },
          })
        }else{
          if(data.code == 200){
            let result = data.data.info.result
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '识别成功',
                  icon: 'success'
                })
                let select = that.data.selectItem
                let cate = result[select]
                // 判断是否存在百度百科信息
                cate.result.forEach(item =>{
                  if(JSON.stringify(item.baike_info) == '{}'){
                    item.baike_info = false
                  }
                  // 处理匹配度数据成百分比形式
                  item.score = (item.score * 100).toFixed(2) + '%'
                })
                that.setData({result:cate.result,resultNum:cate.result_num})
                // 遍历获取识别结果标签高度
                let query = wx.createSelectorQuery()
                query.selectAll('.result_card').boundingClientRect(function (rect) {
                  let heightList = []
                  rect.forEach(item=>{
                    heightList.push(item.height)
                    that.setData({resultHeights:heightList})
                  })
                }).exec()

                // wx.setStorage({
                //   data: cate.result,
                //   key: 'result',
                // })
                // wx.setStorageSync('picFilePath', that.data.picFilePath)
                // wx.setStorageSync('canvasImgUrl', that.data.canvasImgUrl)
              },
            })
          }
          else{
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '识别失败',
                  icon: 'error'
                })
              },
            })
          }
        } 
      },
      fail (){
        wx.hideLoading({
          success: () => {
            wx.showToast({
              title: '图片上传失败',
              icon:'error'
            })
            that.setData({picFilePath:'',canvasImgUrl:''})
          }
        })
      }
    })

    uploadTask.onProgressUpdate((res) => {
      wx.showLoading({
        title:`上传中：${res.progress}%`
      })
    })
  },

  // 分类选择
  radioChange(e) {
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
      if(items[i].checked == true){
        items[i].textColor = 'green'
        this.setData({image_url:items[i].image_url})
      }else{
        items[i].textColor = ''
      }
    }
    this.setData({items,selectItem:e.detail.value})
  },
 
  // 更多按钮点击事件
  openLeftPage() {
    if(this.data.isRuleTrue){
      this.setData({isRuleTrue: false,moreTap:false,cameraTap:false,photoTap:false})
    }else{
      // 如果是初次打开，则要先渲染侧边栏
      if(!this.data.useSwitch){
        this.setData({isRuleTrue: true,useSwitch: true}) //一定要同时设置class属性，否则会出现抖动
      }
      this.setData({isRuleTrue: true,moreTap:true,cameraTap:false,photoTap:false})
    }
  },

  // 当“更多内容”展开时点击图片触发关闭
  closeLeft(){
    if(this.data.isRuleTrue){
      this.setData({isRuleTrue: false,moreTap:false,cameraTap:false,photoTap:false})
    }
  },

  // 判断滑动方向
  slideEnd(e){
    // 通过判断X轴与Y轴变化的大小来区分是左右还是上下滑动
    let endX = e.touches[0].pageX - this.data.startX
    let endY = e.touches[0].pageY - this.data.startY
    // 向左滑动并且侧边栏是打开状态
    // endX绝对值大于endY表示横向滑动
    if(endX < 0 && Math.abs(endX) > Math.abs(endY)){
      // 关闭侧边栏
      this.closeLeft()
    }
    else{
      // 向右滑动，并且侧边栏是关闭状态
      if(!this.data.isRuleTrue && Math.abs(endX) > Math.abs(endY)){
        // 打开侧边栏
      this.openLeftPage()
      }
    }
  },

  //开始滑动事件
  sildeStart(e){
    this.setData({startX:e.touches[0].pageX,startY:e.touches[0].pageY})
  },

  // 调用反馈组件事件
  openFeedBack(){
    this.selectComponent("#avatar").showDialog()
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

  //刷新
  onRefresh(){
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading(); 
    //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
    wx.showLoading({
      title: '刷新中...',
    })
    this.getData();
  },

  getData(){
    this.setData({picFilePath:'',canvasImgUrl:'',result:[],resultNum:0})
    //隐藏loading 提示框
    wx.hideLoading();
    //隐藏导航条加载动画
    wx.hideNavigationBarLoading();
    //停止下拉刷新
    wx.stopPullDownRefresh();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      //调用刷新时将执行的方法
    this.onRefresh();
  },

  swiperChange(e){
    this.setData({current:e.detail.current})
  },

  onLoad() {
    // let that = this
    // wx.getStorage({
    //   key: 'result',
    //   success(res){
    //     that.setData({result:res.data,resultNum:5})
    //     // 遍历获取识别结果标签高度
    //     var query = wx.createSelectorQuery()
    //     query.selectAll('.result_card').boundingClientRect(function (rect) {
    //       let heightList = []
    //       rect.forEach(item=>{
    //         heightList.push(item.height)
    //         that.setData({resultHeights:heightList})
    //       })
    //     }).exec()
    //   }
    // })
    // // 获取本地缓存
    // let picFilePath = wx.getStorageSync('picFilePath')
    // let canvasImgUrl = wx.getStorageSync('canvasImgUrl')
    // let picList = []
    // picList.push(picFilePath)
    // that.setData({picFilePath:picFilePath,canvasImgUrl:canvasImgUrl,previewImgUrl:picList})
  }
})
