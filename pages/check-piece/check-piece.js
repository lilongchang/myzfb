Page({
  data: {
      switchIndex:0,
      invisibleShow:true,
      showOperatorIndex:999
  },
  onLoad() {},
    //切换操作按钮
    showOperator(e){
        this.setData({
          showOperatorIndex:e.currentTarget.dataset.value,
          invisibleShow:false
      })
    },
    //点击别的区域关闭操作按钮
    closeMask(){
        this.setData({
            showOperatorIndex:999,
            invisibleShow:true
        })
    },
    //切换table
    switchTable(e){
      var currentTableIndex = e.currentTarget.dataset.index
      this.setData({
          switchIndex:currentTableIndex
      })
    },
    deleteAddress(){

    },
    onTopBtnTap() {
        this.setData({
            showTop: true,
            showOperatorIndex:999,
            invisibleShow:true
        });
    },
    onPopupClose() {
        this.setData({
            showTop: false,
        });
    },
    goSearch(){
        my.navigateTo({
            url: '../search-bynumber/search-bynumber'
        })
    },
    //     跳转查询快递页面
    checkPiecePage(){
        my.redirectTo({
            url: '../send-index/send-index'
        })
    },
    //     跳转我的页面
    goMinePage(){
        my.redirectTo({
            url: '../mine-index/mine-index'
        })
    }
});
