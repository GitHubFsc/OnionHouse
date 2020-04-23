import {
  Rnd,
  GetKBaseList
} from '../../utils/axios.js';

const app = getApp()


Page({
  data: {
    location : "长峰中心",
    Carousel :[1,2,3],
    current : 1
  },
  onLoad: function (options) {
  },
  
  /*点击路由跳转*/
  routing_search() {
    wx.navigateTo({
      url: '../search/index',
    })
  },

  routing_news() {
    wx.navigateTo({
      url: '../news/index',
    })
  },
  /*点击事件绑定*/
  dingwei() {
    console.log("点击定位")
  },
  sort_swiper(e){
    console.log(e.detail.current)
  },
  sort(e){
    console.log(e)
  },
  onShow: function () {
    // 页面出现在前台时执行
  },
  onReady: function () {
    // 页面首次渲染完毕时执行
  },
  onHide: function () {
    // 页面从前台变为后台时执行
  },
  onUnload: function () {
    // 页面销毁时执行
  },
  onPullDownRefresh: function () {
    // 触发下拉刷新时执行
  },
  onReachBottom: function () {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function () {
    // 页面滚动时执行
  },
})