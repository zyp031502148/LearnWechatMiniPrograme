// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTab:["待付款","已完成","全部"],
    orderTabContent: [
      {
        value: "待付款", 
        id: 'noPay',
        orderList: [
          { content: "详情1" },
          { content: "详情1" }
        ]
      },
      { 
        value: "已完成", 
        id: 'over',
        orderList: [
          { content: "详情2" },
          { content: "详情2" }
        ]
      },
      { 
        value: "全部",
        id: 'all',
        orderList: [
          { content: "详情3" },
          { content: "详情3" }
        ]
     }
      ],
      toview:'noPay',
      activeTab:0
      

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
  choiceDrinkMenuIndex: function (even) {
    var index = even.currentTarget.dataset.wordindex
    var setId = this.data.orderTabContent[index].id
    this.setData({
      toview:setId,
      activeTab: index
    })
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