import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Row, Col, message, Divider } from 'antd';
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
        this.state = {}
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        const Milieu = ( obj ) => {
            const { title, temp = 23.4, rh = 12 } = obj
            return (
                <Fragment>
                    {title ? <span className={styles.title}>{title}</span> : ''}
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
                <Row>
                    <Col span={12}>
                    <div className={styles.thirdfloor}>
                        <div className={styles.one}>
                            <div className={styles.roomname}>更衣室</div>
                        </div>
                        <div className={styles.two} />
                        <div className={styles.trace} >
                            <div className={styles.roomname}>生产车间</div>
                            <Milieu />
                        </div>
                    </div>
                    </Col>
                    <Col span={12}>
                        <Card style={{ marginBottom: 18, height: '17vw' }}>
                            <p style={{ marginBottom: 25, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                            <Row>
                                <Col span={11} style={{ textAlign: 'center' }}>
                                    <div style={{ marginBottom: 25, fontSize: 32 }}>一号机</div>
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
                                <Col span={11} style={{ textAlign: 'center' }}>
                                    <div style={{ marginBottom: 25, fontSize: 32 }}>二号机</div>
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
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Card>
                    <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>板换房水泵状态</p>
                    <Card style={{ textAlign: 'center' }}>
                        <Row>
                            <Col span={11}>
                                <p style={{ fontSize: 32 }}>一号柜</p>
                                <Row>
                                    <Col span={11}>
                                        <p style={{ fontSize: 25 }}>水泵一</p>
                                        <div style={{ fontSize: 48, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
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
                                        <div style={{ fontSize: 48, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
                                        <div style={{ fontSize: 18 }}>送水温度</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#b8b8b8', borderRadius: 8,
                                            }}
                                        >运行中
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={2}><Divider type="vertical" style={{ height: 230 }} /></Col>
                            <Col span={11}>
                            <p style={{ fontSize: 32 }}>二号柜</p>
                                <Row>
                                    <Col span={11}>
                                        <p style={{ fontSize: 25 }}>水泵一</p>
                                        <div style={{ fontSize: 48, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
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
                                        <div style={{ fontSize: 48, color: '#FF7928' }}>25 <span style={{ fontSize: 25 }}>℃</span></div>
                                        <div style={{ fontSize: 18 }}>送水温度</div>
                                        <span style={{
                                            fontSize: 18, padding: 6, display: 'inline-block', color: 'white', marginTop: 15, background: '#b8b8b8', borderRadius: 8,
                                            }}
                                        >运行中
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Card>
                </Card>
            {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
