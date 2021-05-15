// pages/plant/plant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    closeMore: false,
    // 选择的识别分类
    selectItem:'plant',
    // 滑块内容
    swiper_content:[{image_url:'../../picture/f3.jpg',index_content:'玫瑰（学名：Rosa rugosa Thunb.）：原产地中国。属蔷薇目，蔷薇科落叶灌木，枝杆多针刺，奇数羽状复叶，小叶5-9片，椭圆形，有边刺。花瓣倒卵形，重瓣至半重瓣，花有紫红色、白色，果期8-9月，扁球形。枝条较为柔弱软垂且多密刺，每年花期只有一次，因此较少用于育种，近来其主要被重视的特性为抗病性与耐寒性。玫瑰作为经济作物时，其花朵主要用于食品及提炼香精玫瑰油，玫瑰油应用于化妆品、食品、精细化工等工业。',index_title:'玫瑰'},
    {image_url:'../../picture/f1.jpg',index_content:'非洲菊（学名：Gerbera jamesonii Bolus）是菊科，大丁草属多年生、被毛草本植物。根状茎短，为残存的叶柄所围裹，具较粗的须根；叶基生，莲座状，叶片长椭圆形至长圆形，顶端短尖或略钝，叶柄具粗纵棱，多少被毛；花葶单生，或稀有数个丛生，无苞叶；毛于顶部最稠密，头状花序单生于花葶之顶；总苞钟形，花托扁平，裸露，蜂窝状；花冠管短，花药具长尖的尾部；瘦果圆柱形，密被白色短柔毛；冠毛略粗糙，鲜时污白色，干时带浅褐色，基部联合。花期11月至翌年4月。',index_title:'非洲菊'},
    {image_url:'../../picture/f2.jpg',index_content:'天竺葵（学名：Pelargonium hortorum ），别名洋绣球、石腊红、入腊红、日烂红、洋葵，属牻牛儿苗科，包括约230种多年生肉质、亚灌木或灌木植物。天竺葵原产非洲南部，世界各地普遍栽培。天竺葵幼株为肉质草本，老株半木质化；在西方是很好的装饰窗台的花卉，在欧洲大陆，如德奥等国，尤为常见。天竺葵生长期需要充足的阳光，因此冬季必须把它放在向阳处。光照不足，茎叶徒长，花梗细软，花序发育不良；弱光下的花蕾往往花开不畅，提前枯萎。',index_title:'天竺葵'}],
    // 当前滑块图片索引
    img_index:0,
    // 首页自动切换
    IndexAutoPlay: true,
    // 植物缓存
    plantStorage:[
                  [{score:'73.4%',name:"玫瑰",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%8E%AB%E7%91%B0/63206",image_url:"https://bkimg.cdn.bcebos.com/pic/21a4462309f7905297c355730bf3d7ca7acbd59a",description:"玫瑰(学名：Rosa rugosa Thunb.)：原产地中国。属蔷薇目，蔷薇科落叶灌木，枝杆多针刺，奇数羽状复叶，小叶5-9片，椭圆形，有边刺。花瓣倒卵形，重瓣至半重瓣，花有紫红色、白色，果期8-9月，扁球形。枝条较为柔弱软垂且多密刺，每年花期只有一次，因此较少用于育种，近来其主要被重视的特性为抗病性与耐寒性。玫瑰作为经济作物时，其花朵主要用于食品及提炼香精玫瑰油，玫瑰油应用于化妆品、食品、精细化工等工业。在欧洲诸语言中，蔷薇、玫瑰、月季都是使用同一个词，如英语是rose，德语是Die Rose。玫瑰是英国的国花。通俗意义中的“玫瑰”已成为多种蔷薇属植物的通称。且事实上杂交玫瑰也是由蔷薇属下各物种杂交选育所产生。此内容请看“玫瑰花”一词。"}},
                  {score:'16.91%',name:"月季花",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%9C%88%E5%AD%A3%E8%8A%B1/14505544",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a139fe24202f903918fa1ecc05c",description:"月季花(学名：Rosa chinensis Jacq.)：被称为花中皇后，又称“月月红”，是常绿、半常绿低矮灌木，四季开花﹐一般为红色﹐或粉色、偶有白色和黄色﹐可作为观赏植物，也可作为药用植物，亦称月季。有三个自然变种，现代月季花型多样，有单瓣和重瓣，还有高心卷边等优美花型；其色彩艳丽、丰富，不仅有红、粉、黄、白等单色，还有混色、银边等品种；多数品种有芳香。月季的品种繁多，世界上已有近万种，中国也有千种以上。自然花期8月到次年4月，花成大型，由内向外，呈发散型，有浓郁香气，可广泛用于园艺栽培和切花。月季的适应性强，耐寒、抗旱，不论地栽、盆栽均可，适用于美化庭院、装点园林、布置花坛、配植花篱、花架，月季栽培容易，可作切花，用于做花束和各种花篮，月季花朵可提取香精，并可入药。也有较好的抗真菌及协同抗耐药真菌活性。红色切花更成为情人间必送的礼物之一，并成为爱情诗歌的主题。中国是月季的原产地之一。月季花荣秀美，姿色多样，四时常开，深受人们的喜爱，中国有52个城市将它选为市花，1985年5月月季被评为中国十大名花第五名。)"}},
                  {score:'0.50%',name:"洋桔梗",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%B4%8B%E6%A1%94%E6%A2%97/6946300",image_url:"https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e8fead6a53ed12f2eb938948d",description:"洋桔梗(Eustoma grandiflorum(Raf.)Shinners)龙胆科多年生植物，株高30-100厘米。叶对生，阔椭圆形至披针形，几无柄，叶基略抱茎；叶表蓝绿色。雌雄蕊明显，苞片狭窄披针形，花瓣覆瓦状排列。花色丰富，有单色及复色，花瓣单瓣与双瓣之分。洋桔梗又名草原龙胆，原生于美国南部至墨西哥之间的石灰岩地带，现代的洋桔梗栽培是在日本兴旺起来的。在20世纪60年代已开始作商业化的栽培。洋桔梗花色典雅明快，花形别致可爱，是国际上十分流行的盆花和切花种类之一。"}}],
      
                  [{score:'83.52%',name:"非洲菊",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%9D%9E%E6%B4%B2%E8%8F%8A/530646",image_url:"https://bkimg.cdn.bcebos.com/pic/8718367adab44aed60603e2dbf1c8701a08bfbc9",description:"非洲菊(学名：Gerbera jamesonii Bolus)是菊科，大丁草属多年生、被毛草本植物。根状茎短，为残存的叶柄所围裹，具较粗的须根；叶基生，莲座状，叶片长椭圆形至长圆形，顶端短尖或略钝，叶柄具粗纵棱，多少被毛；花葶单生，或稀有数个丛生，无苞叶；毛于顶部最稠密，头状花序单生于花葶之顶；总苞钟形，花托扁平，裸露，蜂窝状；花冠管短，花药具长尖的尾部；瘦果圆柱形，密被白色短柔毛；冠毛略粗糙，鲜时污白色，干时带浅褐色，基部联合。花期11月至翌年4月。非洲菊原产于非洲南部的德兰士瓦，喜温暖通风、阳光充足的环境。该种花花色丰富，分别有红色、白色、黄色、橙色、紫色等，大而色泽艳丽，可被用于切花、盆栽及庭院装饰。"}},
                  {score:'3.58%',name:"雏菊",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%9B%8F%E8%8F%8A/16619",image_url:"https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc379312bb10d51fcc4b74542a9b485",description:"雏菊(学名：Bellis perennis L.)，又名马兰头花、延命菊，春菊、太阳菊等。是菊科雏菊属植物的一种，多年生草本植物。高10厘米左右。雏菊原产于欧洲。原种被视为丛生的杂草，开花期在春季。雏菊在能够渡夏的寒冷地区可以进行分枝繁殖。早春开花，生气盎然，具有君子的风度和天真烂漫的风采，深得意大利人的喜爱，因而推举为国花。"}},
                  {score:'1.49%',name:"菊花",baike_info:false}],

                  [{score:'85.00%',name:"天竺葵",baike_info:false},
                  {score:'0.74%',name:"家天竺葵",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%AE%B6%E5%A4%A9%E7%AB%BA%E8%91%B5/7551371",image_url:"https://bkimg.cdn.bcebos.com/pic/c75c10385343fbf25814f81ebe7eca8065388fd7",description:"家天竺葵(学名：Pelargonium domesticum Bailey)是牻牛儿苗科天竺葵属植物。多年生草本，高30-40厘米，茎直立，分枝。基部木质化，被开展的长柔毛。叶互生；托叶干膜质，三角状宽卵形。伞形花序与叶对生或腋生，明显长于叶，具花数朵。花期7-8月(温室冬季亦开花)。原产于非洲南部；世界各地广为栽培。中国北方常见栽培种。性喜温暖和凉爽的气候环境，喜阳光照射，耐寒冷、忌酷热，要求在肥沃疏松、富含有机质的培养土中生长。家天竺葵品种花色繁多，嫩绿，粉红、紫红，色彩非常美丽，是公园、庭院、花坛绿化美化的极好植物，也宜盆栽。"}},
                  {score:'0.65%',name:"马蹄纹天竺葵",baike_info:false}],

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
  newResult = this.data.plantStorage[index]
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