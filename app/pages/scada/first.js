import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Popconfirm } from 'antd';
/* import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util,
  } from 'bizcharts';
import DataSet from '@antv/data-set'; */
import PageHeaderLayout from '../../base/PageHeaderLayout';
import FFU from '../../images/device/timg.jpg'
import styles from './index.less'

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
            tableDataList: [],
            updateFromItem: {},
            // total: 0,
            current: 0,
            pageSize: 10,
            UModalShow: false,
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
                <Card style={{ marginBottom: 18 }}>
                    这里显示温湿度图表
                </Card>
                <Card style={{ marginBottom: 18 }}>
                    <p color="#108ee9" style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>车间环境</p>
                    <div className={styles.firstfloor}>
                        <div className={styles.one}>
                            <div className={styles.empty} />
                            <div className={styles.cleanroom} ><Milieu title="清洗机房" />
                                {/* <span className={styles.title}>清洗机房</span>
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
                                </div> */}
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
                </Card>
                <Card style={{ marginBottom: 18 }}>
                    <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                    {/* <Tag color="#108ee9" style={{ marginBottom: 15, fontSize: 18 }}>风柜状态</Tag> */}
                    <Row>
                        <Col span={9} style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: 15, fontSize: 25 }}>一号机</div>
                            <Row>
                                <Col span={11}>
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
                                <Col span={2}><Divider type="vertical" style={{ height: 45 }} /></Col>
                                <Col span={11}>
                                    <p style={{ fontSize: 26 }}>风柜二</p>
                                    {/* <p><Tag color="orange" >运行中</Tag></p> */}
                                    <p>
                                        <span style={{
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
                            </Row>
                        </Col>
                        <Col span={2}>
                            <Divider type="vertical" style={{ height: 120 }} />
                        </Col>
                        <Col span={13} style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: 15, fontSize: 25 }}>二号机</div>
                            <Row>
                                <Col span={7}>
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
                                <Col span={7}>
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
                                <Col span={7}>
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
                            </Row>
                        </Col>
                    </Row>
                </Card>
                <Row gutter={16} style={{ marginBottom: 18 }}>
                    <Col span={12}>
                        <Card>
                            <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>板换房水泵控制柜</p>
                            <Card style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 36 }}>水泵运行状态</p>
                                <Row>
                                    <Col span={11}>
                                        <p style={{ fontSize: 25 }}>水泵一</p>
                                        <div style={{ fontSize: 62, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
                                        <div style={{ fontSize: 18 }}>送水温度</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#00A43E', borderRadius: 8,
                                            }}
                                        >运行中
                                        </span>
                                    </Col>
                                    <Col span={2}><Divider type="vertical" style={{ height: 230 }} /></Col>
                                    <Col span={11}>
                                        <p style={{ fontSize: 25 }}>水泵二</p>
                                        <div style={{ fontSize: 62, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
                                        <div style={{ fontSize: 18 }}>送水温度</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#b8b8b8', borderRadius: 8,
                                            }}
                                        >运行中
                                        </span>
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card style={{ height: 480 }}>
                            <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>FFU控制柜</p>
                            <Card style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: 36 }}>FFU风机运行状态</p>
                                <Row>
                                    <Col span={11}>
                                        <p style={{ fontSize: 26 }}>风机一</p>
                                        <div style={{ fontSize: 62 }}>FFU-01</div>
                                        <div style={{ fontSize: 18 }}>型号</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#00A43E', borderRadius: 8,
                                            }}
                                        >运行中
                                        </span>
                                    </Col>
                                    <Col span={2}><Divider type="vertical" style={{ height: 180 }} /></Col>
                                    <Col span={11}>
                                        <p style={{ fontSize: 26 }}>风机二</p>
                                        <div style={{ fontSize: 62 }}>FFU-02</div>
                                        <div style={{ fontSize: 18 }}>型号</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#b8b8b8', borderRadius: 8,
                                            }}
                                        >停机中
                                        </span>
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
