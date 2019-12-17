var app = getApp()
Page({
  data: {
    url1: "http://cdn.tmooc.cn/tmooc-web/css/img/tmooc-logo.png",
    url: "http://cdn.tmooc.cn/bsfile//imgad///5863ee60a86f46329e628b18ca7e0045.jpg",
    movies: [
      { url: 'http://cdn.tmooc.cn/bsfile//imgad///af9cc57e074247a49303d52b79657491.jpg' },
      { url: 'http://cdn.tmooc.cn/bsfile//imgad///1a7a90030ff2458799fa83f366f901c8.jpg' },
      { url: 'http://cdn.tmooc.cn/bsfile//imgad///f2ad3cd50c47404b96dd7e7cc758f455.png' },
      { url: 'http://cdn.tmooc.cn/bsfile//imgad///1a7a90030ff2458799fa83f366f901c8.jpg' }
    ]
  },
  onLoad: function () {
    console.log(this.data.url)
  }
})
