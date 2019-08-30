import _ from 'lodash/number'


const first=()=>({
    deviceState:{
        run:_.random(55,65),
        fault:_.random(0,7),
        debug:_.random(0,16),
        standby:_.random(0,4),
        list:[
           {
             item: "待机",
             count: 4
           },
           {
             item: "调膜",
             count: _.random(0,16)
           },
           {
             item: "故障",
             count: 5
           },
           {
             item: "运行",
             count: 60
           },
         ]
    },
    unqualifiedList:[
        {
            item: "表面起膜",
            count: 23
        },
        {
            item: "飞边",
            count: 21
        },
        {
            item: "未填满",
            count: 17
        },
        {
            item: "黑斑",
            count: 13
        },
        {
            item: "变形",
            count: 13
        },
        {
            item: "破裂",
            count: 13
        },
    ],
    progressList:[
      {
        key: '1',
        device:"A01",
        order: 2019021800,
        product:'鼠标外壳',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:_.random(0,800),
      }, {
        key: '2',
        name: '冷水主机动力开关箱',
        device:"A02",
        order: 2019021800,
        product:'产品',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '3',
        name: '空压机开关箱',
        device:"A03",
        order: 2019021800,
        product:'鼠标外壳',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '4',
        name: '制氮机配电柜',
        device:"A04",
        order: 2019021800,
        product:'鼠标外壳',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '5',
        name: '纯水机房配电柜',
        device:"A05",
        order: 2019021800,
        product:'-',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '6',
        name: '1F生产设备01',
        device:"A06",
        order: 2019021800,
        product:'-',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '7',
        name: '1F生产设备02',
        device:"A07",
        order: 2019021800,
        product:'-',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, {
        key: '8',
        name: '2F生产设备01',
        device:"A08",
        order: 2019021800,
        product:'-',
        capacity:23,
        progress:47,
        completed:234,
        plan:4000,
        rest:3406,
      }, 
    ],
    achieveList:[
        {
          name: "plan",
          "3.1": 18.9,
          "3.2": 28.8,
          "3.3": 39.3,
          "3.4": 81.4,
          "3.5": 47,
          "3.6": 60.3,
          "3.7": 24,
          "3.8": 35.6,
          "3.9": 35.6,
          "3.10": 35.6,
        },
        {
          name: "actual",
          "3.1": 12.4,
          "3.2": 23.2,
          "3.3": 34.5,
          "3.4": 99.7,
          "3.5": 52.6,
          "3.6": 35.5,
          "3.7": 37.4,
          "3.8": 42.4,
          "3.9": 42.4,
          "3.10": 42.4,
        }
    ],
    qualifiedList: [
        {
          month: "3.1",
          qualified: 17.0,
          unqualified: 15.9
        },
        {
          month: "3.2",
          qualified: 16.9,
          unqualified: 14.2
        },
        {
          month: "3.3",
          qualified: 19.5,
          unqualified: 15.7
        },
        {
          month: "3.4",
          qualified: 14.5,
          unqualified: 8.5
        },
        {
          month: "3.5",
          qualified: 18.4,
          unqualified: 11.9
        },
        {
          month: "3.6",
          qualified: 21.5,
          unqualified: 15.2
        },
        {
          month: "3.7",
          qualified: 25.2,
          unqualified: 17.0
        },
        {
          month: "3.8",
          qualified: 26.5,
          unqualified: 16.6
        },
        {
          month: "3.9",
          qualified: 23.3,
          unqualified: 14.2
        },
      ],
})

const second=()=>({
    orderData:{
        orderID:'20190318001',
        planNum:_.random(30000,35000),//35000
        fulfillNum:_.random(23610,23690),
        productName:'鼠标外壳',
        cycle:80,
        state:1,
        expectedFinishTime:'2019-03-29 19:34:00',
        percent:87
    },
    deviceState:{
        inject:2,
        robot:1,
        mold:2
    },
    effectiveness:{
        OEE:87,
        timeRate:90,
        performanceRate:92,
        deviceEffRate:82,
    },
    yieldRateList:[
        {
          month: "3.1",
          YieldRate: 17.0,
        },
        {
          month: "3.2",
          YieldRate: 16.9,
        },
        {
          month: "3.3",
          YieldRate: 19.5,
        },
        {
          month: "3.4",
          YieldRate: 14.5,
        },
        {
          month: "3.5",
          YieldRate: 18.4,
        },
        {
          month: "3.6",
          YieldRate: 21.5,
        },
        {
          month: "3.7",
          YieldRate: 25.2,
        },
        {
          month: "3.8",
          YieldRate: 26.5,
        },
        {
          month: "3.9",
          YieldRate: 23.3,
        },
      ],
    taskList: [{
        key: '1',
        device:"A01",
        order: '2019021800',
        product:'鼠标键盘',
        capacity:23098,
        progress:47,
        number:3406,
        startTime:'2019 07.13 15:47:24'
      }, {
        key: '2',
        name: '冷水主机动力开关箱',
        device:"A01",
        order: '2019021800',
        product:'产品',
        capacity:23098,
        progress:47,
        number:3406,
        startTime:'2019 07.13 15:47:24'
      }, {
        key: '3',
        name: '空压机开关箱',
        device:"A01",
        order: '2019021800',
        product:'产品',
        capacity:23098,
        progress:47,
        number:3406,
        startTime:'2019 07.13 15:47:24'
      }, {
        key: '4',
        name: '制氮机配电柜',
        device:"A01",
        order: '2019021800',
        product:'产品',
        capacity:23098,
        progress:47,
        number:3406,
        startTime:'2019 07.13 15:47:24'
      }, 
    ]
})

const third=()=>({
  serviceList:{
      debuging:_.random(15,35),
      completed:17,
      standby:_.random(15,35),
      list:[
          {
            item: "未开始",
            count: 26
          },
          {
            item: "维修中",
            count: 21
          },
          {
            item: "已完成",
            count: 17
          }
        ]
  },
  malfunction:{
      machine:7,
      mold:12,
      fitting:25,
  },
  dynamicList: [
      {
          content:'Racing car sprays burning fuel into crowd.',
          time:'2019.03.01 14:24:04'
      },
      {
          content:'Australian walks outback crash.',
          time:'2019.03.01 14:24:04'
      },
      {
          content:'Man charged over missing wedding girl.',
          time:'2019.03.01 14:24:04'
      },
      {
          content:'Los Angeles battles huge wildfires.',
          time:'2019.03.01 14:24:04'
      },
      {
          content:'Racing car sprays burning fuel into crowd.',
          time:'2019.03.01 14:24:04'
      }
  ],
  serviceHistoryList: [
      { month: '3.1', apply: 2800, fulfil: 2800,  undone: 20 },
      { month: '3.2', apply: 1800, fulfil: 1800,  undone: 30 },
      { month: '3.3', apply: 950, fulfil: 950, undone: 50 },
      { month: '3.4', apply: 500, fulfil: 500,  undone: 10 },
      { month: '3.5', apply: 170, fulfil: 170, undone: 30 },
      { month: '3.6', apply: 170, fulfil: 170, undone: 30 },
      { month: '3.7', apply: 170, fulfil: 170,  undone: 30 },
      { month: '3.8', apply: 170, fulfil: 170, undone: 80 },
      { month: '3.9', apply: 170, fulfil: 170, undone: 30 },
      { month: '3.10', apply: 170, fulfil: 170, undone: 30 },
    ],
  serviceTaskList: [{
      key: '1',
      taskID:"20190415025",
      serviceObject: "A80模温机",
      cause:'电热管烧坏',
      man:"王大拿",
      planCompleteTime:"2019.0425 17:47",
      status:1
    }, {
      key: '2',
      name: '冷水主机动力开关箱',
      taskID:"20190415025",
      serviceObject: "A80模温机",
      cause:'电热管烧坏',
      man:"王大拿",
      planCompleteTime:"2019.0425 17:47",
      status:1
    }, {
      key: '3',
      name: '空压机开关箱',
      taskID:"20190415025",
      serviceObject: "A80模温机",
      cause:'电热管烧坏',
      man:"王大拿",
      planCompleteTime:"2019.0425 17:47",
      status:2
    }, {
      key: '4',
      name: '制氮机配电柜',
      taskID:"20190415025",
      serviceObject: "A80模温机",
      cause:'电热管烧坏',
      man:"王大拿",
      planCompleteTime:"2019.0425 17:47",
      status:0
    }, 
  ],
})

const fouth=()=>({
  feedData:{
      pa:{
          feedState:1,
          feedPercent:67,
          metereState:2,
          meterePercent:_.random(35,85),
          meterWeight:7.4
      },
      abs:{
          feedState:1,
          feedPercent:67,
          metereState:2,
          meterePercent:67,
          meterWeight:7.4
      },
      pom:{
          feedState:1,
          feedPercent:67,
          metereState:2,
          meterePercent:47,
          meterWeight:5.4
      },
  },
  dryData:{
      state:1,
      setTemp:80,
      actualTemp:78.6,
      percent:69
  },
  orderList:[
      {
          machineID:'A01机台',
          orderID:'20190418001',
          product:'鼠标外壳',
          state:1
      },
      {
          machineID:'A01机台',
          orderID:'20190418001',
          product:'鼠标外壳',
          state:0
      },
      {
          machineID:'A03机台',
          orderID:'20190418001',
          product:'鼠标外壳',
          state:3
      },
      {
          machineID:'A01机台',
          orderID:'20190418001',
          product:'鼠标外壳',
          state:-1
      },
  ]
})

export {
    first,
    second,
    third,
    fouth
}