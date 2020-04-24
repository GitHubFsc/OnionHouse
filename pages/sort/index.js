// pages/sort/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex : 0,
    sclTabIndex : 0,
    price : 0,
    sales : 0,
  },
  sort_swiper(e) {
    console.log(e)
    console.log(e.detail.current)
    const that = this;
    // if(that.data.swiperIndex == 0){
      that.setData({
        swiperIndex: e.detail.current
      })
    // }else{
    //   if(e.detail.current==9){
    //     that.setData({
    //       swiperIndex: 0
    //     })
    //   }else{
    //     that.setData({
    //       swiperIndex: e.detail.current+1
    //     })
    //   }
    // }
  },
  // sort_nav(e){
  //   console.log(e);
  //   const that = this;
  //   that.setData({
  //     swiperIndex: e.currentTarget.dataset.index,
  //   })
  // },
  sc_left_tab(e){
    console.log(e)
    let that = this;
    that.setData({
      sclTabIndex: e.currentTarget.dataset.index,
    })
  },
  price(){
    let that = this;
    let price = that.data.price;
    if(price==0){
      that.setData({
        price: 1
      })
    }else{
      that.setData({
        price: 0
      })
    }
  },
  sales(){
    let that = this;
    let sales = that.data.sales;
    if(sales==0){
      that.setData({
        sales: 1
      })
    }else{
      that.setData({
        sales: 0
      })
    }
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