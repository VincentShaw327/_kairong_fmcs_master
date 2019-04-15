import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Radio, Button, Icon, Tabs, Row, Col, message, Divider, Collapse } from 'antd';
import moment from 'moment'
import Asider from 'widgets/Asider'
import Curved, { SecondList } from './module/chart'

import styles from './index.less'
import Milieu from './module/milieu'
// import FFU from '../../images/device/timg.jpg'
const { TabPane } = Tabs;
const { Panel } = Collapse
const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );
const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min


@connect( ( state, props ) => ( {
    deviceType: state.deviceType,
} ) )
export default class first extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'plate',
        }
        this.url = '/api/TDevice/device_type';
    }

    componentWillMount() {}

    componentDidMount() {}

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const columns = [
            {
                title: '车间',
                dataIndex: 'workshop',
                key: 'workshop',
                render: text => <span>车间名称</span>,
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
                title: '湿度',
                dataIndex: 'humidity',
                key: 'humidity',
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
                <Asider >
                    <div style={{ padding: 6 }}>
                        <div style={{ background: 'white' }}>
                            <SecondList columns={columns} data={data02} />
                        </div>
                    </div>
                </Asider>
                <Collapse
                  style={{ marginBottom: 18, width: '82vw' }}
                  bordered={false}
                //   defaultActiveKey={['1']}
                //   expandIcon={( { isActive } ) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                    <Panel header="当天温湿度曲线图" key="1" >
                        <Tabs>
                            <TabPane tab="温度" key="1">
                                <Curved width="79vw" height="28vw" data={data01} plainOptions={plainOptions} />
                            </TabPane>
                            <TabPane tab="湿度" key="2">
                                <Curved width="79vw" height="28vw" data={data01} plainOptions={plainOptions} />
                            </TabPane>
                        </Tabs>
                    </Panel>
                    {/* <Panel header="车间平面示意图" key="2"></Panel> */}
                </Collapse>
                <div style={{ background: 'white', width: '82vw', padding: '15px 15px' }}>
                    {/* <p color="#108ee9" style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>车间环境</p> */}
                    <div className={styles.firstfloor}>
                        <div className={styles.one}>
                            <div className={styles.empty} />
                            <div className={styles.cleanroom} >
                                <Milieu title="清洗机房" />
                            </div>
                            <div className={styles.coatingroom} >
                                <Milieu title="光驰镀膜机房" />
                            </div>
                            <div className={styles.officeroom} >
                                <Milieu title="办公区" />
                            </div>
                        </div>
                        <div className={styles.two}>
                            <div className={styles.empty} />
                            <div className={styles.lockerroom} >
                                <Milieu title="更衣室" />
                            </div>
                            <div className={styles.umbrellarroom}>
                                <span className={styles.divider} />
                                <span className={styles.title1} >光驰镀膜室</span>
                                <span className={styles.title2} >换伞区</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.three}>
                            <div className={styles.left} >
                                <div className={styles.up} >
                                    <Milieu title="镀膜房" />
                                </div>
                                <div className={styles.down} >
                                    <Milieu title="DLC机房" />
                                </div>
                            </div>
                            <div className={styles.right} >
                                <div className={styles.RLeft} >
                                    <div className={styles.up} >
                                        <Milieu title="更衣室" />
                                    </div>
                                    <div className={styles.down} >
                                        <Milieu title="辅机" />
                                    </div>
                                </div>
                                <div className={styles.RCenter}>
                                    <Milieu title="研磨设备" />
                                </div>
                                <div className={styles.RRight} >
                                    <Milieu title="辅机" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
