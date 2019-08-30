import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Button,
    Row,
    Col,
    Card,
    Table,
    Divider,
    Tag,
    Progress,
} from 'antd';
import { connect } from 'react-redux'
import moment from 'moment'
import { TPostData } from 'utils/TAjax'
import styles from './THome.less'
import { EGTend } from '../bizcharts/bar'
import { EnergyUsage } from '../bizcharts/line'
import {_Temp} from '../../../enums'
import './index.css'


@connect( ( state, props ) => ( {
    MQTTData: state.MQTTData,
} ) )
export default class Home extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
            startTime: moment().subtract( 14, 'days' ).format( 'YYYY/MM/DD HH:mm:ss' ),
            endTime: moment().format( 'YYYY/MM/DD HH:mm:ss' ),
            poStartTime: moment().subtract( 1, 'days' ).format( 'YYYY/MM/DD 00:00:00' ),
            poEndTime: moment().add( 1, 'days' ).format( 'YYYY/MM/DD 00:00:00' ),
            devEGState: {
                offline: 12,
                ready: 0,
                running: 0,
                warning: 0,
                totalPower: 0,
            },
            energyStatistics: {
                amount: {
                    yearUsage: 0,
                    monthUsage: 0,
                    dayUsage: 0,
                },
                Statistics: [],
            },
            powerStatistics: {
                pwAmount: {
                    max: 0,
                    avg: 0,
                    min: 0,
                },
                powers: [],
                // powersYesterday:[],
                // powersToday:[]
            },
        }
    }

    componentWillMount() {}

    // 组件已经加载到dom中
    componentDidMount() {
        this.getEnergyView();
        this.getPowerView();
    }

    getEnergyView() {
        const { startTime, endTime } = this.state;
        const obj = {
            startTime,
            endTime,
        }
        TPostData( '/api/datareceive/energyView', '', obj, ( result ) => {
            const {
                energys,
                dayEnergy,
                monthEnergy,
                yearEnergy,
            } = result.data
            const _obj = {
                amount: {
                    yearUsage: Math.ceil( yearEnergy / 10 ),
                    monthUsage: Math.ceil( monthEnergy / 10 ),
                    dayUsage: Math.ceil( dayEnergy / 10 ),
                },
                Statistics: energys,
            }
            this.setState( { energyStatistics: _obj } )
            console.log( 'energyView_data:', result, _obj )
        } )
    }

    getPowerView() {
        const { poStartTime, poEndTime } = this.state;
        const obj = {
            startTime: poStartTime,
            endTime: poEndTime,
        }
        TPostData( '/api/datareceive/powerView', '', obj, ( result ) => {
            const {
                max,
                min,
                avg,
                powers,
            } = result.data
            const _powers = powers.map( item => ( {
                ...item,
                times: item.time,
            } ) )
            const _obj = {
                pwAmount: {
                    max,
                    min,
                    avg,
                },
                powers,
                // powersYesterday,
                // powersToday
            }

            this.setState( { powerStatistics: _obj } )
            console.log( 'powerStatistics:', result, _obj, _powers )
        } )
    }

    render() {
        const { abMonitorData, milieuList, ammeterList } = this.props.MQTTData
        const {
            clean, gcp, office, gcr, cg01, dumo, cg02, yanmo, fuji1, dlc, fuji2,
        } = abMonitorData.first
        const { devEGState, energyStatistics, powerStatistics } = this.state;
        const { amount, Statistics } = energyStatistics
        const { pwAmount, powers } = powerStatistics

        const milieuColumns = [
            {
                title: '楼层',
                dataIndex: 'floor',
                key: 'floor',
                width: 75,
                // render: text => <span>车间名称</span>,
            }, {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                // render: text => <span>车间名称</span>,
            }, {
                title: '温度',
                dataIndex: 'temperature',
                key: 'temperature',
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render:str=><span>{_Temp.getDescFromValue(str)}</span>
            },
        ];
        const ammeterColumns = [
            /* {
                title: '楼层',
                dataIndex: 'floor',
                key: 'floor',
                width: 75,
                // render: text => <span>车间名称</span>,
            }, */
            {
              title: '电表名称',
              dataIndex: 'name',
              key: 'name',
              width: 180,
              align: 'center',
              // render: text => <a>{text}</a>,
            }, /*  {
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
             }, */ {
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
            }, /* {
              title: '电能',
              key: 'energy',
              dataIndex: 'energy',
              align: 'center',
            },  */{
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                // width: 180,
                align: 'center',
                // render: ( str, record ) => <span>{str}</span>,
                render:str=><span>{_Temp.getDescFromValue(str)}</span>
              },
          ];
        const airColumns = [
            {
              title: '楼层',
              dataIndex: 'floor',
              key: 'floor',
              width: 75,
              onCell: ( record, index ) => ( { class: 'test' } ),
              // render: text => <a>{text}</a>,
            }, {
              title: '位置',
              dataIndex: 'place',
              key: 'place',
              // render: text => <span>220</span>,
            },{
                title: '系统名称',
                dataIndex: 'name',
                key: 'name',
                // render: text => <span>220</span>,
              }, {
                title: '状态',
                  dataIndex: 'status',
                  key: 'status',
                render:str=><span>{_Temp.getDescFromValue(str)}</span>
                //   render: v =>{
                //     let _color=v==0?'#A7A7A7':v==1?"#00DF6E":v==2?"#00D09D":v==3?'#FF3565':'white';
                //     // let _color=v==0?'#FF3565':v==1?"#367AF7":v==2?"#00D09D":'white';
                //     return <span style={{color:_color}}>{_Ammeter.getDescFromValue(v)}</span>
                //   }
                },
        ];
        const AirConditioningList = [
            {
                key: '1',
                name: '冷却/冷冻水系统',
                place:'1ACPCW01',
                id: 'MAU-1F-01',
                floor: '1F',
                status: 1,
            },
            {
                key: '2',
                name: '1#风柜系统',
                place:'1AC02',
                id: 'MAU-1F-02',
                floor: '1F',
                status: 1,
            },
            {
                key: '3',
                name: '2#风柜系统',
                place:'1AC03',
                id: 'MAU-1F-03',
                floor: '1F',
                status: 1,
            },
            {
                key: '4',
                name: '1#风柜系统',
                place:'2AC01',
                id: 'MAU-1F-04',
                floor: '2F',
                status: 1,
            },
            {
                key: '5',
                name: '2#风柜系统',
                place:'2AC01',
                id: 'MAU-1F-05',
                floor: '2F',
                status: 1,
            },
            {
                key: '6',
                name: '1#风柜系统',
                place:'4AC01',
                id: 'AHU-2F-01',
                floor: '2F',
                status: 1,
            },
            {
                key: '7',
                name: '2#风柜系统',
                place:'4AC01',
                id: 'AHU-2F-02',
                floor: '2F',
                status: 1,
            },
            {
                key: '8',
                name: 'PCW系统',
                place:'1ACPCW01',
                id: 'AHU-2F-03',
                floor: '2F',
                status: 1,
            },
            {
                key: '9',
                name: '1#PCW系统',
                place:'4ACPCW01',
                id: 'AHU-2F-04',
                floor: '2F',
                status: 1,
            },
            {
                key: '10',
                name: '2#PCW系统',
                place:'4ACPCW02',
                id: 'MAU-4F-01',
                floor: '4F',
                status: 1,
            },
            {
                key: '11',
                name: 'MAU-4F-02',
                place:'-',
                id: 'MAU-4F-02',
                floor: '4F',
                status: 1,
            },
            {
                key: '12',
                name: 'MAU-4F-03',
                place:'-',
                id: 'MAU-4F-03',
                floor: '4F',
                status: 1,
            },
            {
                key: '13',
                name: 'MAU-4F-04',
                place:'-',
                id: 'MAU-4F-04',
                floor: '4F',
                status: 1,
            },
        ];

        return (
            <div className={styles.homeWrap}>
                <Row gutter={16}>
                    <Col span={12}>
                        <section>
                            <div className={styles.tags}>用电统计</div>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <div className={styles.egUsages}>
                                        <div className={styles.title}>本日</div>
                                        <div className={styles.content}>{amount.dayUsage || 0}<span>kW*h</span></div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.egUsages}>
                                        <div className={styles.title}>本月</div>
                                        <div className={styles.content}>{amount.monthUsage || 0}<span>kW*h</span></div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.egUsages}>
                                        <div className={styles.title}>本年</div>
                                        <div className={styles.content}>{amount.yearUsage || 0}<span>kW*h</span></div>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section>
                            <div className={styles.tags}>用电趋势</div>
                            <div className={styles.barTrend}>
                                <EGTend data={Statistics || []} />
                            </div>
                        </section>
                        <section>
                            <div className={styles.tags}>今日用电</div>
                            <div className={styles.barTrend}>
                                <EnergyUsage data={powers || []} />
                            </div>
                        </section>
                        <section>
                            <div className={styles.tags}>温湿度监控</div>
                            <div className={styles.barTrend} style={{ overflowY: 'scroll' }}>
                                <Table
                                    bordered
                                    onHeaderRow={record => ({className:'home-table-header'})}
                                    rowClassName={record => 'home-table-row'}
                                    columns={milieuColumns}
                                    dataSource={milieuList || []}
                                    pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                                />
                            </div>
                        </section>
                    </Col>
                    <Col span={12}>
                        <section>
                            <div className={styles.tags}>电表和空调状态</div>
                            <div className={styles.state}>
                                <div className={styles.pieChart}>
                                    <div className={styles.txtItem}>总数量:<span>12台</span></div>
                                    <div className={styles.txtItem}>已开启:<span>7台</span></div>
                                    <div className={styles.txtItem}>未开启:<span>5台</span></div>
                                    <Progress type="circle" strokeColor="#00DF6E" width={'13vw'} style={{fontSize:'3em'}} percent={75} />
                                </div>
                                <div className={styles.pieChart} style={{ borderLeft: 'solid 1px #f0f2f5' }}>
                                    <div className={styles.txtItem}>总数量:<span>12台</span></div>
                                    <div className={styles.txtItem}>已开启:<span>7台</span></div>
                                    <div className={styles.txtItem}>未开启:<span>5台</span></div>
                                    <Progress type="circle" strokeColor="#00DF6E" width={'13vw'} style={{fontSize:'3em'}} percent={75} />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={styles.tags}>电能报表</div>
                            <div className={styles.barTrend} style={{ overflowY: 'scroll' }}>
                                <Table
                                    bordered
                                    onHeaderRow={record => ({className:'home-table-header'})}
                                    rowClassName={record => 'home-table-row'}
                                    columns={ammeterColumns}
                                    dataSource={ammeterList || []}
                                    pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                                />
                            </div>
                        </section>
                        <section>
                            <div className={styles.tags}>控制系统监控</div>
                            <div className={styles.barTrend} style={{ overflowY: 'scroll' }}>
                                <Table
                                    bordered
                                    onHeaderRow={record => ({className:'home-table-header'})}
                                    rowClassName={record => 'home-table-row'}
                                    columns={airColumns}
                                    dataSource={AirConditioningList || []}
                                    pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                                />
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
        )
    }
}
