import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, List, Row, Col, message, Divider, Popconfirm } from 'antd';
import { device_type_list, device_type_add, device_type_update, device_type_delete } from 'actions/device'
import { TPostData } from 'utils/TAjax';
import SimpleTable from 'components/TTable/SimpleTable';
import { CreateModal, UpdateModal } from 'components/TModal';
// import { SimpleQForm, StandardQForm } from 'components/TForm';
import { fn_mes_trans } from 'functions'
import styles from './index.less'
import PageHeaderLayout from '../../base/PageHeaderLayout';
import FFU from '../../images/device/timg.jpg'

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
        const {
            current,
            // total,
            pageSize,
        } = this.state;
        const { list, total, loading } = this.props.deviceType;
        const Data = {
            list: list,
            // list:tableDataList,
            pagination: { total, current, pageSize },
        };
        return (
            <Fragment>
            {/* <PageHeaderLayout
               wrapperClassName="pageContent"
               BreadcrumbList={bcList}
             > */}
                <div className={styles.thirdfloor}>
                    <div className={styles.one} />
                    <div className={styles.two}><div className={styles.warehouse} /></div>
                </div>
                <Card style={{ marginBottom: 18 }}>
                    <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                    <Row>
                        <Col span={11} style={{ textAlign: 'center' }}>
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
                        <Col span={11} style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: 15, fontSize: 25 }}>二号机</div>
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
                <Card>
                    <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>板换房水泵状态</p>
                    <Card style={{ textAlign: 'center' }}>
                        <Row>
                            <Col span={11}>
                                <p style={{ fontSize: 36 }}>一号柜</p>
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
                            </Col>
                            <Col span={2}><Divider type="vertical" style={{ height: 230 }} /></Col>
                            <Col span={11}>
                            <p style={{ fontSize: 36 }}>二号柜</p>
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
                            </Col>
                        </Row>

                    </Card>
                </Card>
            {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
