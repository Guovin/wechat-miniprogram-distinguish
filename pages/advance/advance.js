// pages/advance/advance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeMore:false,
    // 选择的识别分类
    selectItem:'advanced_general',
    // 滑块内容
    swiper_content:[{image_url:'../../picture/lanbo.jpg',index_content:'在意大利乃至全世界，兰博基尼是诡异的，它神秘地诞生，出人意料地推出一款又一款的让人咋舌的超级跑车。兰博基尼最能代表罗马2700年的历史，七丘之城罗马建城于不易防守之地，扩张与攻击在最初的一刻就凝聚于血脉之中。它是举世难得的艺术品,意大利最具声望的设计大师甘迪尼为其倾注一生的心血。每一个棱角、每一道线条都是如此完美，都在默默诠释兰博基尼近乎原始的美。如此一个特立独行的跑车品牌是数十年来世界车坛追逐与猎奇的焦点。',index_title:'兰博基尼'},
    {image_url:'../../picture/mian.jpg',index_content:'棉花，是锦葵科（Malvaceae）棉属（Gossypium）植物的种籽纤维，原产于亚热带。植株灌木状，在热带地区栽培可长到6米高，一般为1到2米。花朵乳白色，开花后不久转成深红色然后凋谢，留下绿色小型的蒴果，称为棉铃。棉铃内有棉籽，棉籽上的茸毛从棉籽表皮长出，塞满棉铃内部，棉铃成熟时裂开，露出柔软的纤维。纤维白色或白中带黄，长约2至4厘米（0.75~1.5寸），含纤维素约87～90%，水5~8%，其他物质4~6%。棉花产量最高的国家有中国、美国、印度等。',index_title:'棉花'},
    {image_url:'../../picture/caomei.jpg',index_content:'草莓（英文学名：strawberry），多年生草本植物。高10-40厘米，茎低于叶或近相等，密被开展黄色柔毛。叶三出，小叶具短柄，质地较厚，倒卵形或菱形，上面深绿色，几无毛，下面淡白绿色，疏生毛，沿脉较密；叶柄密被开展黄色柔毛。聚伞花序，花序下面具一短柄的小叶；聚合果大，宿存萼片直立，紧贴于果实；瘦果尖卵形，光滑。花期4-5月，果期6-7月。原产南美，中国各地及欧洲等地广为栽培。草莓营养价值高，含有多种营养物质 ，且有保健功效。',index_title:'草莓'}],
    
    // 当前滑块图片索引
    img_index:0,
    // 通用缓存Storage
    indexStorage:[[{score:"66.20%",root:"交通工具-汽车",keyword:"跑车",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%B7%91%E8%BD%A6/303835",image_url:"https://bkimg.cdn.bcebos.com/pic/5366d0160924ab1887ca17c539fae6cd7a890b67",description:"跑车的英文名是SportsCar或SportyCar，属于一种低底盘、线条流畅、动力突出的汽车类型，其最大特点是不断追求速度极限。跑车的分类有很多种，按车身结构可分为轿跑、敞篷跑车、双门跑车，按价值可分为平民跑车、超级跑车。"}},
                  {score:"45.45%",root:"交通工具-汽车",keyword:"轿车",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%BD%BF%E8%BD%A6/568373",image_url:"https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39db49bf932ec7160924ab189b22",description:"轿车(saloon car)是指用于载送人员及其随身物品，且座位布置在两轴之间的汽车。包括驾驶者在内，座位数最多不超过九个。一般轿车强调的是舒适性，以乘员为中心。而且是从经济性考虑出发，选择马力适中、排量小、耗油量小的发动机。在中国内地的行驶证管理方面，轿车特指区别于货车、皮卡、SUV、大巴、中巴的小型汽车，俗称为“小轿车”。在香港，轿车又称私家车。"}},
                  {score:"28.49%",root:"交通工具-汽车",keyword:"汽车",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%B1%BD%E8%BD%A6/152503",image_url:"https://bkimg.cdn.bcebos.com/pic/f3d3572c11dfa9ec8a13cbb20a9ae003918fa0ec6b49",description:"我国国家最新标准《汽车和挂车类型的术语和定义》(GB/T 3730．1—2001)中对汽车有如下定义：由动力驱动，具有4个或4个以上车轮的非轨道承载的车辆，主要用于：载运人员和(或)货物；牵引载运人员和(或)货物的车辆；特殊用途。国产汽车品牌有：红旗、长安、长城、奇瑞、吉利、荣威等。国外汽车品牌有：丰田、大众、现代、起亚、标致等。"}},
                  {score:"14.30%",root:"交通工具-汽车",keyword:"汽车模型",baike_info:false},
                  {score:"0.03%",root:"商品-家装建材",keyword:"壁纸",baike_info:false}],

                  [{score:'84.38%',root:"植物-其它",keyword:"新疆棉花",baike_info:false},
                  {score:'66.37%',root:"植物-其它",keyword:"棉花籽",baike_info:false},
                  {score:'45.16%',root:"植物-莎草科",keyword:"羊胡子草",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%BE%8A%E8%83%A1%E5%AD%90%E8%8D%89/6516148",image_url:"http://imgsrc.baidu.com/baike/pic/item/7af40ad162d9f2d370b7ec2aabec8a136227cc55.jpg",description:"羊胡子草，别名：卵穗苔草，莎草科，生于岩壁上。华南地区、西南地区。为多年生草本，高14至80cm。根状茎粗短。杆密丛生，基部具黑褐色叶鞘。叶基生，无杆生叶；叶片线形，长50至60cm，顶端渐狭成刚毛状，边内卷，具细齿，基部鞘状。"}},
                  {score:'3.97%',root:"植物-灌木",keyword:"棉花产业",baike_info:false}],

                  [{score:'87.43%',root:"植物-蔷薇科",keyword:"草莓",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8D%89%E8%8E%93/32702",image_url:"https://bkimg.cdn.bcebos.com/pic/faf2b2119313b07ec8e23fdd06d7912396dd8c83",description:"草莓(英文学名：strawberry、拉丁学名：Fragaria × ananassa Duch.)，多年生草本植物。高10-40厘米，茎低于叶或近相等，密被开展黄色柔毛。叶三出，小叶具短柄，质地较厚，倒卵形或菱形，上面深绿色，几无毛，下面淡白绿色，疏生毛，沿脉较密；叶柄密被开展黄色柔毛。聚伞花序，花序下面具一短柄的小叶；花两性；萼片卵形，比副萼片稍长；花瓣白色，近圆形或倒卵椭圆形。聚合果大，宿存萼片直立，紧贴于果实；瘦果尖卵形，光滑。花期4-5月，果期6-7月。原产南美，中国各地及欧洲等地广为栽培。草莓营养价值高，含有多种营养物质 ，且有保健功效。"}},
                  {score:'69.19%',root:"植物-其它",keyword:"红色草莓",baike_info:false},
                  {score:'36.03%',root:"植物-无患子科",keyword:"荔枝",baike_info:false},
                  {score:'18.16%',root:"商品-穿戴",keyword:"毛线",baike_info:false},
                  {score:'0.28%',root:"植物-蔷薇科",keyword:"苹果",baike_info:false}],
                ],
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

  // 关闭更多悬浮框
  closeMore(){
    this.setData({closeMore:false})
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
    newResult = this.data.indexStorage[index]
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
                wx.showLoading({
                  title:'图片处理中'
                })
                // tempFilePath可以作为img标签的src属性显示图片
                let tempFilePath = res.tempFilePaths[0]
        //         that.setData({picFilePath:tempFilePath})
                let img_size = res.tempFiles[0].size //图片大小--字节单位
                // 如果大于2M则进行压缩
                if(img_size >= 2097152){
                  wx.hideLoading({
                    success(){
                      wx.showLoading({
                        title: '压缩图片中',
                      })
                    }
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
                  cate.result.forEach(item =>{
                    if(JSON.stringify(item.baike_info) == '{}'){
                      item.baike_info = false
                    }
                    if(cateName == 'dishs'){
                      // 处理匹配度数据成百分比形式
                      item.probability = (item.probability * 100).toFixed(2) + '%'
                    }else{
                      // 处理匹配度数据成百分比形式
                      item.score = (item.score * 100).toFixed(2) + '%'
                    }
                  })
                  newResult = cate.result
                  that.setData({result:newResult,resultNum:cate.result_num,selectItem:cateName})
                  // 传送识别结果数据至新的页面
                  wx.navigateTo({
                    url: '../result/result',
                    success(res){
                      res.eventChannel.emit('sendResult',{result:newResult,resultNum:cate.result_num,picFilePath:that.data.picFilePath,selectItem:cateName})
                    }
                  })
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