// pages/dishs/dishs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择的识别分类
    selectItem:'dishs',
    // 滑块内容
    swiper_content:[{image_url:'../../picture/youyu.jpg',index_content:'爆炒鱿鱼，是用鱿鱼制作的一道家常菜。鱿鱼有少量的脂肪和碳水化合物，含有大量的胆固醇，鱿鱼中的微量元素以及钙、磷、硒、钾、钠含量都是较高的。1.鱿鱼富含钙、磷、铁元素，利于骨骼发育和造血，能有效治疗贫血；2.鱿鱼除富含蛋白质和人体所需的氨基酸外，还含有大量的牛黄酸，可抑制血液中的胆固醇含量，缓解疲劳，恢复视力，改善肝脏功能；3.鱿鱼所含多肽和硒有抗病毒、抗射线作用。',index_title:'爆炒鱿鱼'},
    {image_url:'../../picture/d2.jpg',index_content:'红烧肉，一道著名的大众菜肴，各大菜系都有自己特色的红烧肉。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，锅具以砂锅为主，做出来的肉肥瘦相间，香甜松软，营养丰富，入口即化。红烧肉在我国各地流传甚广，做法多达二三十种。猪肋条肉（五花肉）：猪肉含有丰富的优质蛋白质和必需的脂肪酸，并提供血红素（有机铁）和促进铁吸收的半胱氨酸，能改善缺铁性贫血；具有补肾养血，滋阴润燥的功效。',index_title:'红烧肉'},
    {image_url:'../../picture/d3.jpg',index_content:'咕噜肉(Sweet and Sour Pork)，又名古老肉，是一道广东的传统特色名菜。此菜始于清代。当时在广州市的许多外国人都非常喜欢食用中国菜，尤其喜欢吃糖醋排骨，但吃时不习惯吐骨。糖醋排骨的历史较老，现经改制后，便改称为“古老肉”。外国人发音不准，常把“古老肉”叫做“咕噜肉”，因为吃时有弹性，嚼肉时有格格声，故长期以来这两种称法并存。此菜在国内外享有较高声誉。市面上常见的是罐头菠萝搭配的咕噜肉。',index_title:'咕噜肉'}],
    // 当前滑块图片索引
    img_index:0,
    // 首页自动切换
    IndexAutoPlay: true,
    // 菜品缓存
    dishStorage:[[{probability:'20.96%',has_calorie:true,name:"炝炒腰花",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%82%9D%E7%82%92%E8%85%B0%E8%8A%B1/2531077",image_url:"https://bkimg.cdn.bcebos.com/pic/738b4710b912c8fc5b85e572f7039245d688211e",description:"猪腰含有蛋白质、脂肪、碳水化合物、钙、磷、铁和维生素等，有健肾补腰、和肾理气之功效。猪腰子具有补肾气、通膀胱、消积滞、止消渴之功效。可用于治疗肾虚腰痛、水肿、耳聋等症。1.适宜肾虚之人腰酸腰痛、遗精、盗汗者食用；适宜老年人肾虚耳聋、耳鸣者食用；2.血脂偏高者、高胆固醇者忌食。"}},
                  {probability:'11.84%',has_calorie:true,name:"酱肉丝",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%85%B1%E8%82%89%E4%B8%9D/2689787",image_url:"https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d1fb1014b39b504fc2d562690e",description:"酱肉丝是一道传统的家常菜，主要制作食材是猪里脊肉，配料是豆腐皮等，调料是甜面酱、白糖、料酒等，通过大火烧制而成。"}},
                  {probability:'9.56%',has_calorie:true,name:"爆三样",baike_info:false},
                  {probability:'8.08%',has_calorie:true,name:"爆炒鱿鱼",baike_info:false},
                  {probability:'4.01%',has_calorie:true,name:"牛柳",baike_info:false}],

                  [{probability:'82.08%',has_calorie:true,name:"红烧肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%BA%A2%E7%83%A7%E8%82%89/571767",image_url:"https://bkimg.cdn.bcebos.com/pic/f31fbe096b63f624c51a87b68944ebf81b4ca3c4",description:"红烧肉，一道著名的大众菜肴，各大菜系都有自己特色的红烧肉。其以五花肉为制作主料，最好选用肥瘦相间的三层肉(五花肉)来做，锅具以砂锅为主，做出来的肉肥瘦相间，香甜松软，营养丰富，入口即化。红烧肉在我国各地流传甚广，做法多达二三十种，具有一定的营养价值。"}},
                  {probability:'7.74%',has_calorie:true,name:"糖醋排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%B3%96%E9%86%8B%E6%8E%92%E9%AA%A8/31447",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1391024834f903918fa1ecc0ce",description:"糖醋排骨(Sweet and Sour Spare Ribs)，是糖醋味型中具有代表性的一道大众喜爱的特色传统名菜。它选用新鲜猪子排作主料，肉质鲜嫩，成菜色泽红亮油润。“糖醋”中国各大菜系都拥有的一种口味。糖醋排骨起源浙江，是典型的一道浙菜。正宗的糖醋排骨做法和用料都颇为讲究，一般排骨选用仔排、肋排。排骨需先去除血水，沥干腌制入味，然后裹上粉下油炸至表面金黄酥脆捞出备用，冰糖炒出糖色后放排骨入锅翻炒，最后淋上米醋调成糖醋味。这里一定要用米醋，陈醋味道太重影响口感。沪菜用料简单注重的是酸甜的口味里面用到了番茄酱 这也是沪菜的特点，浙菜用料丰富，做法精细，色、香、味具全；川菜做糖醋排骨讲究排骨精选与糖盐醋的搭配 。糖醋排骨的调配汁只有沪菜会加番茄酱，沪菜口味偏甜 ， 浙菜和川菜偏重 。沪菜浙菜的糖醋排骨属于烧菜，而川菜中的糖醋排骨 是四川一道很有名的凉菜，用的是炸收的烹饪方法，属于糖醋味型，琥珀油亮，干香滋润，甜酸醇厚，是一款好的下酒菜或是开胃菜。颇受中国人民喜爱。淮扬菜的糖醋排骨在技法上兼顾了浙菜的和川菜的特点，口味上结合沪菜的特点，用糖醋，葱蒜调味，用油热煸，淮扬菜做法的糖醋排骨历史较其余三个菜系较短。"}},
                  {probability:'1.80%',has_calorie:true,name:"烧排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%83%A7%E6%8E%92%E9%AA%A8/4766890",image_url:"https://bkimg.cdn.bcebos.com/pic/4bed2e738bd4b31c8701889a579c307f9e2f070852f5",description:"烧排骨，做法多样，口味独特。糖醋排骨，红烧排骨，土豆烧排骨，冬瓜排骨汤，秘制烧排骨，番茄排骨汤，香辣排骨，薄荷蒸排骨，蜜汁烤排骨，京都排骨等都为烧排骨的一种。"}},
                  {probability:'1.47%',has_calorie:true,name:"排骨汤",baike_info:false},
                  {probability:'1.42%',has_calorie:true,name:"无锡排骨",baike_info:false}],

                  [{probability:'77.72%',has_calorie:true,name:"咕咾肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%92%95%E5%92%BE%E8%82%89/677632",image_url:"https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee87ad3987bffb43166c22dff9",description:"咕咾肉又称咕噜肉，是广东的一道特色传统名菜，属于粤菜，以甜酸汁及猪肉煮成。咕咾肉作为欧美人士最熟悉的中国菜之一，常见于中国以外的唐人街的餐馆。"}},
                  {probability:'14.04%',has_calorie:true,name:"糖醋排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%B3%96%E9%86%8B%E6%8E%92%E9%AA%A8/31447",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1391024834f903918fa1ecc0ce",description:"糖醋排骨(Sweet and Sour Spare Ribs)，是糖醋味型中具有代表性的一道大众喜爱的特色传统名菜。它选用新鲜猪子排作主料，肉质鲜嫩，成菜色泽红亮油润。“糖醋”中国各大菜系都拥有的一种口味。糖醋排骨起源浙江，是典型的一道浙菜。正宗的糖醋排骨做法和用料都颇为讲究，一般排骨选用仔排、肋排。排骨需先去除血水，沥干腌制入味，然后裹上粉下油炸至表面金黄酥脆捞出备用，冰糖炒出糖色后放排骨入锅翻炒，最后淋上米醋调成糖醋味。这里一定要用米醋，陈醋味道太重影响口感。沪菜用料简单注重的是酸甜的口味里面用到了番茄酱 这也是沪菜的特点，浙菜用料丰富，做法精细，色、香、味具全；川菜做糖醋排骨讲究排骨精选与糖盐醋的搭配 。糖醋排骨的调配汁只有沪菜会加番茄酱，沪菜口味偏甜 ， 浙菜和川菜偏重 。沪菜浙菜的糖醋排骨属于烧菜，而川菜中的糖醋排骨 是四川一道很有名的凉菜，用的是炸收的烹饪方法，属于糖醋味型，琥珀油亮，干香滋润，甜酸醇厚，是一款好的下酒菜或是开胃菜。颇受中国人民喜爱。淮扬菜的糖醋排骨在技法上兼顾了浙菜的和川菜的特点，口味上结合沪菜的特点，用糖醋，葱蒜调味，用油热煸，淮扬菜做法的糖醋排骨历史较其余三个菜系较短。"}},
                  {probability:'1.72%',has_calorie:true,name:"荔枝肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8D%94%E6%9E%9D%E8%82%89/1182132",image_url:"https://bkimg.cdn.bcebos.com/pic/a8014c086e061d955135c17479f40ad162d9ca0f",description:"荔枝肉是福建省福州市、莆田市等地的一道特色传统名菜，属于闽菜系；该菜品已有二三百年历史。因原料中有白色的荸荠和切成十字花刀的猪肉，烹调后因外形型似荔枝而得名。制法是将猪瘦肉剞上十字花刀，切成斜形块，因剞的深度、宽度均匀恰当，炸后卷缩成荔枝形，佐以红糟、香醋、白糖、酱油、麻油、湿淀粉等调料即成。"}},
                  {probability:'1.30%',has_calorie:true,name:"宫保鸡丁",baike_info:false},
                  {probability:'1.05%',has_calorie:true,name:"生炒骨",baike_info:false}]],
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
 newResult = this.data.dishStorage[index]
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
onShareAppMessage: function () {

}
})