Page({
  data: {
      showTextarea:false,
      setDefaultAddress:false,
      isShowClearText:true,
      checkedLogo:'../../images/choose.png',
      unCheckedLogo: '../../images/address.png',
      upDownImg: '../../images/down.png',
      downUpImg: '../../images/up.png',
      smartTextValue:'',
      senderMessage:{name:'',phone:'',address:'',detailAddress:''},
  },
  onLoad() {},
    switchTextareaShow(){
        this.setData({
            showTextarea: !this.data.showTextarea  
        })
    },
    switchDefaultArea(){
        this.setData({
            setDefaultAddress: !this.data.setDefaultAddress
        })
    },
    setTextareaValue(e){
        if(e.detail.value){
            this.setData({
                isShowClearText:false,
                smartTextValue:e.detail.value
            })
        }else{
            this.setData({
                isShowClearText:true,
                smartTextValue:e.detail.value
            })
        }
    },
    smartInputSave(){
       var smartTextValue = this.data.smartTextValue;
       if(smartTextValue && smartTextValue.indexOf('，') > -1){
           var str = smartTextValue.split('，');
           var detailAddress = str[2];
           var province = '';
           var townArea = ''
           if (detailAddress.indexOf('区') > -1){
               var detailArr = detailAddress.split('区');
               province = detailArr[0] + '区'
               townArea = detailArr[1]
           } else if (detailAddress.indexOf('县') > -1){
               var detailArr = detailAddress.split('县');
               province = detailArr[0] + '县'
               townArea = detailArr[1]
           }

           var object = {
               name:str[0],
               phone:str[1],
               address: province,
               detailAddress: townArea
           };
           this.setData({
               senderMessage: object
           })
       }else {
           my.showToast({
               content: '请按照提示的格式输入地址',
               duration: 2000
           });
       }

    },
    getMap(){
        my.chooseLocation({
          success: (res) => {
            console.log(res)
          },
        });
    },
    clearContent(){
        this.setData({
            isShowClearText:true,
            smartTextValue:''
        })
    }
});
