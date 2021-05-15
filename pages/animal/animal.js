// pages/animal/animal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择的识别分类
    selectItem:'animal',
    // 滑块内容
    swiper_content:[{image_url:'../../picture/a1.jpg',index_content:'秋田犬（日语：あきたいぬ/アキタイヌ）是日本国犬，在日本是家庭宠物犬。秋田犬是日本最大的狐狸犬种，这一大型狐狸犬就算在欧洲和美国这种狐狸犬种众多的国家也颇为引人瞩目。在日本，秋田犬是具有国家历史文物意义的犬，属国犬，因“忠犬八公”闻名于世，是日本指定的国家天然纪念物中唯一的大型犬。该犬十分勇猛、感觉锐敏、忠诚且聪明，有关其忠诚的故事很多。秋田犬是能干的工作犬和看家犬，最拿手的本领是帮猎人在雪地或水中寻找被击中的猎物，寻回后交给主人。',index_title:'秋田犬'},
    {image_url:'../../picture/a2.jpg',index_content:'英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。',index_title:'英国短毛猫'},
    {image_url:'../../picture/a3.jpg',index_content:'大熊猫（学名：Ailuropoda melanoleuca）：属于食肉目、熊科、大熊猫亚科和大熊猫属唯一的哺乳动物。仅有二个亚种。雄性个体稍大于雌性。体型肥硕似熊、丰腴富态，头圆尾短，头躯长1.2-1.8米，尾长10-12厘米。体重80-120千克，最重可达180千克，体色为黑白两色，脸颊圆，有大的黑眼圈，标志性的内八字的行走方式，也有解剖刀般锋利的爪子。大熊猫皮肤厚，最厚处可达10毫米。黑白相间的外表，有利于隐蔽在密林的树上和积雪的地面而不易被天敌发现。',index_title:'熊猫'}],
    // 当前滑块图片索引
    img_index:0,
    // 首页自动切换
    IndexAutoPlay: true,
    // 动物缓存
    animalStorage:[[{score:'52.76%',name:"日本秋田犬",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%A7%8B%E7%94%B0%E7%8A%AC/504109",image_url:"https://bkimg.cdn.bcebos.com/pic/622762d0f703918f7dd24b275f3d269758eec4d8",description:"秋田犬(日语：あきたいぬ/アキタイヌ)是日本国犬，在日本是家庭宠物犬。秋田犬是日本最大的狐狸犬种，这一大型狐狸犬就算在欧洲,美国这种狐狸犬种众多的国家也颇为引人瞩目。在日本，秋田犬是具有国家历史文物意义的犬，属国犬，因“忠犬八公”闻名于世，是日本指定的国家天然纪念物中唯一的大型犬。该犬十分勇猛、感觉锐敏、忠诚且聪明，有关其忠诚的故事很多。秋田县是秋田犬发祥地，该地区北部多山，而且冬季十分寒冷。秋田犬是能干的工作犬和看家犬，村民们常常带着犬去猎杀野猪和熊，犬最拿手的本领是帮猎人在雪地或水中寻找被击中的猎物，寻回后交给主人。"}},
                  {score:'40.98%',name:"威尔士柯基",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E6%9F%AF%E5%9F%BA/1780641",image_url:"https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fbe7e9fd374d4a20a44723dcd1",description:"威尔士柯基个子矮小，骨量适中，胸深。整个身体的侧面轮廓的比例是长度远大于高度。尾巴位置非常低，而且象狐狸尾巴。给人的整体印象是：漂亮、有力的小型犬，速度和耐力都非常好，聪明，结构坚固，但不粗糙。"}},
                  {score:'5.39%',name:"日本柴犬",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%97%A5%E6%9C%AC%E6%9F%B4%E7%8A%AC/10425292",image_url:"https://bkimg.cdn.bcebos.com/pic/314e251f95cad1c878c013ce7f3e6709c83d51e4",description:"日本柴犬是日本本土最小的犬种，用于在日本多山的地形中，在浓密的灌木丛中，利用视觉和嗅觉进行捕猎的猎犬，警惕而敏捷，感觉敏锐。同时，他也是一种非常卓越的门卫犬和伴侣犬。在日本，柴犬被政府指定为“天然纪念物”。原因是其起源早，早在公元前1000年，柴犬就生活在日本山区，也叫丛林犬，动作轻盈敏捷，是十分优秀的犬种。"}},
                  {score:'0.27%',name:"中华田园犬",baike_info:false},
                  {score:'0.17%',name:"美系秋田犬",baike_info:false},
                  {score:'0.06%',name:"日本犬",baike_info:false}],

                  [{score:'81.21%',name:"英国短毛猫",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8B%B1%E5%9B%BD%E7%9F%AD%E6%AF%9B%E7%8C%AB/672846",image_url:"https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a292df5f01bf46fab315c6035a8d686",description:"英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。"}},
                  {score:'11.57%',name:"俄罗斯蓝猫",baike_info:{baike_url:"http://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E8%93%9D%E7%8C%AB/643065",image_url:"https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513da1c7f807346d55fbb3fbd9fe",description:"俄罗斯蓝猫(Russian Blue)，历史上曾被称做阿契安吉蓝猫，曾有过三种不同的名字。最初是阿契安吉蓝猫，直到20世纪40年代才有俄罗斯蓝猫的名字，另外有段时间它则叫做马耳他猫。证据显示，这种猫确实原产于俄罗斯，因为已在俄罗斯寒带地区发现了同种的猫。俄罗斯蓝猫体型细长，大而直立的尖耳朵，脚掌小而圆，走路像是用脚尖在走。身上披着银蓝色光泽的短被毛，配上修长苗条的体型和轻盈的步态，尽显一派猫中的贵族风度。"}},
                  {score:'0.94%',name:"卡尔特猫",baike_info:false},
                  {score:'0.91%',name:"苏格兰折耳猫",baike_info:false},
                  {score:'0.86%',name:"卡特尔猫",baike_info:false},
                  {score:'0.71%',name:"短毛猫",baike_info:false}],

                  [{score:'99.54%',name:"国宝大熊猫",baike_info:false},
                  {score:'0.18%',name:"秦岭四宝",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%A7%A6%E5%B2%AD%E5%9B%9B%E5%AE%9D/1309579",image_url:"https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbef1c6b4cfbaeaf2edda2cc9feb",description:"秦岭四宝是指生活在秦岭中的朱鹮、大熊猫、金丝猴,羚牛这四种珍稀动物。2011年参加西安世界园艺博览会，入住世园会四宝馆，使这一称谓进一步强化和固化。"}},
                  {score:'0.07%',name:"团团圆圆",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%9B%A2%E5%9B%A2%E5%9C%86%E5%9C%86/16688491",image_url:"https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a82b9015e372349648da9773912425b",description:"团团圆圆，腾讯游戏《洛克王国》中的宠物，可以超进化为泉水汤圆。闹元宵，月正圆，今夕知何夕。团圆事事同。星灿乌云裹，珠浮浊水中。"}},
                  {score:'0.07%',name:"棕色大熊猫",baike_info:false},
                  {score:'0.03%',name:"圆仔",baike_info:false},
                  {score:'0.01%',name:"小熊猫",baike_info:false}]],

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
    newResult = this.data.animalStorage[index]
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