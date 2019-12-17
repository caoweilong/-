// pages/exam03/exam03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"黑松露",
    list:["松茸","蘑菇","蒜"],
    rows:[{name:"果木烤鸭"},{name:"烤肉宛"},{name:"蒜香黄鱼"}],
    rows2: [{ name: "四干果", list: ["苹果1", "梨2", "桃3", "葡萄4"]},{name:"四鲜果",list:["苹果","梨","桃","葡萄"]}],
    fa:12,

  },
  handle2:function(){
    //修改data中的数据
    this.setData({
      msg:"烤面筋"
    });

  },
  handle3:function(){
    //获取data中的数据
    console.log(this.data.msg)
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