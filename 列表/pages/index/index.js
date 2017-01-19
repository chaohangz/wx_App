//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: [{
        img: '1',
        title: 'This is a title',
        fraction: '5',
        comment: '8',
        text: 'some text in here'
      }, {
        img: '1',
        title: 'This is a title',
        fraction: '5',
        comment: '8',
        text: 'some text in here'
      }, {
        img: '1',
        title: 'This is a title',
        fraction: '5',
        comment: '8',
        text: 'some text in here'
      }, {
        img: '1',
        title: 'This is a title',
        fraction: '5',
        comment: '8',
        text: 'some text in here'
      }]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
