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
import PageHeaderLayout from '../../base/PageHeaderLayout';
import power_pic from '../../images/123.png'

let client
export default class Home extends Component {
    constructor( props, context ) {
        super( props )
        this.state = {
        }
    }

    componentWillMount() {}

    // 组件已经加载到dom中
    componentDidMount() {

    }

    render() {
        const bcList = [
            {
                title: '首页',
                href: '/',
            },
        ];

        const columns = [
          {
            title: '电表名称',
            dataIndex: 'name',
            key: 'name',
            width: 180,
            render: text => <a>{text}</a>,
          }, /*  {
            title: '电相类型',
            dataIndex: 'type',
            key: 'age',
          }, */ {
            title: 'Ua',
            dataIndex: 'Ua',
            key: 'Ua',
            render: text => <span>220</span>,
          }, {
           title: 'Ub',
            dataIndex: 'Ub',
            key: 'Ub',
            render: text => <span>220</span>,
          }, {
            title: 'Uc',
             dataIndex: 'Uc',
             key: 'Uc',
             render: text => <span>220</span>,
           }, {
            title: 'Ia',
            dataIndex: 'Ia',
            key: 'Ia',
            render: text => <span>2.41</span>,
          }, {
            title: 'Ib',
            dataIndex: 'Ib',
            key: 'Ib',
            render: text => <span>2.41</span>,
          }, {
            title: 'Ic',
            dataIndex: 'Ic',
            key: 'Ic',
            render: text => <span>2.41</span>,
           }, {
            title: '功率系数(cosØ)',
            key: 'factor',
            dataIndex: 'factor',
            render: tags => (
              <span>0.85</span>
            ),
          }, {
            title: '功率(Kw)',
            key: 'power',
            dataIndex: 'power',
            render: tags => (
              <span>6.68</span>
            ),
          }, {
            title: '电能',
            key: 'action',
            render: tags => (
                <img src={power_pic} alt="" />
            ),
          },
        ];

        const data = [{
            key: '1',
            name: '空调配电柜',
            power: 0.85,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: '冷水主机动力开关箱',
            power: 0.85,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: '空压机开关箱',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '4',
            name: '制氮机配电柜',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '5',
            name: '纯水机房配电柜',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '6',
            name: '1F生产设备01',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '7',
            name: '1F生产设备02',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '8',
            name: '2F生产设备01',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '9',
            name: '2F生产设备02',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '10',
            name: '3F生产设备01',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }, {
            key: '11',
            name: '3F生产设备02',
            power: 0.85,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
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
                            <p>当前总功率</p>
                            <p style={{ fontSize: 25 }}>128.3KW</p>
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
                </Card>
                <div style={{ background: 'white', marginBottom: 15 }}>
                    <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true, pageSize: 20 }} />
                </div>
                {/* <Row gutter={16} style={{ marginBottom: 18 }}>
                    <Col span={12}>
                        <Card title="30KW配电柜（全厂照明）">
                            <p>电能:***W</p>
                            <p>电流:2.4A</p>
                            <p>电压:217v</p>
                            <p>功率系数</p>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="车间空调配电柜">
                            <p>电能:***W</p>
                            <p>电流:2.4A</p>
                            <p>电压:217v</p>
                            <p>功率系数</p>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 18 }}>
                    <Col span={12}>
                        <Card title="冷水主机动力开关箱">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <h2>静态参数</h2>
                                    <p>额定功率(Pn):***W</p>
                                    <p>运行功率(Pc):***W</p>
                                    <p>额定电流(Ic):2.4A</p>
                                    <p>Kd系数:1</p>
                                    <p>功率系数(CosØ):***</p>
                                </Col>
                                <Col span={12}>
                                    <h2>动态参数</h2>
                                    <p>电能:***W</p>
                                    <p>当前电流:2.4A</p>
                                    <p>当前电压:217v</p>
                                    <p>功率系数(CosØ):***</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="空压机开关箱用电">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <h2>静态参数</h2>
                                    <p>额定功率(Pn):***W</p>
                                    <p>运行功率(Pc):***W</p>
                                    <p>额定电流(Ic):2.4A</p>
                                    <p>Kd系数:1</p>
                                    <p>功率系数(CosØ):***</p>
                                </Col>
                                <Col span={12}>
                                    <h2>动态参数</h2>
                                    <p>电能:***W</p>
                                    <p>当前电流:2.4A</p>
                                    <p>当前电压:217v</p>
                                    <p>功率系数(CosØ):***</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 18 }}>
                    <Col span={12}>
                        <Card title="制氮机配电柜">
                            <p>电能:***W</p>
                            <p>电流:2.4A</p>
                            <p>电压:217v</p>
                            <p>功率系数</p>
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card title="纯水机房配电柜">
                            <p>电能:***W</p>
                            <p>电流:2.4A</p>
                            <p>电压:217v</p>
                            <p>功率系数</p>
                        </Card>
                    </Col>
                </Row> */}
            </Fragment>
        )
    }
}
