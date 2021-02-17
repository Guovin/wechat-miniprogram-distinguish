// moreFunc/morefunc.js
import WxValidate from '../utils/WxValidate.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 更多悬浮框点击
    moreTap:false,

    // 反馈对话框是否显示
    dialogFormVisible: false,
    // 反馈表单
    form: {
      name: '',
      massage: ''
    },
    myStorage: [], //缓存记录
    nothingTip: true, //无反馈记录提示
    loading: false, //发送加载中
    showAuthTip: false, //授权提示对话框
    // 用户信息
    avatarUrl: '', //头像地址
    nickName: '',//昵称
    viewInto: '', //对话框消息要滚动到的位置
    textarea_focus: false, //textarea获取焦点
    dialogScrollHeight:'250rpx', //对话框滚动框高度

    // 识别记录缓存
    historyLists: [],
    //当前存在识别记录未查看的数量
    historyNum:0
  },

  // 显示识别记录
  showHistory(){
    // 读取缓存记录
    let info = wx.getStorageInfoSync()
    let keyLists = info.keys
    let historyLists = []
    keyLists.forEach(item => {
      // 区分反馈缓存
      if(item.indexOf("https://") == -1 && item.indexOf("historySaw") == -1){
        let history = {}
        let keys = item.split(";")
        history.title = keys[0]
        history.time = keys[1]
        history.score = keys[2]
        let url  = wx.getStorageSync(item)
        history.url = url
        historyLists.push(history)
      }
    })
    this.setData({historyLists:historyLists,historyShow:true,moreTap:false})
    // 清空未查看的识别结果数
    wx.setStorage({
      data: 0,
      key: 'historySaw',
    })
    // 跳转识别结果记录页面
    wx.navigateTo({
      url: '../history/history',
      success(res){
        res.eventChannel.emit('sendHistory',{historyLists:historyLists})
      }
    })
  },
 
  // 更多按钮点击事件
  openLeftPage() {
    let that = this
    if(that.data.moreTap){
      that.setData({moreTap:false})
    }else{
      // 计算识别历史数量
      that.countHistoryNum()
      that.setData({moreTap:true})
    }
  },

  // 计算当前未查看的识别记录数量
  countHistoryNum(){
    let num = 0
    let saw = wx.getStorageSync('historySaw')
    if(saw == 0 || saw == null){
      // 缓存未查看的识别结果数
      wx.setStorage({
        data: num,
        key: 'historySaw',
      })
      this.setData({historyNum:num})
    }
    else{
      num = saw
      this.setData({historyNum:num})
    }
  },

  // 调用反馈组件事件
  openFeedBack(){
    if(this.data.moreTap){
      this.showDialog()
      this.setData({moreTap:false})
    }
  },


  // 点击区域textarea获取焦点
  focusOn(){
    this.setData({textarea_focus:true})
  },

  //取消授权
  authButtonNo(){
    this.setData({showAuthTip: false})
  },

  //同意授权
  authButtonYes(){
    this.setData({showAuthTip: false})
  },

  // 获取缓存中的用户信息
  getUserFromStorage(){
    return new Promise((resolve)=>{
      let that = this
      wx.getStorageInfo({
        success (res) {
          // 遍历寻找用户信息，区分识别缓存
          let user = []
          res.keys.forEach(item =>{
            // 根据用户头像地址进行区分
            if(item.indexOf("https://") != -1){
              user = item
            }
          })
          if(user.length != 0){
            resolve(that.setData({nickName:user.split(",")[0]}))
          }else{
            resolve()
          }
        },
        fail(){
          wx.showToast({
            title: '读取缓存数据失败',
            icon: 'error'
          })
        }
      })
  })},

   //获取Storage并初始化对话框
   getStorage(){
    return new Promise((resolve)=>{
        let that = this
        // 获取所有storage中的key
        wx.getStorageInfo({
          success: (option) => {
            // 根据key查询所有value
            let newList = []
            option.keys.forEach(item=>{
              if(item.indexOf("https://") != -1){
                try {
                  let value = wx.getStorageSync(item)
                  if (value) {
                    // 格式化处理storage
                    let emailContent = value.split(",")
                    let nameUrlTime = item.split(",")
                    let history = {}
                    history.name = nameUrlTime[0]
                    history.avatarUrl = nameUrlTime[1]
                    history.time = nameUrlTime[2]
                    history.email = emailContent[0]
                    history.content = emailContent[1]
                    newList.push(history)
                  }
                } catch (e) {
                  console.log(e)
                }
              }
            })
            // 更新storage并移动滚动条位置
           resolve(that.setData({myStorage:newList,viewInto:`message_${newList.length - 1}`}))
          },
          fail(){
            that.setData({dialogFormVisible:true})
          }
        })
    })
  },

  // 打开对话框
  showDialog(){
    let that = this
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userinfo" 这个 scope
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          // 如果没有，则进行提示授权
          that.setData({showAuthTip:true})
        }else{
          // 授权成功
          // 表单校验初始化
          that.initValidate()
          // 获取缓存中的用户信息
          that.getUserFromStorage().then(()=>{
          // 授权成功后，若缓存中用户信息不存在，则进行获取
          if(!that.data.nickName){
            // 获取用户信息
            wx.getUserInfo({
              success: function(res) {
                let name = res.userInfo.nickName
                let avatar = res.userInfo.avatarUrl
                that.setData({avatarUrl:avatar,nickName:name,dialogFormVisible:true})
              }
            })
          }
          // 之前已经授权，存在用户信息缓存，直接还原历史记录
          else if(that.data.nickName && that.data.myStorage.length == 0){
            that.getHistory()
          }
          // 小程序未被关闭，用户信息已经存在，直接打开对话框
          else{
            that.setData({dialogFormVisible:true})
          }
        }
        )}
      }
    })
  },

  // 还原历史记录
  getHistory(){
    //获取现有的storage,异步处理
    let that = this
    that.getStorage().then(()=>{
      // 自动填写上次的邮箱地址
      if(that.data.myStorage.length != 0){
        let storage = that.data.myStorage[that.data.myStorage.length - 1]
        let email = storage.email
        let avatarUrl = storage.avatarUrl
        that.setData({'form.name':email,avatarUrl:avatarUrl})
        that.setData({dialogFormVisible:true,nothingTip:false,dialogScrollHeight:'450rpx'})
      }else{
        that.setData({dialogFormVisible:true})
      }
      })
  },

  onInputEmail(e){
    this.setData({'form.name':e.detail.value})
  },

  onTextarea(e){
    this.setData({'form.massage':e.detail.value})
  },

  closeFeedBack(){
    this.setData({dialogFormVisible:false})
  },

  // 发送反馈
  FeedBack(e) {
      let that = this
      that.setData({loading:true})
      e.detail.value.massage = e.detail.value.massage.trim()
      let params = e.detail.value
      //校验表单
      if (!that.WxValidate.checkForm(params)) {
        const error = that.WxValidate.errorList[0]
        wx.showToast({
          title: error.msg,
          icon: 'none'
        })
        return that.setData({loading:false})
      }
      else {
        // 验证通过
        wx.request({
          url: 'https://hscode.vip/api/feedBack/massage',
          data: that.data.form,
          method:'POST',
          success(res){
            if (res.data.code != 200) {
              wx.showToast({
                title: '发送失败',
                icon: 'error'
              })
            }else{
              //保存消息记录
              let newDate = new Date() //获取当前日期与时间
              // 保存Storage，key为昵称+头像地址+时间，data为发送的邮箱+内容
              let key = `${that.data.nickName},${that.data.avatarUrl},${newDate.toLocaleString()}`
              let data = `${that.data.form.name},${that.data.form.massage}`
              wx.setStorageSync(key,data)
              that.getStorage()
              that.setData({loading:false,nothingTip:false,'form.massage':''})
            }
          }
        })
      }
  },

// 表单校验
  initValidate(){
    let rules = {
      name:{
        required:true,
        email:true
      },
      massage:{
        required:true,
        minlength:1
      }
    }
    let messages = {
      name:{
        required:'请输入您的邮箱地址',
        email:'请输入正确的邮箱地址'
      },
      massage:{
        required:'请输入反馈内容',
        minlength:'请不要发送空内容'
      }
    }
    // 实例化验证方法对象
    this.WxValidate = new WxValidate(rules,messages)
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