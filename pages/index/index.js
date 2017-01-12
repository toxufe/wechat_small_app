//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:{},
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  pullData:function(){
    var that = this; 
    wx.request({
      url: 'https://wangxx.tunnel.2bdata.com', //仅为示例，并非真实的接口地址
      dataType:'json',
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
            list: res.data
        })
      }
    })
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
