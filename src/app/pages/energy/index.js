import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Table,
    Divider,
} from 'antd';
import moment from 'moment'
import { connect } from 'react-redux'
import { fetchEGTimeGraph } from 'actions/common'
import TButton,{SysState} from 'widgets/TButton'
import PChart, { EGLineChart } from './chart'
import './index.css'
// import '../../style/table.css'
import power_pic from '../../images/123.png'

let client
@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    Report: state.Report,
} ) )
export default class Home extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
          startTime: moment().subtract( 1, 'days' ).format( 'YYYY/MM/DD HH:mm:ss' ),
          endTime: moment().format( 'YYYY/MM/DD HH:mm:ss' ),
        }
    }

    componentWillMount() {
        this.getEGLineData();
    }

    // 组件已经加载到dom中
    componentDidMount() {
    }

    componentWillReceiveProps() {
        // console.log( 'shoujiesdf', this.props.MQTTData )
    }

    getEGLineData() {
        const { startTime, endTime } = this.state;
        const req = {
            // startTime: '2019/04/23 00:00:00',
            // endTime: '2019/04/24 00:00:00',
            startTime, endTime,
        }
        console.log( '时间:', startTime, endTime )
        this.props.dispatch( fetchEGTimeGraph( req ) )
    }

    render() {
        const { ammeterList, devEGState } = this.props.MQTTData;
        const columns = [
          {
            title: '电表名称',
            dataIndex: 'name',
            key: 'name',
            width: 180,
            align: 'center',
            // render: text => <a>{text}</a>,
          }, {
            title: '编号',
            dataIndex: 'id',
            key: 'id',
            // width: 180,
            align: 'center',
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            // width: 180,
            align: 'center',
            render: ( str, record ) => {
                let state=parseInt(str)
                    let sys_State=state===1?'run':state===2?'stop':'off'
                return <SysState type={sys_State} />
            }
          }, /*  {
            title: '电相类型',
            dataIndex: 'type',
            key: 'age',
          }, */ {
            title: 'Ua',
            dataIndex: 'Ua',
            key: 'Ua',
            align: 'center',
            // render: text => <span>220</span>,
          }, {
           title: 'Ub',
            dataIndex: 'Ub',
            key: 'Ub',
            align: 'center',
            // render: text => <span>220</span>,
          }, {
            title: 'Uc',
             dataIndex: 'Uc',
             key: 'Uc',
            align: 'center',
            //  render: text => <span>220</span>,
           }, {
            title: 'Ia',
            dataIndex: 'Ia',
            key: 'Ia',
            align: 'center',
            // render: text => <span>2.41</span>,
          }, {
            title: 'Ib',
            dataIndex: 'Ib',
            key: 'Ib',
            align: 'center',
            // render: text => <span>2.41</span>,
          }, {
            title: 'Ic',
            dataIndex: 'Ic',
            key: 'Ic',
            align: 'center',
            // render: text => <span>2.41</span>,
           }, {
            title: '功率系数(cosØ)',
            key: 'factor',
            dataIndex: 'factor',
            align: 'center',
            // render: tags => (
            //   <span>0.85</span>
            // ),
          }, {
            title: '功率(Kw)',
            key: 'power',
            dataIndex: 'power',
            align: 'center',
            // render: tags => (
            //   <span>6.68</span>
            // ),
          }, {
            title: '电能',
            key: 'energy',
            dataIndex: 'energy',
            align: 'center',
            // render: tags => (
            //     <img src={power_pic} alt="" />
            // ),
          }, {
            title: '电能趋势',
            key: 'report',
            dataIndex: 'report',
            align: 'center',
            width: 300,
            render: ( report ) => {
                // console.log( 'report', report )
                const data = [
                    {
                      time: '2019 04.19 00:00:00',
                      value: 15468,
                    },
                    {
                      time: '2019 04.19 00:30:00',
                      value: 16100,
                    },
                    {
                      time: '2019 04.19 00:00:00',
                      value: 15900,
                    },
                    {
                      time: '2019 04.19 01:00:00',
                      value: 17409,
                    },
                    {
                      time: '2019 04.19 01:30:00',
                      value: 17000,
                    },
                    {
                      time: '2019 04.19 02:00:00',
                      value: 31056,
                    },
                    {
                      time: '2019 04.19 02:30:00',
                      value: 31982,
                    },
                    {
                      time: '2019 04.19 03:00:00',
                      value: 32040,
                    },
                    {
                      time: '2019 04.19 03:30:00',
                      value: 33233,
                    },
                  ];
                return <EGLineChart data={report} />
                  // <img src={power_pic} alt="" />
            },
          },
        ];

        return (
            <Fragment>
                {/* <Card style={{ marginBottom: 18 }}>
                    <header style={{ textAlign: 'center' }}>
                        <h1 style={{ color: 'green' }}>
                            拓斯达水电气能耗管理系统
                        </h1>
                    </header>
                </Card> */}
                <Card style={{ marginBottom: 18 }}>
                    <Row>
                        {/* <Col span={3}>
                            <p>水温度(热量计)</p>
                            <p style={{ fontSize: 25 }}>26℃</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>热量(热量计)</p>
                            <p style={{ fontSize: 25 }}>***KJ</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>瞬时流量(热量计)</p>
                            <p style={{ fontSize: 25 }}>***立方</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col> */}
                        <Col span={3}>
                            <p>当前总功率</p>
                            <p style={{ fontSize: 25 }}>{devEGState.totalPower}KW</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>在线中</p>
                            <p style={{ fontSize: 25 }}>{devEGState.ready || 0}</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>报警中</p>
                            <p style={{ fontSize: 25 }}>{devEGState.warning || 0}</p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>离线中</p>
                            <p style={{ fontSize: 25 }}>{devEGState.offline || 0}</p>
                        </Col>
                        {/* <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col> */}
                        {/* <Col span={4}>
                            <PChart />
                        </Col> */}
                    </Row>
                </Card>
                <div style={{ background: 'white', marginBottom: 15 }}>
                    <Table
                      columns={columns}
                      dataSource={ammeterList || []}
                      pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                      onHeaderRow={record => ({className:'energy-header'})}
                      rowClassName={record => 'energy-row'}
                      onRow={( record ) => {
                          const obj = {}
                        //   if ( record.error !== 0 ) {
                          if ( record.state === 3 ) {
                                obj.className = 'error';
                            }
                            return obj;
                      }}
                    />
                </div>
            </Fragment>
        )
    }
}
