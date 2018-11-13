Page({
  data: {
      headImage:'../../images/head_img.png'
  },
  onLoad() {},
    //跳转登录页面
    goLoginPage(){
        my.navigateTo({
            url: '../login-register/login-register'
        })
    },
    //跳转我的订单
    goMyOrder(){
        my.navigateTo({
            url: '../mine-order/mine-order'
        })
    },
    //     跳转寄件页面
    checkPiecePage(){
        my.redirectTo({
            url: '../send-index/send-index'
        })
    },
    //跳转查快递页面
    goCheckPage(){
        my.redirectTo({
            url: '../check-piece/check-piece'
        })
    }

});
