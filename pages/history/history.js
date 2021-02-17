// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 识别记录缓存
    historyLists: [],
    // 显示识别记录
    historyShow: false,
    //当前存在识别记录数量
    historyNum:0
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let eventChannel = this.getOpenerEventChannel()
    eventChannel.on('sendHistory',function(res){
      that.setData({historyLists:res.historyLists})
    })
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