// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drinkTitleList:['冰饮','果饮','热饮','茶饮','甜点'],
    drinkList:[
      [{ value: 1, category: 'cold' }, { value:1, category: 'cold' }, { value: 1, category: 'cold' }, { value: 1, category: 'cold' }],
      [{ value: 2, category: 'flute' }, { value: 2, category: 'flute' }, { value: 2, category: 'flute' }, { value: 2, category: 'flute' }],
      [{ value: 3, category: 'hot' }, { value: 3, category: 'hot' }, { value: 3, category: 'hot' }, { value: 3, category: 'hot' }],
      [{ value: 4, category: 'tea' }, { value: 4, category: 'tea' }, { value: 4, category: 'tea' }, { value: 4, category: 'tea' }],
      [{ value: 5, category: 'cascate' }, { value: 5, category: 'cascate' }, { value: 5, category: 'cascate' }, { value: 5, category: 'cascate' }]],
      toview:'cold'

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
  choiceDrinkMenuIndex: function (even) {
    var dinkListIndex = even.currentTarget.dataset.wordindex
    this.setData({
      toview: this.data.drinkList[dinkListIndex][0].category
    })
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