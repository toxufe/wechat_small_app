// pages/index/calculater.js
var util = require('../../utils/perSystem.js');//计算器modal
var operNum = [];
var istyping = false;
var result = 0;
var oper = '';
Page({
  data: {
    currentNum: 0
  },
  clickDigt: function (e) {
    var currentValue = e.currentTarget.dataset.num;
    var oldData = this.data.currentNum;
    if (istyping) {
      this.setData({
        currentNum: oldData + currentValue
      });
    } else {
      this.setData({
        currentNum: currentValue
      });
    }
    istyping = true;
  },


  opersystem: function (e) {
    var currentValue = e.currentTarget.dataset.num;
    operNum.push(parseInt(this.data.currentNum));
    if (currentValue == "=") {
      result = util.perSystem.Oper(operNum[0], operNum[1]);
      if (isNaN(result)) {
        result = 0;
      }
      //console.log('result',result);
      this.setData({
        currentNum: result
      });
      operNum = [];
    } else {
      util.perSystem.OperSymol(currentValue);
    }
    istyping = false;
  },

  // clickOper: function (e) {
  //   var currentValue = e.currentTarget.dataset.num;
  //   //console.log(currentValue);
  //   if (currentValue == "C") {
  //     this.setData({
  //       currentNum: 0
  //     });
  //   } else if (currentValue == "π") {
  //     this.setData({
  //       currentNum: Math.PI
  //     });
  //     istyping = false;
  //   }
  // },





  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    //console.log(util.perSystem.addition(9,9));
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