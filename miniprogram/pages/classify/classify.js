
Page({
  data: {
    list:[
      { id:"ly1", name:"护肤专区"},
      { id: "ly2", name: "彩妆专区" },
      { id: "ly3", name: "产品系列" },
      { id: "ly4", name: "肌肤需求" },
      { id: "ly5", name: "男士专区" },
      { id: "ly6", name: "黑面膜" },
      { id: "ly7", name: "肌肤面膜" },
      { id: "ly8", name: "个人肌肤护理" }
    ],
    state:0,
    typeData: [],
    contentActive: '1', // 内容栏选中id
    navActive: '', // 导航栏选中id
    heightArr: [],
    containerH: 0
  },
  chooseType(e) {
    this.setData({
      state: e.currentTarget.dataset.id
    })
  }
})

