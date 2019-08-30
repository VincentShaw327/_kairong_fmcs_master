import React, { Component, Fragment } from 'react'
import { Radio,Card,Table } from 'antd';
import { connect } from 'react-redux'
// import moment from 'moment'
import Clock from 'widgets/Clock'
import mqtt from 'mqtt'
import { resMqtt } from 'actions/common'
import First from './floor/first'
import Second from './floor/second'
import Third from './floor/third'
import {_Temp} from '../../../../enums'
import Curved from './floor/module/chart'

let client;
@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    UserAccount: state.UserAccount,
} ) )
export class plate extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'first',
            /*  mqttData: {
                first:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                clean: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            {
                                time: '01:00:02',
                                cleanroom: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                            time: '00:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },{
                            time: '01:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },...]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            name: 'coat',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            name: 'clean',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        coat: {
                            temperature: 24,
                            humidity: '-',
                        },
                        ...
                    },
                },
                second:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                                time: '00:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                        ]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        reserved: {
                            temperature: 24,
                            humidity: '-',
                        },
                        anneal:{
                            temperature: 24,
                            humidity: 25,
                        },
                        goods:{
                            temperature: 24,
                            humidity: 25,
                        },
                        depot:{
                            temperature: 24,
                            humidity: 25,
                        }
                    },
                },
                third:{

                }
            }, */
        }
    }

    componentDidMount() {
        // this.subscribeMQTT();
    }

    componentWillUnmount() {
        // client.close();
        // console.log( 'WillUnmount', client )
    }

    componentWillReceiveProps() {

    }

    subscribeMQTT() {
        // mqtt消息连接建立
        // client = mqtt.connect( 'ws://192.168.3.231:8083/mqtt' );
        // client = mqtt.connect( 'ws://47.91.154.238:8083/mqtt' );
        client = mqtt.connect( 'ws://192.168.0.4:8083/mqtt' );
        // client = mqtt.connect( 'ws://192.168.0.175:8083/mqtt' );

        client.on( 'connect', () => {
            // 订阅消息
            console.log( '连接成功' )
            // client.subscribe( 'TEST_DATA_SOOT' )
            // client.subscribe( 'inject_workshop' )
            // client.subscribe( 'machine_monitor' )
            // client.subscribe( 'device_maintain' )
            // client.subscribe( 'testing' )
            client.subscribe( 'KAI-RONG' )
            // client.subscribe( 'SOOT_TEST_ANDROID_MSG_TO_SERVER' )
            // client.subscribe( '0101/086325608001/201712290001/kanban/01/B' );
            // client.subscribe( "0101/086325608001/201712290001/kanban/01/A" );
            // client.subscribe( 'topstarltd/iec/app/#' )
        } )
        client.on( 'message', ( topic, payload ) => {
            // 接收到mqtt消息推送数据
            const mqttData = JSON.parse( payload );
            if ( topic === 'inject_workshop' ) {
                /* this.setState( ( prevState, props ) => {
                    // console.log('prevState',prevState)
                    // return {first:mqttData}
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        first: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'machine_monitor' ) {
                /* this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        second: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'device_maintain' ) {
                /* this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        third: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'central_feed' ) {
                this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        fouth: { ...mqttData },
                    }
                } )
            }
            console.log( '接收到MQTT信息', topic, mqttData );
            // const {deviceState,unqualifiedList,qualifiedList,progressList,achieveList}=mqttData
            // this.setState({deviceState,unqualifiedList,qualifiedList,progressList,achieveList})
            // this.setState({...mqttData})
        } );
        client.on( 'offline', () => console.log( 'mqtt服务离线' ) );
        client.on( 'reconnect', () => console.log( '尝试重连' ) );
        client.on( 'error', err => console.log( '发生错误', err ) );
        /* const autoPub=setInterval(() => {
            client.publish('inject_workshop',{"first":{"deviceState":{"run":77,"fault":5,"debug":11,"standby":4,"list":[{"item":"待机","count":4},{"item":"调膜","count":11},{"item":"故障","count":5},{"item":"运行","count":60}]},"unqualifiedList":[{"item":"表面起膜","count":23},{"item":"飞边","count":21},{"item":"未填满","count":17},{"item":"黑斑","count":13},{"item":"变形","count":13},{"item":"破裂","count":13}],"progressList":[{"key":"1","device":"A01","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":254},{"key":"2","name":"冷水主机动力开关箱","device":"A02","order":2019021800,"product":"产品","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"3","name":"空压机开关箱","device":"A03","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"4","name":"制氮机配电柜","device":"A04","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"5","name":"纯水机房配电柜","device":"A05","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"6","name":"1F生产设备01","device":"A06","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"7","name":"1F生产设备02","device":"A07","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"8","name":"2F生产设备01","device":"A08","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406}],"achieveList":[{"name":"plan","3.1":18.9,"3.2":28.8,"3.3":39.3,"3.4":81.4,"3.5":47,"3.6":60.3,"3.7":24,"3.8":35.6,"3.9":35.6,"3.10":35.6},{"name":"actual","3.1":12.4,"3.2":23.2,"3.3":34.5,"3.4":99.7,"3.5":52.6,"3.6":35.5,"3.7":37.4,"3.8":42.4,"3.9":42.4,"3.10":42.4}],"qualifiedList":[{"month":"3.1","qualified":17,"unqualified":15.9},{"month":"3.2","qualified":16.9,"unqualified":14.2},{"month":"3.3","qualified":19.5,"unqualified":15.7},{"month":"3.4","qualified":14.5,"unqualified":8.5},{"month":"3.5","qualified":18.4,"unqualified":11.9},{"month":"3.6","qualified":21.5,"unqualified":15.2},{"month":"3.7","qualified":25.2,"unqualified":17},{"month":"3.8","qualified":26.5,"unqualified":16.6},{"month":"3.9","qualified":23.3,"unqualified":14.2}]}})
        }, 2000); */
        // console.log( 'mqData_first', mqttData )
        /* const autoPub = setInterval( () => {
            client.publish( 'inject_workshop', JSON.stringify( mqData_first() ) );
            client.publish( 'machine_monitor', JSON.stringify( mqData_second() ) );
            client.publish( 'device_maintain', JSON.stringify( mqData_third() ) );
            client.publish( 'central_feed', JSON.stringify( mqData_fouth() ) );
        }, 2000 ); */
    }

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const { view, mqttData } = this.state;
        return (
            <Fragment>
                <div style={{ marginBottom: 16 }}>
                    <Radio.Group value={view} onChange={this.handleSizeChange} >
                        <Radio.Button value="first">一楼</Radio.Button>
                        <Radio.Button value="second">二楼</Radio.Button>
                        <Radio.Button value="third">三楼</Radio.Button>
                    </Radio.Group>
                    <div style={{ display: 'inline-block', position: 'absolute', right: '2.5vw' }}><Clock /></div>
                </div>
                <div style={{ position: 'relative', margin: '0 auto' }}>
                    {
                        view === 'first' ? <First /> : view === 'second' ? <Second /> : view === 'third' ? <Third /> : ''
                    }
                </div>
            </Fragment>
        )
    }
}


@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    UserAccount: state.UserAccount,
} ) )
export default class temperature extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'first',
            /*  mqttData: {
                first:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                clean: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            {
                                time: '01:00:02',
                                cleanroom: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                            time: '00:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },{
                            time: '01:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },...]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            name: 'coat',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            name: 'clean',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        coat: {
                            temperature: 24,
                            humidity: '-',
                        },
                        ...
                    },
                },
                second:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                                time: '00:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                        ]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        reserved: {
                            temperature: 24,
                            humidity: '-',
                        },
                        anneal:{
                            temperature: 24,
                            humidity: 25,
                        },
                        goods:{
                            temperature: 24,
                            humidity: 25,
                        },
                        depot:{
                            temperature: 24,
                            humidity: 25,
                        }
                    },
                },
                third:{

                }
            }, */
        }
    }

    componentDidMount() {
        // this.subscribeMQTT();
    }

    componentWillUnmount() {
        // client.close();
        // console.log( 'WillUnmount', client )
    }

    componentWillReceiveProps() {

    }

    subscribeMQTT() {
        // mqtt消息连接建立
        // client = mqtt.connect( 'ws://192.168.3.231:8083/mqtt' );
        // client = mqtt.connect( 'ws://47.91.154.238:8083/mqtt' );
        client = mqtt.connect( 'ws://192.168.0.4:8083/mqtt' );
        // client = mqtt.connect( 'ws://192.168.0.175:8083/mqtt' );

        client.on( 'connect', () => {
            // 订阅消息
            console.log( '连接成功' )
            // client.subscribe( 'TEST_DATA_SOOT' )
            // client.subscribe( 'inject_workshop' )
            // client.subscribe( 'machine_monitor' )
            // client.subscribe( 'device_maintain' )
            // client.subscribe( 'testing' )
            client.subscribe( 'KAI-RONG' )
            // client.subscribe( 'SOOT_TEST_ANDROID_MSG_TO_SERVER' )
            // client.subscribe( '0101/086325608001/201712290001/kanban/01/B' );
            // client.subscribe( "0101/086325608001/201712290001/kanban/01/A" );
            // client.subscribe( 'topstarltd/iec/app/#' )
        } )
        client.on( 'message', ( topic, payload ) => {
            // 接收到mqtt消息推送数据
            const mqttData = JSON.parse( payload );
            if ( topic === 'inject_workshop' ) {
                /* this.setState( ( prevState, props ) => {
                    // console.log('prevState',prevState)
                    // return {first:mqttData}
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        first: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'machine_monitor' ) {
                /* this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        second: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'device_maintain' ) {
                /* this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        third: { ...mqttData },
                    }
                } ) */
            } else if ( topic === 'central_feed' ) {
                this.setState( ( prevState, props ) => {
                    console.log( '接收到MQTT信息', topic, mqttData );
                    return {
                        fouth: { ...mqttData },
                    }
                } )
            }
            console.log( '接收到MQTT信息', topic, mqttData );
            // const {deviceState,unqualifiedList,qualifiedList,progressList,achieveList}=mqttData
            // this.setState({deviceState,unqualifiedList,qualifiedList,progressList,achieveList})
            // this.setState({...mqttData})
        } );
        client.on( 'offline', () => console.log( 'mqtt服务离线' ) );
        client.on( 'reconnect', () => console.log( '尝试重连' ) );
        client.on( 'error', err => console.log( '发生错误', err ) );
        /* const autoPub=setInterval(() => {
            client.publish('inject_workshop',{"first":{"deviceState":{"run":77,"fault":5,"debug":11,"standby":4,"list":[{"item":"待机","count":4},{"item":"调膜","count":11},{"item":"故障","count":5},{"item":"运行","count":60}]},"unqualifiedList":[{"item":"表面起膜","count":23},{"item":"飞边","count":21},{"item":"未填满","count":17},{"item":"黑斑","count":13},{"item":"变形","count":13},{"item":"破裂","count":13}],"progressList":[{"key":"1","device":"A01","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":254},{"key":"2","name":"冷水主机动力开关箱","device":"A02","order":2019021800,"product":"产品","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"3","name":"空压机开关箱","device":"A03","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"4","name":"制氮机配电柜","device":"A04","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"5","name":"纯水机房配电柜","device":"A05","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"6","name":"1F生产设备01","device":"A06","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"7","name":"1F生产设备02","device":"A07","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"8","name":"2F生产设备01","device":"A08","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406}],"achieveList":[{"name":"plan","3.1":18.9,"3.2":28.8,"3.3":39.3,"3.4":81.4,"3.5":47,"3.6":60.3,"3.7":24,"3.8":35.6,"3.9":35.6,"3.10":35.6},{"name":"actual","3.1":12.4,"3.2":23.2,"3.3":34.5,"3.4":99.7,"3.5":52.6,"3.6":35.5,"3.7":37.4,"3.8":42.4,"3.9":42.4,"3.10":42.4}],"qualifiedList":[{"month":"3.1","qualified":17,"unqualified":15.9},{"month":"3.2","qualified":16.9,"unqualified":14.2},{"month":"3.3","qualified":19.5,"unqualified":15.7},{"month":"3.4","qualified":14.5,"unqualified":8.5},{"month":"3.5","qualified":18.4,"unqualified":11.9},{"month":"3.6","qualified":21.5,"unqualified":15.2},{"month":"3.7","qualified":25.2,"unqualified":17},{"month":"3.8","qualified":26.5,"unqualified":16.6},{"month":"3.9","qualified":23.3,"unqualified":14.2}]}})
        }, 2000); */
        // console.log( 'mqData_first', mqttData )
        /* const autoPub = setInterval( () => {
            client.publish( 'inject_workshop', JSON.stringify( mqData_first() ) );
            client.publish( 'machine_monitor', JSON.stringify( mqData_second() ) );
            client.publish( 'device_maintain', JSON.stringify( mqData_third() ) );
            client.publish( 'central_feed', JSON.stringify( mqData_fouth() ) );
        }, 2000 ); */
    }

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const { view, mqttData } = this.state;
        let { abMonitorData,milieuList } = this.props.MQTTData
        const columns01 = [
            {
                title: '楼层',
                dataIndex: 'floor',
                key: 'floor',
                width: 250,
                // render: text => <span>车间名称</span>,
            },
            {
                title: '车间',
                dataIndex: 'name',
                key: 'name',
                // width: 540,
                // render: text => <span>车间名称</span>,
            }, /*  {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                // render: text => <a href="javascript:;">{text}</a>,
            },  */{
                title: '温度',
                dataIndex: 'temperature',
                key: 'temperature',
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render:str=><span>{_Temp.getDescFromValue(str)}</span>
            }
        ];
        milieuList=milieuList.filter(ele=>ele.floor==="1F")
        const {
            clean, gcp, office, gcr, cg01, dumo, cg02, yanmo, fuji1, dlc, fuji2,
        } = abMonitorData.first
        return (
            <Fragment>
                <Card style={{textAlign:'center'}}>
                    <Radio.Group value={view} onChange={this.handleSizeChange} size="large" >
                        <Radio.Button value="first" style={{fontSize:34}}>1F</Radio.Button>
                        <Radio.Button value="second" style={{fontSize:34}}>2F</Radio.Button>
                        <Radio.Button value="third" style={{fontSize:34}}>3F</Radio.Button>
                    </Radio.Group>
                    <div style={{margin:'25px 0'}}/>
                    <Table bordered columns={columns01} dataSource={milieuList||[]} pagination={{ hideOnSinglePage: true, pageSize: 20 }} />
                    <Curved width="79vw" height="28vw" data={clean || []} />
                </Card>
                {/* <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'inline-block', position: 'absolute', right: '2.5vw' }}><Clock /></div>
                </div>
                <div style={{ position: 'relative', margin: '0 auto' }}>
                    {
                        view === 'first' ? <First /> : view === 'second' ? <Second /> : view === 'third' ? <Third /> : ''
                    }
                </div> */}
            </Fragment>
        )
    }
}