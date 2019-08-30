import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils'
import moment from 'moment'
import { message } from 'antd'

const initData = {
    ammeterList: [
    {
        key: '1',
        name: '空调配电柜',
        id: '1PBKTZ01',
        devuuid: 301000,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '2',
        name: '冷水主机动力开关箱',
        id: '1PBKT01',
        devuuid: 301001,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '3',
        name: '空压机开关箱',
        id: '1PB01',
        devuuid: 301002,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '4',
        name: '制氮机配电柜',
        id: '1PB03',
        devuuid: 301003,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '5',
        name: '纯水机房配电柜',
        id: '1PB02',
        devuuid: 301004,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '6',
        name: '1F生产设备01',
        id: '1PBZ01',
        devuuid: 301005,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '7',
        name: '1F生产设备02',
        id: '1PBZ02',
        devuuid: 301006,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '8',
        name: '2F生产设备01',
        id: '2PBZ01',
        devuuid: 301007,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '9',
        name: '2F生产设备02',
        id: '2PBZ02',
        devuuid: 301008,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '10',
        name: '3F生产设备01',
        id: '3PBZ01',
        devuuid: 301009,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '11',
        name: '3F生产设备02',
        id: '3PBZ02',
        devuuid: 301010,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }, {
        key: '12',
        name: '照明',
        id: '1ALZ01',
        devuuid: 301011,
        power: 0.85,
        Ua: 0,
        Ub: 0,
        Uc: 0,
        Ia: 0,
        Ib: 0,
        Ic: 0,
        factor: 0,
        energy: 0,
        state: 0,
        error: 0,
    }],
    milieuList: [
        {
            UUID: 306000,
            name: 'DLC机房空调1#',
            enname:'dlc1',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306001,
            name: 'DLC机房空调2#',
            enname:'dlc2',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306002,
            name: 'DLC机房空调3#',
            enname:'dlc3',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306003,
            name: '光驰镀膜机房空调1#',
            enname:'dumo1',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306004,
            name: '光驰镀膜机房空调2#',
            enname:'dumo2',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306005,
            name: '光驰镀膜机房空调3#',
            enname:'dumo3',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306006,
            name: '光驰镀膜机房空调4#',
            enname:'dumo4',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306007,
            name: '光驰镀膜机房空调5#',
            enname:'dumo5',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306008,
            name: '光驰镀膜机房空调6#',
            enname:'dumo6',
            temperature: 0,
            humidity: 0,
            floor:'1F',
            status:0
        },
        {
            UUID: 306009,
            name: '退火室空调1#',
            enname:'anneal1',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306010,
            name: '退火室空调2#',
            enname:'anneal2',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306011,
            name: '退火室空调3#',
            enname:'anneal3',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306012,
            name: '退火室空调4#',
            enname:'anneal4',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306013,
            name: '退火室空调5#',
            enname:'anneal5',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306014,
            name: '退火室空调6#',
            enname:'anneal6',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306015,
            name: '成品仓空调1#',
            enname:'warehouse',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306016,
            name: '仓库空调1#',
            enname:'depot1',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306017,
            name: '仓库空调2#',
            enname:'depot2',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306018,
            name: '预留车间空调1#',
            enname:'reserved1',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306019,
            name: '预留车间空调2#',
            enname:'reserved2',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306020,
            name: '预留车间空调3#',
            enname:'reserved3',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306021,
            name: '预留车间空调4#',
            enname:'reserved4',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306022,
            name: '预留车间空调5#',
            enname:'reserved5',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306023,
            name: '生产办公室空调1#',
            enname:'office',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306024,
            name: '烤箱房空调1#',
            enname:'oven1',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
        {
            UUID: 306025,
            name: '烤箱房空调2#',
            enname:'oven2',
            temperature: 0,
            humidity: 0,
            floor:'2F',
            status:0
        },
    ],
    devEGState: {
        offline: 12,
        ready: 0,
        running: 0,
        warning: 0,
        totalPower: 0,
    },
    abMonitorData: {
        first: {
              dlc1: {
                uuid: 306000,
                txt: '清洗机房',
                ABLineData: [],
              },
              dlc2: {
                uuid: 306001,
                txt: '光驰镀膜房',
                ABLineData: [],
              },
              dlc3: {
                uuid: 306002,
                txt: '办公区',
                ABLineData: [],
              },
              dumo1: {
                uuid: 306003,
                txt: '光驰镀膜室',
                ABLineData: [],
              },
              dumo2: {
                uuid: 306004,
                txt: '更衣室01',
                ABLineData: [],
              },
              dumo3: {
                uuid: 306005,
                txt: '镀膜房',
                ABLineData: [],
              },
              dumo4: {
                uuid: 306006,
                txt: '更衣室02',
                ABLineData: [],
              },
              dumo5: {
                uuid: 306007,
                txt: '研磨设备',
                ABLineData: [],
              },
              dumo6: {
                uuid: 306008,
                txt: '辅机1',
                ABLineData: [],
              },
        },
        second: {
            anneal1: {
                uuid: 306009,
                txt: 'DLC机房',
                ABLineData: [],
            },
            anneal2: {
                uuid: 306010,
                txt: '退火室2',
                ABLineData: [],
            },
            anneal3: {
                uuid: 306011,
                txt: '退火室3',
                ABLineData: [],
            },
            anneal4: {
                uuid: 306012,
                txt: '退火室4',
                ABLineData: [],
            },
            anneal5: {
                uuid: 306013,
                txt: '退火室5',
                ABLineData: [],
            },
            anneal6: {
                uuid: 306014,
                txt: '退火室6',
                ABLineData: [],
            },
            warehouse: {
                uuid: 306015,
                txt: '成品仓',
                ABLineData: [],
            },
            depot1: {
                uuid: 306016,
                txt: '退火室',
                ABLineData: [],
            },
            depot2: {
                uuid: 306017,
                txt: '成品仓',
                ABLineData: [],
            },
            reserved1: {
                uuid: 306018,
                txt: '预留车间',
                ABLineData: [],
            },
            reserved2: {
                uuid: 306019,
                txt: '预留车间',
                ABLineData: [],
            },
            reserved3: {
                uuid: 306020,
                txt: '预留车间',
                ABLineData: [],
            },
            reserved4: {
                uuid: 306021,
                txt: '预留车间',
                ABLineData: [],
            },
            reserved5: {
                uuid: 306022,
                txt: '预留车间',
                ABLineData: [],
            },
            office: {
                uuid: 306023,
                txt: '办公室',
                ABLineData: [],
            },
            oven1: {
                uuid: 306024,
                txt: '办公室',
                ABLineData: [],
            },
            oven2: {
                uuid: 306025,
                txt: '办公室',
                ABLineData: [],
            },
        },
        third: {
            shop: {
                uuid: 306015,
                txt: '生产车间',
                ABLineData: [],
            },
        },
    },
    cyclePump:{
        devuuid: 305000,
        state:200,
        parameters:[
            {
                title:'供水压力',
                value:0.07,
                unit:'MPa'
            },
            {
                title:'供水温度',
                value:40,
                unit:'℃'
            },
            {
                title:'冷却塔设定启动温度',
                value:55,
                unit:'℃'
            },
            {
                title:'加水压力',
                value:0.07,
                unit:'MPa'
            },
            {
                title:'回水温度',
                value:40,
                unit:'℃'
            },
            {
                title:'冷却塔设定停止温度',
                value:55,
                unit:'℃'
            },
        ],
        deviceList:[
            {
                name:'冷冻水泵',
                id:'001',
                key:'001',
                mode:1,
                state:0,
                err:0
            },
            {
                name:'冷冻水泵',
                id:'002',
                key:'002',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'冷冻水泵',
                id:'003',
                key:'003',
                mode:0,
                state:1,
                err:0
            },
            {
                name:'冷却水泵',
                id:'004',
                key:'004',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'冷却水泵',
                id:'005',
                key:'005',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'冷却水泵',
                id:'006',
                key:'006',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'热水泵',
                id:'007',
                key:'007',
                mode:0,
                state:1,
                err:0
            },
            {
                name:'热水泵',
                id:'008',
                key:'008',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'冷却塔',
                id:'009',
                key:'009',
                mode:1,
                state:1,
                err:0
            },
            {
                name:'冷却塔',
                id:'010',
                key:'010',
                mode:1,
                state:1,
                err:0
            },
        ]
    },
    cabinetList:[
        {
            name:'1AC02_1#',
            devuuid: 302000,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    value:0,
                    circle:true
                    // render:'---'
                },
                {
                    title:'风机压差信号',
                    value:1,
                    circle:true
                    // render:'---'
                },
            ]
        },
        {
            name:'1AC02_2#',
            devuuid: 302001,
            state:200,
            value:2,
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    // render:'---',
                    value:0,
                    circle:true
                },
                {
                    title:'风机压差信号',
                    // render:'---',
                    value:0,
                    circle:true
                },
            ],
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
        },
        {
            name:'1AC03_1#',
            devuuid: 302006,
            state:200,
            value:3,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
            ]
        },
        {
            name:'1AC03_2#',
            devuuid: 302007,
            state:200,
            value:4,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
            ]
        },
        {
            name:'1AC03_3#',
            devuuid: 302008,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                }
            ]
        },
        {
            name:'4AC01_1#',
            devuuid: 302002,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    value:0,
                    circle:true
                },
                {
                    title:'风机压差信号',
                    value:0,
                    circle:true
                },
            ]
        },
        {
            name:'4AC01_2#',
            devuuid: 302003,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    value:0,
                    circle:true
                },
                {
                    title:'风机压差信号',
                    value:0,
                    circle:true
                },
            ]
        },
        {
            name:'4AC02_1#',
            devuuid: 302004,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    value:0,
                    circle:true
                },
                {
                    title:'风机压差信号',
                    value:0,
                    circle:true
                },
            ]
        },
        {
            name:'4AC02_2#',
            devuuid: 302005,
            state:200,
            deviceList:[
                {
                    name:'风机',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机工频',
                    id:'002',
                    key:'002',
                    mode:-1,
                    state:0,
                    err:0
                },
                {
                    name:'电加热',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'电加热',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
            ],
            parameters:[
                {
                    title:'室内压差设定',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'温度设定',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'湿度设定',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'压差',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'回风温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'回风湿度',
                    value:55,
                    unit:'%RH'
                },
                {
                    title:'频率',
                    value:60,
                    unit:'Hz'
                },
                {
                    title:'风机高温信号',
                    value:0,
                    circle:true
                },
                {
                    title:'风机压差信号',
                    value:0,
                    circle:true
                },
            ]
        },
    ],
    PCWSysList:[
        {
            name:'1ACPCW01_1#',
            devuuid: 303000,
            state:200,
            parameters:[
                {
                    title:'设定供水泵运行压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'设定供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'供水压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'水位',
                    value:0.07,
                    unit:'m'
                },
                {
                    title:'供水频率反馈1',
                    value:60,
                    unit:'Hz'
                },
                
                {
                    title:'供水频率反馈2',
                    value:60,
                    unit:'Hz'
                },
                
            ],
            deviceList:[
                {
                    name:'PCW供水泵1',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'PCW供水泵2',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
            ]
        },
        {
            name:'4ACPCW01_1#',
            devuuid: 303001,
            state:200,
            parameters:[
                {
                    title:'设定供水泵运行压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'设定供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'供水压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'水位',
                    value:0.07,
                    unit:'m'
                },
                {
                    title:'供水频率反馈1',
                    value:60,
                    unit:'Hz'
                },
                
                {
                    title:'供水频率反馈2',
                    value:60,
                    unit:'Hz'
                },
                
            ],
            deviceList:[
                {
                    name:'PCW供水泵1',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'PCW供水泵2',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
            ]
        },
        {
            name:'4ACPCW01_2#',
            devuuid: 303002,
            state:200,
            parameters:[
                {
                    title:'设定供水泵运行压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'设定供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'供水压力',
                    value:0.07,
                    unit:'MPa'
                },
                {
                    title:'供水温度',
                    value:40,
                    unit:'℃'
                },
                {
                    title:'水位',
                    value:0.07,
                    unit:'m'
                },
                {
                    title:'供水频率反馈1',
                    value:60,
                    unit:'Hz'
                },
                
                {
                    title:'供水频率反馈2',
                    value:60,
                    unit:'Hz'
                },
                
            ],
            deviceList:[
                {
                    name:'PCW供水泵1',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'PCW供水泵2',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
            ]
        },
    ],
    FFUSysList:[
        {
            name:'1ACF01_1#',
            devuuid: 304000,
            state:200,
            deviceList:[
                {
                    name:'FFU',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'006',
                    key:'006',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'007',
                    key:'007',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'008',
                    key:'008',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'009',
                    key:'009',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'010',
                    key:'010',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'011',
                    key:'011',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'012',
                    key:'012',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'013',
                    key:'013',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'014',
                    key:'014',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'015',
                    key:'015',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'016',
                    key:'016',
                    mode:0,
                    state:0,
                    err:0
                },
            ]
        },
        {
            name:'1ACF02_2#',
            devuuid: 304001,
            state:200,
            deviceList:[
                {
                    name:'FFU',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'006',
                    key:'006',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'007',
                    key:'007',
                    mode:0,
                    state:1,
                    err:0
                },
            ]
        },
        {
            name:'3ACF01_1#',
            devuuid: 304002,
            state:200,
            deviceList:[
                {
                    name:'风机盘管',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'006',
                    key:'006',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'007',
                    key:'007',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'008',
                    key:'008',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'009',
                    key:'009',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'010',
                    key:'010',
                    mode:0,
                    state:0,
                    err:0
                },
            ]
        },
        {
            name:'3ACF02_2#',
            devuuid: 304003,
            state:200,
            deviceList:[
                {
                    name:'风机盘管',
                    id:'001',
                    key:'001',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'002',
                    key:'002',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'003',
                    key:'003',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'004',
                    key:'004',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'005',
                    key:'005',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'风机盘管',
                    id:'006',
                    key:'006',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'007',
                    key:'007',
                    mode:0,
                    state:1,
                    err:0
                },
                {
                    name:'FFU',
                    id:'008',
                    key:'008',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'009',
                    key:'009',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'010',
                    key:'010',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'011',
                    key:'011',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'012',
                    key:'012',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'013',
                    key:'013',
                    mode:0,
                    state:0,
                    err:0
                },
                {
                    name:'FFU',
                    id:'014',
                    key:'014',
                    mode:0,
                    state:0,
                    err:0
                },
            ]
        },
    ]
}

const MQTTData = handleActions( {
  'request bom list'( state, action ) {
    return { ...state, loading: true }
  },
  'resMqttData'( state, action ) {
    const { mqttData } = action.payload
    const { ammeterList, milieuList ,cabinetList,PCWSysList,FFUSysList,cyclePump} = state
    let offline = 0;
    let ready = 0;
    let running = 0;
    let warning = 0;
    let totalPower = 0;
    // console.log( 'recive mqtt data', action ,state)
    /* 电表数据 */
    state.ammeterList = ammeterList.map( ( ele1 ) => {
      let _valueData;
      let _obj = {};
      let _state = 0;
      let _err = 0;
      mqttData.data.forEach( ( ele2 ) => {
        if ( ele2.DevUUID === ele1.devuuid ) {
          // ele1 = Object.assign( ele1, ele2 );
          _valueData = ele2.DevData.Values.Dfloat
          _state = ele2.DevData.State.Status
          _err = ele2.DevData.State.Error
          _state === 0 ? offline += 1 : _state === 1 ? ready += 1 : _state === 2 ? running += 1 : _state === 3 ? warning += 1 : ''
          totalPower += _valueData[7]
          _obj = {
            Ua: _valueData[0].toFixed(2),
            Ub: _valueData[1].toFixed(2),
            Uc: _valueData[2].toFixed(2),
            Ia: _valueData[3].toFixed(2),
            Ib: _valueData[4].toFixed(2),
            Ic: _valueData[5].toFixed(2),
            factor: _valueData[6].toFixed(2),
            power: _valueData[7].toFixed(2),
            energy: _valueData[8].toFixed(2),
            state: _state,
            error: _err,
            // error: 1,
          }
          ele1 = Object.assign( { ...ele2 }, { ...ele1 }, _obj );
        }
      } );
      return ele1
    } );

    let _cyclePumpData=mqttData.data.filter(ele=>ele.DevUUID===305000)[0]
    let cabinetType1=[];
    let cabinetType2=[];
    let cabinetType3={};
    let _pcw=[];
    let _ffu=[];
    mqttData.data.forEach((ele,index)=>{
        let id=ele.DevUUID
        let condition1=(id===302000)||(id===302001)||(id===302002)||(id===302003)||(id===302004)||(id===302005)||false
        let condition2=(id===302006)||(id===302008)||false
        if(condition1) cabinetType1.push(ele)
        else if(condition2) cabinetType2.push(ele)
        else if(id===302007) cabinetType3=ele
        else if((id===303000)||(id===303001)||(id===303002)) _pcw.push(ele)
        else if((id===304000)||(id===304001)||(id===304002)||(id===304003)) _ffu.push(ele)
    })
    /* 开始更新 冷却/冷冻水系统数据 */
    let cpDevice=_cyclePumpData&&_cyclePumpData.DevData.Io.Di
    let cpParas=_cyclePumpData&&_cyclePumpData.DevData.Values.Dfloat
    cyclePump.state=_cyclePumpData&&_cyclePumpData.DevData.State.Status
    if(cpParas&&cpParas.length){
        cyclePump.parameters[0].value=cpParas[8]
        cyclePump.parameters[1].value=cpParas[9]
        cyclePump.parameters[2].value=cpParas[16]
        cyclePump.parameters[3].value=cpParas[10]
        cyclePump.parameters[4].value=cpParas[11]
        cyclePump.parameters[5].value=cpParas[17]
    }
    if(cpDevice&&cpDevice.length){
        let _index1=0
        for (let index = 0; index < 10; index++) {
            cyclePump.deviceList[index].mode=cpDevice[_index1++]
            cyclePump.deviceList[index].err=cpDevice[_index1++]
            cyclePump.deviceList[index].state=cpDevice[_index1++]
        }
    }

    /* 开始更新 风柜系统数据 */
    cabinetList.map(ele1=>{
        cabinetType1.forEach(ele2 => {
            if(ele2.DevUUID===ele1.devuuid){
                let cbDevice=ele2.DevData.Io.Di
                let cbParas=ele2.DevData.Values.Dfloat
                let _index1=0
                ele1.state=ele2.DevData.State.Status
                for (let index = 0; index < 5; index++) {
                    if(index===1){
                        // ele1.deviceList[index].mode=cbDevice[_index1++]
                        ele1.deviceList[index].err=cbDevice[_index1++]
                        ele1.deviceList[index].state=cbDevice[_index1++]
                    }else{
                        ele1.deviceList[index].mode=cbDevice[_index1++]
                        ele1.deviceList[index].err=cbDevice[_index1++]
                        ele1.deviceList[index].state=cbDevice[_index1++]
                    }
                }
                ele1.parameters[0].value=cbParas[2]
                ele1.parameters[1].value=cbParas[0]
                ele1.parameters[2].value=cbParas[1]
                ele1.parameters[3].value=cbParas[8]
                ele1.parameters[4].value=cbParas[6]
                ele1.parameters[5].value=cbParas[7]
                ele1.parameters[6].value=cbParas[9]
                ele1.parameters[7].value=cbDevice[14]
                ele1.parameters[8].value=cbDevice[15]
            }
        });
        cabinetType2.forEach(ele3 => {
            if(ele3.DevUUID===ele1.devuuid){
                let cbDevice=ele3.DevData.Io.Di
                let cbParas=ele3.DevData.Values.Dfloat
                ele1.state=ele3.DevData.State.Status
                let _index1=0
                for (let index = 0; index < 2; index++) {
                    ele1.deviceList[index].mode=cbDevice[_index1++]
                    ele1.deviceList[index].err=cbDevice[_index1++]
                    ele1.deviceList[index].state=cbDevice[_index1++]
                    ele1.parameters[index].value=cbParas[index]
                }
            }
        });
        if(cabinetType3.DevUUID===ele1.devuuid){
            let cbDevice=cabinetType3.DevData.Io.Di
            let cbParas=cabinetType3.DevData.Values.Dfloat
                ele1.state=cabinetType3.DevData.State.Status
            let _index1=0
            for (let index = 0; index < 2; index++) {
                ele1.deviceList[index].mode=cbDevice[_index1++]
                ele1.deviceList[index].err=cbDevice[_index1++]
                ele1.deviceList[index].state=cbDevice[_index1++]
            }
            ele1.parameters[0].value=cbParas[2]
            ele1.parameters[1].value=cbParas[3]
            ele1.parameters[2].value=cbParas[0]
            ele1.parameters[3].value=cbParas[1]
        }
    }) 

    /* 开始更新 PCW系统数据 */
    PCWSysList.map(ele1=>{
        _pcw.forEach(ele2=>{
            if(ele2.DevUUID===ele1.devuuid){
                let pcwDevice=ele2.DevData.Io.Di
                let pcwParas=ele2.DevData.Values.Dfloat
                ele1.state=ele2.DevData.State.Status
                // console.log(' ele1 PCWSys', ele1)
                let _index1=0;
                for (let index = 0; index < 7; index++) {
                    ele1.parameters[index].value=pcwParas[index+1]
                    if(index<=1){
                        ele1.deviceList[index].mode=pcwDevice[_index1++]
                        ele1.deviceList[index].err=pcwDevice[_index1++]
                        ele1.deviceList[index].state=pcwDevice[_index1++]
                    }
                }
            }
        })
    })

    /* 开始更新 FFU系统数据 */
    FFUSysList.map(ele1=>{
        _ffu.forEach(ele2=>{
            if(ele2.DevUUID===ele1.devuuid){
                let ffuDevice=ele2.DevData.Io.Di
                ele1.state=ele2.DevData.State.Status
                ele1.deviceList.forEach((ele3,index)=>ele3.state=ffuDevice[index])
            }
        })
    })

    /* 温度数据 */
    state.milieuList = milieuList.map( ( ele1 ) => {
      let _valueData;
      let _obj = {};
      let _status = 0;
      let _err = 0;
      mqttData.data.forEach( ( ele2 ) => {
        if ( ele2.DevUUID === ele1.UUID ) {
          // ele1 = Object.assign( ele1, ele2 );
          _valueData = ele2.DevData.Values.Dfloat
          _status = ele2.DevData.State.Status
          _err = ele2.DevData.State.Error
          _obj = {
            temperature: _valueData[0].toFixed( 2 ),
            humidity: _valueData[1].toFixed( 2 ),
            status: _status,
            error: _err,
          }
          ele1 = Object.assign( { ...ele2 }, { ...ele1 }, _obj );
        }
      } );
      return ele1
    } );
    totalPower = totalPower.toFixed( 2 )
    state.devEGState = {
        offline,
        ready,
        running,
        warning,
        totalPower,
    }
    // console.log( 'recive mqtt data', action ,cyclePump, cabinetType1, cabinetType2, cabinetType3,_pcw,_ffu)
    // console.log( 'recive mqtt data', action ,state)
    return { ...state }
  },
  'succReceiveEGTimeGr'( state, action ) {
    const { req, res } = action.payload
    const { data } = res;
    const _List = state.ammeterList;
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    const toReport = ( obj ) => {
        const { time, power } = obj;
        const _Len = obj.power && ( obj.power.length || 0 );
        const report = [];
        for ( let index = 0; index < _Len; index++ ) {
            const _t = moment( time[index] ).format( 'M.DD HH:mm:ss' )
            // const _obj = {};
            // _obj.obj.time[index] = obj.power[index]
            report.push( {
                // [_t]: power[index],
                time: _t,
                value: parseFloat( power[index].toFixed( 2 ) ),

            } )
        }
        return report;
    }
    const List = _List.map( ( ele1 ) => {
        data.forEach( ( ele2 ) => {
            if ( ele2.devUUID === ele1.devuuid ) {
                ele1.report = toReport( ele2 )
            }
        } )
        return ele1
    } )
    // console.log( '收到报表数据:', state, res, List )
    return {
        ...state, loading: false,
    }
  },
  'succReceiveABLineGr_all'( state, action ) {
    const { req, res } = action.payload
    const { first, second, third } = state.abMonitorData
    // state.egDodgeChartDay = []
    // state.egDodgeChartMonth = []
    for ( const key in first ) {
        if ( first.hasOwnProperty( key ) ) {
            // const element = object[key];
            first[key].ABLineData = res.data.filter( ele => ele.deviceUUID === first[key].uuid ) || []
        }
    }
    for ( const key in second ) {
        if ( second.hasOwnProperty( key ) ) {
            // const element = object[key];
            second[key].ABLineData = res.data.filter( ele => ele.deviceUUID === second[key].uuid ) || []
        }
    }
    for ( const key in third ) {
        if ( third.hasOwnProperty( key ) ) {
            // const element = object[key];
            third[key].ABLineData = res.data.filter( ele => ele.deviceUUID === third[key].uuid ) || []
        }
    }

    /* const list = res.data.map( ( ele ) => {
        // Object.assign(time:)
        ele.time = moment( ele.time ).format( 'MM/DD HH:mm:ss' );
        return {
          deviceUUID: ele.deviceUUID,
          time: moment( ele.time ).format( 'MM/DD HH:mm:ss' ),
          humidity: ele.humidity.toFixed( 2 ),
          temperature: ele.temperature.toFixed( 2 ),
        }
    } ) */
    console.log( 'succReceiveABLineGr=====', res, first, state )
    // state.abLineChart = list
    return { ...state, loading: true }
  },
}, initData )

export default MQTTData
