import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Popconfirm } from 'antd';
import { device_type_list, device_type_add, device_type_update, device_type_delete } from 'actions/device'
import { TPostData } from 'utils/TAjax';
import SimpleTable from 'components/TTable/SimpleTable';
// import { CreateModal, UpdateModal } from 'components/TModal';
import { fn_mes_trans } from 'functions'
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

    componentWillMount() {
        // this.getTableList();
        const filter = {
            // strCategoryName: 'test',
        }
        // this.props.dispatch( device_type_list( fn_mes_trans.toFilter( filter ), ( respose ) => {} ) )
    }

    componentDidMount() {
        const { pageSize, current } = this.state;
        const page = { page: current, size: pageSize }
        const { list } = this.props.deviceType;
        /* if ( Array.isArray( list ) && list.length === 0 ) {
            this.props.dispatch( device_type_list( page, ( respose ) => {} ) )
            // console.log( '...请求list...' );
        } */
    }

    render() {
        const {
            current,
            // total,
            pageSize,
        } = this.state;
        const { list, total, loading } = this.props.deviceType;

        return (
            // <PageHeaderLayout
            //   wrapperClassName="pageContent"
            //   BreadcrumbList={bcList}
            // >
            <Fragment>
            {/* <Card style={{ marginBottom: 18 }}>
                <Row>
                    <Col span={3}>
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
                    </Col>
                    <Col span={3}>
                        <p>生产总用电量</p>
                        <p style={{ fontSize: 25 }}>888W</p>
                    </Col>
                    <Col span={1}>
                        <Divider type="vertical" style={{ height: 80 }} />
                    </Col>
                    <Col span={3}>
                        <p>瞬时流量(智能水表)</p>
                        <p style={{ fontSize: 25 }}>888W</p>
                    </Col>
                    <Col span={1}>
                        <Divider type="vertical" style={{ height: 80 }} />
                    </Col>
                    <Col span={3}>
                        <p>累积流量(智能水表)</p>
                        <p style={{ fontSize: 25 }}>888W</p>
                    </Col>
                    <Col span={1}>
                        <Divider type="vertical" style={{ height: 80 }} />
                    </Col>
                </Row>
            </Card> */}
            {/* <div className={styles.firstfloor}>
                <Row className={styles.one}>
                    <Col span={1} />
                    <Col span={5}><div className={styles.cleanroom} /></Col>
                    <Col span={11}><div className={styles.coatingroom} /></Col>
                    <Col span={7}><div className={styles.officeroom} /></Col>
                </Row>
                <Row className={styles.two}>
                    <Col span={1} />
                    <Col span={3}><div className={styles.lockerroom} /></Col>
                    <Col span={13}><div className={styles.umbrellarroom} /></Col>
                </Row>
            </div> */}
            <p color="#108ee9" style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>车间环境</p>
            <div className={styles.firstfloor}>
                <div className={styles.one}>
                    <div className={styles.empty} />
                    <div className={styles.cleanroom} >
                        <span className={styles.title}>清洗机房</span>
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
                    <div className={styles.coatingroom} >
                        <span className={styles.title}>光驰镀膜机房</span>
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
                    <div className={styles.officeroom} >
                        <span className={styles.title}>办公区</span>
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
                <div className={styles.two}>
                    <div className={styles.empty} />
                    <div className={styles.lockerroom} >
                        <span className={styles.title}>更衣室</span>
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
                        <div className={styles.up} />
                        <div className={styles.down} />
                    </div>
                    <div className={styles.right} >
                        <div className={styles.RLeft} >
                            <div className={styles.up} />
                            <div className={styles.down} />
                        </div>
                        <div className={styles.RRight} />
                    </div>
                </div>
            </div>
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

            {/* <Card>
                <p style={{ fontSize: 18 }}>空调风柜状态</p>
                <Row>
                    <Col span={2}>
                        <p>风柜一</p>
                        <p><Tag color="orange" >运行中</Tag></p>
                    </Col>
                    <Col span={2}>
                        <p>风柜二</p>
                        <p><Tag color="orange" >运行中</Tag></p>
                    </Col>
                    <Col span={2}>
                        <p>风柜三</p>
                        <p><Tag color="orange" >运行中</Tag></p>
                    </Col>
                    <Col span={2}>
                        <p>风柜四</p>
                        <p><Tag color="orange" >运行中</Tag></p>
                    </Col>
                    <Col span={2}>
                        <p>风柜五</p>
                        <p><Tag color="orange" >运行中</Tag></p>
                    </Col>
                    <Col span={1}><Divider type="vertical" style={{ height: 80 }} /></Col>
                </Row>
            </Card> */}

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
                <Card>
                    <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>FFU控制柜</p>
                    <Card style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: 36 }}>FFU风机运行状态</p>
                        <Row>
                            <Col span={11}>
                                <p style={{ fontSize: 26 }}>风机一</p>
                                <div style={{ fontSize: 26 }}>FFU-01</div>
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
                                <div style={{ fontSize: 26 }}>FFU-02</div>
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

            {/* <Row gutter={16} style={{ marginBottom: 18 }}>
                <Col span={12}>
                    <Card title="1F板换房水泵控制柜">
                        <Row>
                            <Col span={12}><h2>水泵运行状态</h2></Col>
                            <Col span={12}><h2>送水温度</h2></Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={4}>
                                    <p>水泵一</p>
                                    <p>水泵二</p>
                            </Col>
                            <Col span={8}>
                                <p>运行中</p>
                                <p>运行中</p>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <p>**℃</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="FFU">
                        <Row gutter={16}>
                            <Col span={6}>
                                <img alt="ffu" src={FFU} style={{ width: '100%' }} />
                            </Col>
                            <Col span={4}>
                                <p>名称</p>
                                <p>风机01</p>
                                <p>风机02</p>
                            </Col>
                            <Col span={4}>
                                <p>编号</p>
                                <p>FFU01</p>
                                <p>FFU02</p>
                            </Col>
                            <Col span={4}>
                                <p>型号</p>
                                <p>EMR-DI16-H</p>
                                <p>EMR-DI16-H</p>
                            </Col>
                            <Col span={4}>
                                <p>运行状态</p>
                                <p>运行中</p>
                                <p>关机中</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> */}
            {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
