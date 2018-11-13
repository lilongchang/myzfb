Page({
  data: {
      isInputPhone:false,
      validTime:60,
      isValidNo:false,
      switchTable:1,
      validationInfo:'获取验证码',
      phoneNumber:''
  },
    switchTable(e){
    this.setData({
        switchTable:e.target.dataset.index
    })
    },
  onLoad() {},
    inputPhone(e){
       if(e.detail.value != ''){
         this.setData({
             isInputPhone:true,
             phoneNumber:e.detail.value
         })
       }else {
           this.setData({
               isInputPhone:false,
               phoneNumber:''
           })
       }
    },
    clearPhoneInput(){
        this.setData({
            isInputPhone:false,
            phoneNumber:''
        })
    },
    senderCode(){
        if (this.data.isValidNo) {
            return;
        }
        var remainTime = this.data.validTime;
        var _this = this
        var timer = setInterval(function(){
            if (remainTime > 1) {
                remainTime--;
                _this.setData({
                    validationInfo:remainTime + 's后获取',
                    isValidNo:true
                });
            } else {
                clearInterval(timer);
                _this.setData({
                    validationInfo: '获取验证码',
                    isValidNo:false,
                });
            }
        }, 1000);
    }
});
