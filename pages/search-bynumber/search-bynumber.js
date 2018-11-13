Page({
  data: {
    inputContent:'',
    isTrueInputNum:false
  },
    inputSearchContent(e){
        if(e.detail.value.length == 13){
           this.setData({
               isTrueInputNum:true
           })
        }else {
            this.setData({
                isTrueInputNum:false
            })
        }
    },
    searchByNumber(){
        my.showToast({
            content: '暂无此单号信息',
            duration: 2000
        });
    },
    goDetail(){
        my.navigateTo({
            url: '../cancellation-order/cancellation-order'
        })
    },
    goDetail2(){
        my.navigateTo({
            url: '../order-details/order-details'
        })
    },
  onLoad() {},
});
