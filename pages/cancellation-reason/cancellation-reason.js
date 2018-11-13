Page({
  data: {
    checked:'../../images/radioed.png',
    noChecked:'../../images/radio.png',
    reasonIndex:0
  },
    checkRadio(e){
    this.setData({
        reasonIndex:e.target.dataset.index
    })
    },
    submitReason(){
      if(this.data.reasonIndex==0){
          my.showToast({
              content: '请选择取消原因',
              duration: 2000
          });
      }else {
          my.navigateTo({
              url: '../order-hasCancel/order-hasCancel'
          })
      }
    },
  onLoad() {},
});
