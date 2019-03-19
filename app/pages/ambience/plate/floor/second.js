import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Row, Col, message, Divider, Popconfirm } from 'antd';
import FFU from 'images/device/timg.jpg'
import styles from './index.less'
// import PageHeaderLayout from '../../base/PageHeaderLayout';

const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );

@connect( ( state, props ) => ( {
    deviceType: state.deviceType,
} ) )
export default class type extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            // loading: true,
        }
        this.url = '/api/TDevice/device_type';
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        const Milieu = ( obj ) => {
            const { title = '车间名称', temp = 23.4, rh = 12 } = obj
            return (
                <Fragment>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.parameter}>
                        <div>
                            <IconFont className={styles.icon} type="icon-wendu" />
                            <span className={styles.num}>{temp}</span>
                            <span className={styles.unit}>℃</span>
                        </div>
                        <div>
                            <IconFont className={styles.icon} type="icon-humidity" />
                            <span className={styles.num}>{rh}</span>
                            <span className={styles.unit}>RH%</span>
                        </div>
                    </div>
                </Fragment>
            )
        };
        return (
            <Fragment>
            {/* <PageHeaderLayout
               wrapperClassName="pageContent"
               BreadcrumbList={bcList}
             > */}
            {/* <Row gutter={16} style={{ marginBottom: 18 }}>
                <Col span={12}>
                    <Card title="生产设备总开关箱01">
                        <p>电能:***W</p>
                        <p>电流:2.4A</p>
                        <p>电压:217v</p>
                        <p>功率系数</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="生产设备总开关箱02">
                        <p>电能:***W</p>
                        <p>电流:2.4A</p>
                        <p>电压:217v</p>
                        <p>功率系数</p>
                    </Card>
                </Col>
            </Row> */}
            <Row>
                <Col span={16}>
                    <div className={styles.secondfloor}>
                        <div className={styles.one} >
                            <Milieu title="预留厂房" />
                        </div>
                        <div className={styles.two}>
                            <div className={styles.annealing}><Milieu title="退火室" /></div>
                            <div className={styles.warehouse}><Milieu title="成品仓" /></div>
                            <div className={styles.storehouse}><Milieu title="仓库" /></div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <Card style={{ marginBottom: 18, textAlign: 'center' }}>
                        <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                        <Row>
                            <Col span={5}>
                                <p style={{ fontSize: 26 }}>风柜一</p>
                                <p><span style={{
                                        padding: 6,
                                        background: '#1890ff',
                                        color: 'white',
                                        borderRadius: 6,
                                        fontSize: 18,
                                    }}
                                >运行中
                                   </span>
                                </p>
                            </Col>
                            <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                            <Col span={5}>
                                <p style={{ fontSize: 26 }}>风柜二</p>
                                <p><span style={{
                                        padding: 6,
                                        background: '#b8b8b8',
                                        color: 'white',
                                        borderRadius: 6,
                                        fontSize: 18,
                                    }}
                                >离线中
                                   </span>
                                </p>
                            </Col>
                            <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                            <Col span={5}>
                                <p style={{ fontSize: 26 }}>风柜三</p>
                                <p><span style={{
                                        padding: 6,
                                        background: '#EE1F1F',
                                        color: 'white',
                                        borderRadius: 6,
                                        fontSize: 18,
                                    }}
                                >故障中
                                   </span>
                                </p>
                            </Col>
                            <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                            <Col span={5}>
                                <p style={{ fontSize: 26 }}>风柜四</p>
                                <p><span style={{
                                        padding: 6,
                                        background: '#9A9A9A',
                                        color: 'white',
                                        borderRadius: 6,
                                        fontSize: 18,
                                    }}
                                >离线中
                                   </span>
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* <Card style={{ marginBottom: 18, textAlign: 'center' }}>
                <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                <Row>
                    <Col span={5}>
                        <p style={{ fontSize: 26 }}>风柜一</p>
                        <p><span style={{
                                padding: 6,
                                background: '#1890ff',
                                color: 'white',
                                borderRadius: 6,
                                fontSize: 18,
                            }}
                        >运行中
                           </span>
                        </p>
                    </Col>
                    <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                    <Col span={5}>
                        <p style={{ fontSize: 26 }}>风柜二</p>
                        <p><span style={{
                                padding: 6,
                                background: '#b8b8b8',
                                color: 'white',
                                borderRadius: 6,
                                fontSize: 18,
                            }}
                        >离线中
                           </span>
                        </p>
                    </Col>
                    <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                    <Col span={5}>
                        <p style={{ fontSize: 26 }}>风柜三</p>
                        <p><span style={{
                                padding: 6,
                                background: '#EE1F1F',
                                color: 'white',
                                borderRadius: 6,
                                fontSize: 18,
                            }}
                        >故障中
                           </span>
                        </p>
                    </Col>
                    <Col span={1}><Divider type="vertical" style={{ height: 45 }} /></Col>
                    <Col span={5}>
                        <p style={{ fontSize: 26 }}>风柜四</p>
                        <p><span style={{
                                padding: 6,
                                background: '#9A9A9A',
                                color: 'white',
                                borderRadius: 6,
                                fontSize: 18,
                            }}
                        >离线中
                           </span>
                        </p>
                    </Col>
                </Row>
            </Card> */}
            {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
