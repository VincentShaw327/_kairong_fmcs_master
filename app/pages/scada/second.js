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
            <div className={styles.secondfloor}>
                <div className={styles.one} />
                <div className={styles.two}><div className={styles.warehouse} /></div>
            </div>
            <Card style={{ marginBottom: 18, textAlign: 'center' }}>
                <p style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>风柜状态</p>
                {/* <div style={{ marginBottom: 15, fontSize: 25 }}>二号机</div> */}
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
            {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
