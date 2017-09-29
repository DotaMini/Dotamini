var detail = '../detail/index'
Page({
  data: {
    slider: [
      {
        now: 1,
        desc: 'Ti6 Wings 登顶阵容',
      },
      {
        now: 2,
        desc: 'Ti7 勇士联赛破泞之战',
      },
      {
        now: 3,
        desc: 'Ti7不朽二珍藏',
      },
      {
        now: 4,
        desc: 'Dota2 艺术画廊',
      },
      {
        now: 5,
        desc: 'Coco Ti7额外礼物',
      },
    ],
    swiperCurrent: 0,
    news: [
      {
        img: '../../img/1.jpg',
        title: '7月1日更新：勇士令状增加奖励--昆卡和潮汐的语音包',
        time: '1小时前',
        view: '1111',
      },
      {
        img: '../../img/2.jpg',
        title: '7月1日更新：勇士令状增加奖励--昆卡和潮汐的语音包',
        time: '1小时前',
        view: '1111',
      },
      {
        img: '../../img/3.jpg',
        title: '7月1日更新：勇士令状增加奖励--昆卡和潮汐的语音包',
        time: '1小时前',
        view: '1111',
      },
      {
        img: '../../img/4.jpg',
        title: '7月1日更新：勇士令状增加奖励--昆卡和潮汐的语音包',
        time: '1小时前',
        view: '1111',
      },
      {
        img: '../../img/5.jpg',
        title: '7月1日更新：勇士令状增加奖励--昆卡和潮汐的语音包',
        time: '1小时前',
        view: '1111',
      }
    ]
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  detail: function() {
      wx.navigateTo({
        url: detail,
      })
  },
  onLoad: function (options) {
      
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