var app = getApp();
// pages/owner/owner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:null,
    deg:0,
    degs:0,
    list:[
      {name:'张三',content:'xxxxx'},
      { name: '李四', content: 'xxxxx' },
      { name: '丁五', content: 'xxxxx' }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.userData =  app.globalData.userInfo
    this.setData({
      userData: app.globalData.userInfo
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
   * 折叠展开动画
   */
  animate: function () {
    let deg = this.data.degs;
    deg = deg==0 ? 90 : 0
    this.setData({
      degs:deg
    })
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