var app = getApp();
var types = [{
    value:0,
    name:'文件票件'
},{
    value:1,
    name:'电子产品'
},{
    value:2,
    name:'衣物'
},{
    value:3,
    name:'食品'
},{
    value:4,
    name:'工艺品'
},{
    value:5,
    name:'书籍'
},{
    value:6,
    name:'玩具乐器'
},{
    value:7,
    name:'贵重品'
},{
    value:8,
    name:'化妆品'
},{
    value:9,
    name:'体育用品'
},{
    value:10,
    name:'电子仪器'
},{
    value:11,
    name:'办公用品'
},{
    value:12,
    name:'收藏品'
},{
    value:13,
    name:'其他'
}]
Page({
    data: {
        current: 0,
        showTop: false,
        showTop1: false,
        isShowContract:true,
        weightGoods: 1,
        showDetail:false,
        sendImg: '../../images/send_logo.png',
        upDownImg: '../../images/down.png',
        downUpImg: '../../images/up.png',
        noChoose: '../../images/no_choice.png',
        choose: '../../images/choose.png',
        currentIndex:100,
        type:types,
        invisibleShow:true,
        remarksItems: [{ key: "来前电话", checked: false }, { key: "需要包装", checked: false }, {key: "货物较大", checked: false }, { key: "物品较重", checked: false }, { key: "多带面单", checked: false }, { key: "需文件袋", checked: false }],
        currentName:'请选择',
        saidText:'',
        saidTextArr:'',
        inputText:''
    },
    onLoad() {
        console.log(app.globalData)
    },
    // 选择付款方式
    choice: function (e) {
        var nowCurrent = e.currentTarget.dataset.index
        if (nowCurrent == 0) {
            my.showToast({
                content: '保价和到付只能选择一个',
                duration: 2000
            });
            this.setData({
                current: e.currentTarget.dataset.index
            })
        } else if (nowCurrent == 1) {
            my.showToast({
                content: '保价和到付只能选择一个',
                duration: 2000
            });
            this.setData({
                current: e.currentTarget.dataset.index
            })
        } else if (nowCurrent == 2) {
            this.setData({
                current: e.currentTarget.dataset.index,
                invisibleShow:false
            })
        }
    },
//    关闭弹窗
    closeModal(){
        this.setData({
            invisibleShow:true
        })
    },
//    切换寄件物品详细资料
    toggleUps(){
        this.setData({
            showDetail: !this.data.showDetail,
        })
    },
//    减少物品重量
    reduceCount(){
        var count = this.data.weightGoods;
        if (count === 1) {
            return false
        }
        count--
        this.setData({
            weightGoods: count
        })
    },
//    输入物品重量
    setWeightGoods(e){
        if(e.detail.value > 9999){
            my.showToast({
                content: '物品重量最大为9999',
                duration: 2000
            });
            this.setData({
                weightGoods: 9999
            })
            return false
        }
        this.setData({
            weightGoods:e.detail.value
        })
    },
//    添加物品重量
    addCount(){
        var count = this.data.weightGoods;
        if(count > 9998){
            my.showToast({
                content: '物品重量最大为9999',
                duration: 2000
            });
            this.setData({
                weightGoods: 9999
            })
            return false
        }
        count++
        this.setData({
            weightGoods: count
        })
    },
    //快件类型弹窗
    onTopBtnTap() {
        this.setData({
            showTop: true,
        });
    },
    //对快递小哥说
    onTopBtnTap1() {
        this.setData({
            showTop1: true,
        });
    },
    onPopupClose() {
        this.setData({
            showTop: false,
        });
    },
    onPopupClose1() {
        this.setData({
            showTop1: false,
        });
    },
//    选择物品类型
    selectType(e){
        console.log(e)
        this.setData({
            currentIndex:e.target.dataset.index,
            currentName:e.target.dataset.value
        })
    },
//    我要对快递小哥说
    selectType1(e){
        var index = e.currentTarget.dataset.index;

        this.data.remarksItems[index].checked = !this.data.remarksItems[index].checked;
        this.setData({
            remarksItems: this.data.remarksItems,
        });
        var remarksItems = this.data.remarksItems;
        var saidTextArr = [];
        for(var i = 0; i < remarksItems.length; i++){
           if(remarksItems[i].checked){
               saidTextArr.push(remarksItems[i].key)
           }
        }
        var inputText = this.data.inputText;
        var saidText = ''
        if(inputText){
            saidText =saidTextArr.length> 0? saidTextArr.join('、') + '、' + inputText:inputText
        }else{
            saidText = saidTextArr.join('、')
        }
        this.setData({
            saidText:saidText,
            saidTextArr:saidTextArr
        })
    },
//    输入内容
    bindKeyInput(e){
        var saidTextArr = this.data.saidTextArr;
        var saidText = '';
        if(e.detail.value){
            saidText = saidTextArr.length> 0?saidTextArr.join('、') + '、' +e.detail.value:e.detail.value
        }else{
            saidText = saidTextArr.length> 0?saidTextArr.join('、'):''
        }
        this.setData({
            inputText:e.detail.value,
            saidText:saidText
        })
    },
//    关闭协议弹窗
    closeContractModal(){
        this.setData({
            isShowContract:true
        })
    },
    // 阅读协议
    readyContract(){
        this.setData({
            isShowContract:false
        })
    },
//    保存输入内容
    saveSaid(){
        console.log(this.data.saidText)
    },
//     跳转查询快递页面
    checkPiecePage(){
        my.redirectTo({
            url: '../check-piece/check-piece'
        })
    },
    //     跳转我的页面
    goMinePage(){
        my.redirectTo({
            url: '../mine-index/mine-index'
        })
    },
    //     下单成功页面
    goCheckoutSuccess(){
        my.navigateTo({
            url: '../checkout-success/checkout-success'
        })
    },
    //     寄件人地址簿
    goAddressBook(){
        my.navigateTo({
            url: '../address-book/address-book'
        })
    },
    //添加寄件人信息
    addSenderPerson(){
        my.navigateTo({
            url: '../add-sender/add-sender'
        })
    },
    //添加收件人信息
    addCollection(){
        my.navigateTo({
            url: '../addressee/addressee'
        })
    },
    //     收件人地址簿
    goAddressBooks(){
        my.navigateTo({
            url: '../address-books/address-books'
        })
    }
});
