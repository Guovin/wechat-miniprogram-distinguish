// pages/red_wine/wine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择的识别分类
    selectItem:'red_wine',
    // 滑块内容
    swiper_content:[{image_url:'../../picture/redwine.jpg',index_content:'类型：干红，国家：法国，等级/Rank: AOC，年份/Vintage:2012，产地/Area:法国波尔多法定产区，葡萄品种：赤霞珠、美乐，醒酒时间：20-30分钟，适饮温度：12-18℃，酒品介绍：美丽清澈的紫红色，有黑莓等浆果气味，并有橡木芳香。入口圆润饱满，口感平衡愉悦，香气优雅纯正。',index_title:'帕度波城堡波尔多干红葡萄酒'},
    {image_url:'../../picture/w2.jpg',index_content:'马拉莎尼城堡 莎桐湾波尔多之路 干红葡萄酒产于被称为法国葡萄酒王后的波尔多，口感柔顺细雅，适合在室温下搭配烤肉/炖肉等美食享用。',index_title:'沙桐湾波尔多之路干红葡萄酒'},
    {image_url:'../../picture/w3.jpg',index_content:'颜色：明亮的深红色酒体，边缘带粉红色。气味：香味新鲜活跃，有成熟的夏日浆果香和黑色香料的辛香，鲜明橡木味不太明显，果香较为突出。口感：柔滑的单宁使浆果味和酒香达到一种有趣的平衡。中度的酒体，在口中有肉质和新鲜多汁的诱惑。饮用及配餐建议：饮用前一小时开瓶，最好使用醒酒器。温度最好在18℃-22℃。适合与羊扒、意大利粉面、比萨等以及普遍中浓味中餐菜肴配食。酒精度：14%。',index_title:'洛神山庄设拉子干红葡萄酒'}],
    
    // 当前滑块图片索引
    img_index:0,
    // 首页自动切换
    IndexAutoPlay: true,
    // 酒类缓存
    wineStorage:[[{wineNameCn:'法国干红 帕度波城堡波尔多产区07年份干红葡萄酒',baike_info:false}],
                  [{wineNameCn:'法国波尔多产区 沙桐湾波尔多之路干红葡萄酒',baike_info:false}],
                  [{wineNameCn:'澳大利亚 洛神山庄设拉子干红葡萄酒',baike_info:false}]],
  // 首页自动切换
  IndexAutoPlay: true,
  //本地图片链接
  picFilePath:'',
  // 识别结果
  result:[],
  // 识别结果条数
  resultNum: 0,
  // 压缩图片大小
  cWidth: 300,
  cHeight : 300,
  // 压缩后的图片链接
  canvasImgUrl:''
},

// 首页滑块切换事件
indexSwiperChange(e){
  let current = e.detail.current
  this.setData({img_index:current})
},

// 暂停切换
pauseAutoPlay(){
  this.setData({IndexAutoPlay:false})
},

// 点击首页相关识别，跳转具体
goDetail(){
  let that = this
  let index = this.data.img_index
  let newResult = []
  newResult = this.data.wineStorage[index]
  let num = newResult.length
  let path = this.data.swiper_content[index].image_url
  // 传送识别结果数据至新的页面
  wx.navigateTo({
    url: '../result/result',
    success(res){
      res.eventChannel.emit('sendResult',{result:newResult,resultNum:num,picFilePath:path,selectItem:that.data.selectItem})
    }
  })
},

// 上传图片
upLoad(){
  let that = this
    wx.chooseImage({
            count: 1, //可选择图片张数
            sizeType: ['compressed'], //图片大小：压缩图片，第一次
            sourceType: ['album', 'camera'], //图片来源：相册或相机
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              let tempFilePath = res.tempFilePaths[0]
      //         that.setData({picFilePath:tempFilePath})
              let img_size = res.tempFiles[0].size //图片大小--字节单位
              // 如果大于2M则进行压缩
              if(img_size >= 2097152){
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
                                      that.setData({picFilePath:img_path,canvasImgUrl:res.tempFilePath})
                                      that.recognizePic(res.tempFilePath)
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
              }
              else{
                // 图片小于2M直接进行分析识别
                that.setData({picFilePath:tempFilePath,canvasImgUrl:tempFilePath})
                that.recognizePic(tempFilePath)
              }
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

// 获取图片成功，分析图片
// 分析图片
recognizePic(ImgUrl){
  let that = this
  let uploadTask = wx.uploadFile({
    url: 'https://hscode.vip/api/img/get-image-recognition-result', // 接口地址
    filePath: ImgUrl, // 上传二次压缩后的图片
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
              let select = that.data.selectItem
              // 根据选择的分类获取对应结果，红酒需要区分处理（返回是一个对象而不是数组）
              let cate = result[select]
              let cateName = Object.keys(result)[0]
              let newResult = []
              // 判断是否存在百度百科信息
              if(cateName == 'red_wine'){
                  if(JSON.stringify(cate.result.baike_info) == '{}'){
                    cate.result.baike_info = false
                  }
                  newResult.push(cate.result)
                  that.setData({result:newResult})
                  // 传送识别结果数据至新的页面
                  wx.navigateTo({
                    url: '../result/result',
                    success(res){
                      res.eventChannel.emit('sendResult',{result:newResult,picFilePath:that.data.picFilePath,selectItem:'red_wine'})
                    }
                  })
              }
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
    fail (res){
      console.log(res)
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


/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {

},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function () {

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