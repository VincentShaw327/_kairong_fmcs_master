import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Row, Col, message, Divider, Collapse, Tabs, Select } from 'antd';
import moment from 'moment'
import { fetchABLineGraph_all } from 'actions/common'
import FFU from 'images/device/timg.jpg'
import styles from './index.less'
import Milieu from './module/milieu'
import Curved, { SecondList } from './module/chart'

const { Panel } = Collapse
const { Option } = Select;
const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );
const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min


@connect( ( state, props ) => ( {
    MQTTData: state.MQTTData,
} ) )
export default class type extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            // loading: true,
            workshopList: [
                306011,
                306012,
                306013,
                306014,
            ],
            startValue: moment().subtract( 1, 'days' ),
            endValue: moment(),
            tableListData: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.getLineData();
    }

    getLineData() {
        const { startValue, endValue, workshopList } = this.state;
        const { abMonitorData } = this.props.MQTTData
        const req = {
          startTime: startValue.format( 'YYYY/MM/DD HH:mm:ss' ),
          endTime: endValue.format( 'YYYY/MM/DD HH:mm:ss' ),
          deviceUUID: workshopList,
        }
        this.props.dispatch( fetchABLineGraph_all( req, () => {
            let initTableData = abMonitorData.second.reserved.ABLineData
            initTableData = initTableData.reverse()
            this.setState( { tableListData: initTableData } )
        } ) )
    }

    handleChange=( v ) => {
        const { abMonitorData } = this.props.MQTTData
        let TableData = abMonitorData.second[v].ABLineData
        TableData = TableData.reverse()
        this.setState( { tableListData: TableData } )
    }

    render() {
        const { milieuList, abMonitorData } = this.props.MQTTData
        const { tableListData } = this.state;
        const {
            reserved, anneal, goods, depot,
        } = abMonitorData.second
        const columns = [
            /* {
                title: '车间',
                dataIndex: 'workshop',
                key: 'workshop',
                render: text => <span>车间名称</span>,
            }, */ {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                // render: text => <a href="javascript:;">{text}</a>,
            }, {
                title: '温度',
                dataIndex: 'temperature',
                key: 'temperature',
                render: text => <span>{text.toFixed( 2 )}</span>,
            }, {
                title: '湿度',
                dataIndex: 'humidity',
                key: 'humidity',
                render: text => <span>{text.toFixed( 2 )}</span>,
            }];
        const data01 = [];
        const data02 = [];
        const plainOptions = ['预留厂房', '退火室', '成品仓', '仓库'];
        for ( let index = 0; index < 9; index++ ) {
            data01.push( {
                month: 'Jan',
                time: moment( { hour: 0, minute: 0, second: 3 } ).add( index, 'h' ).format( 'HH:mm:ss' ),
                temperature: getRandomArbitrary( 20, 23 ),
                humidity: getRandomArbitrary( 20, 25 ),
            } )
            data02.push( {
                key: index,
                name: `0${index}月`,
                time: `0${index}:00`,
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
                temperature: getRandomArbitrary( 20, 25 ),
                humidity: getRandomArbitrary( 20, 25 ),
                produce: getRandomArbitrary( 20, 25 ),
                cold: getRandomArbitrary( 20, 25 ),
                air: getRandomArbitrary( 20, 25 ),
                nitrogen: getRandomArbitrary( 20, 25 ),
                purewater: getRandomArbitrary( 20, 25 ),
            } )
        }
        return (
            <Fragment>
                <div style={{ width: '65vw', background: 'white' }}>
                    <Collapse
                      style={{ marginBottom: 18 }}
                      bordered={false}
                    >
                        <Panel header="当天温湿度曲线图" key="1" >
                                <Tabs>
                                    <Tabs.TabPane tab="预留厂房" key="1">
                                        <Curved width="63vw" height="25vw" data={reserved || data01} />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="退火室" key="2">
                                        <Curved width="63vw" height="25vw" data={anneal || data01} />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="成品仓" key="3">
                                        <Curved width="63vw" height="25vw" data={goods || data01} />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="仓库" key="4">
                                        <Curved width="63vw" height="25vw" data={depot || data01} />
                                    </Tabs.TabPane>
                                </Tabs>
                        </Panel>
                    </Collapse>
                </div>
                <div style={{
                    width: '65vw', background: 'white', padding: '1vw', marginBottom: 16,
                }}
                >
                    <div className={styles.secondfloor}>
                        <div className={styles.one} >
                            <Milieu title="预留厂房" UUID="306011" data={milieuList} />
                        </div>
                        <div className={styles.two}>
                            <div className={styles.annealing}><Milieu title="退火室" UUID="306012" data={milieuList} /></div>
                            <div className={styles.warehouse}><Milieu title="成品仓" UUID="306013" data={milieuList} /></div>
                            <div className={styles.storehouse}><Milieu title="仓库" UUID="306014" data={milieuList} /></div>
                        </div>
                    </div>
                </div>
                <div
                  style={{
                        position: 'absolute',
                        right: 5,
                        top: 0,
                        background: 'white',
                        width: '20vw',
                        minHeight: '33vw',
                        padding: '15px 10px',
                    }}
                >
                    <div style={{ marginBottom: '1vw' }}><span style={{ marginRight: 8 }}>车间:</span>
                        <Select defaultValue="reserved" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="reserved">预留厂房</Option>
                            <Option value="anneal">退火室</Option>
                            <Option value="goods">成品仓</Option>
                            <Option value="depot">仓库</Option>
                        </Select>
                    </div>
                    <SecondList columns={columns} data={tableListData || data02} />
                </div>
            </Fragment>
        )
    }
}
