// index.js
Page({
  data: {
    
  },

  // 点击跳转通用识别
  selectAdvance(){
    wx.navigateTo({
      url: '../advance/advance',
    })
  },

  // 点击跳转植物识别
  selectPlant(){
    wx.navigateTo({
      url: '../plant/plant',
    })
  },

  // 点击跳转动物识别
  selectAnimal(){
    wx.navigateTo({
      url: '../animal/animal',
    })
  },

  // 点击跳转红酒识别
  selectRedWine(){
    wx.navigateTo({
      url: '../red_wine/red_wine',
    })
  },

  // 点击跳转菜品识别
  selectDishs(){
    wx.navigateTo({
      url: '../dishs/dishs',
    })
  },


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


  onLoad() {
  }
})
