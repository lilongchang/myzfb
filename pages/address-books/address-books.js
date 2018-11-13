Page({
    data: {
        isInputSearch: false,
        searchContent: '',
        setDefaultAddress: false,
        checkedLogo: '../../images/choose.png',
        unCheckedLogo: '../../images/address.png',
    },
    onLoad() {
    },
    inputSearchContent(e){
        if (e.detail.value !== '') {
            this.setData({
                searchContent: e.detail.value,
                isInputSearch: true
            })
        }else {
            this.setData({
                searchContent: '',
                isInputSearch: false
            })
        }

    },
    switchDefaultArea() {
        this.setData({
            setDefaultAddress: !this.data.setDefaultAddress
        })
    },
    clearSearchContent(){
        this.setData({
            searchContent: '',
            isInputSearch: false
        })
    }
});
