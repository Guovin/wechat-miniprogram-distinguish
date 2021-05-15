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
    // 当前存在识别记录数量
    historyNum:0,
    // 显示删除按钮
    showDelete:false,
    // 删除标签内容
    delete_text:'× 删除模式'
  },

  //启动删除模式
  openDelete(){
    if(!this.data.showDelete){
      this.setData({showDelete:true,delete_text:'× 关闭删除模式'})
    }else{
      this.setData({showDelete:false,delete_text:'× 删除模式'})
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

  // 清空记录
  clearAll(){
    let that = this
    wx.showModal({
      title:'提示',
      content:'确定要清空所有记录吗？',
      success (res) {
        if (res.confirm) {
          // 区分其它缓存记录
          // 读取缓存记录
          let info = wx.getStorageInfoSync()
          let keyLists = info.keys
          keyLists.forEach(item => {
            // 区分反馈、授权信息缓存
            if(item.indexOf("https://") == -1  && item.indexOf("auth") == -1){
              wx.removeStorage({
                key: item,
                success(){
                  // 清空页面上显示的记录
                  that.setData({historyLists:[]})
                  return wx.showToast({
                    icon:'success',
                    title: '清空记录成功'
                  })
                },
                fail:(res)=>{
                  return wx.showToast({
                    icon:'error',
                    title: '清空记录失败！'
                  })
                }
              })
            }
          })
        } else if (res.cancel) {
          return
        }
      }    
    })
  },

  // 删除单条记录
  delete(e){
    let key = e.currentTarget.dataset.storage.title+";"+e.currentTarget.dataset.storage.time+";"+e.currentTarget.dataset.storage.score
    let time = e.currentTarget.dataset.storage.time
    let history = this.data.historyLists
    let that = this
    wx.showModal({
      title:'提示',
      content:'确定要删除此条记录吗？',
      success (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: key,
            success(res){
              // 删除页面上显示的记录
              history.splice(history.findIndex(e=>e.time===time),1)
              that.setData({historyLists:history})
              return wx.showToast({
                icon:'success',
                title: '删除成功'
              })
            },
            fail(res){
              return wx.showToast({
                icon:'error',
                title: '删除失败！'
              })
            }
          })
        } else if (res.cancel) {
          return
        }
      }    
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