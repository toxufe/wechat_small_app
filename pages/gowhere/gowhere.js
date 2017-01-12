//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        left: 0,
        myItem:[
            {name:"飞机票",img:"../../resouces/plane.png"},
            {name:"火车票",img:"../../resouces/train.png"},
            {name:"汽车票",img:"../../resouces/bus.png"}
        ]
    },
    go: function (e) {
        var curNum = parseInt(e.currentTarget.dataset.id);
        var oLeft = 0;
        console.log(444);
        switch (curNum) {
            case 2:
                oLeft = 33;
                break;
            case 3:
                oLeft = 67;
                break;
            default:
                oLeft = 0;
        }
        this.setData({
            left: oLeft
        });
    }
})
