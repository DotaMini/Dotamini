var app = getApp();
Page({
  data: {
    userInfor: {},
  },
  onLoad: function (options) {
      var that = this;
      app.getUserInfo(function(userinfo) {
        that.setData({
          userInfo: userinfo
        })
      })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})