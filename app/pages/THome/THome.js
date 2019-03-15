import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Row,
    Col,
    Card,
    Table,
} from 'antd';
import PageHeaderLayout from '../../base/PageHeaderLayout';
import mqtt from 'mqtt';

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

        return (
            <Fragment>
                <Row style={{ marginBottom: 16 }}>
                    <Col span={16}>
                    <Card>
                        <Row>
                            <Col span={8}>
                                <p>今日累积用电:<span>5.24 kWh</span></p>
                                <p>比昨日同时段:<span>94 %</span></p>
                                <p>昨日总用电:<span>18.24 kWh</span></p>
                                {/* <span>5.24 kWh</span> */}
                            </Col>
                            <Col span={8} />
                            <Col span={8} />
                        </Row>
                    </Card>
                    </Col>
                    <Col span={8} />
                </Row>

                {/* <Card style={{ marginBottom: 18 }}>
                    <Row>
                        <Col span={3}>
                            <p>空压机</p>
                            <p style={{ fontSize: 26 }}>27.3 <span style={{ fontSize: 16 }}>Pa</span></p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>总功率</p>
                            <p style={{ fontSize: 26 }}>27.8 <span style={{ fontSize: 16 }}>KW</span></p>
                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ height: 80 }} />
                        </Col>
                        <Col span={3}>
                            <p>已用电能(当天)</p>
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
                </Card> */}
                <Row>
                    <Col span={10}>
                        <div style={{ background: 'white', marginBottom: 18 }}>
                            {/* <span style={{ padding: 12 }}>空调水泵状态</span> */}
                            <Table
                              bordered
                            //   title={() => <span style={{ fontSize: 26 }}>空调水泵状态</span>}
                              columns={columns}
                              dataSource={data}
                              pagination={{ hideOnSinglePage: true }}
                            />
                        </div>
                    </Col>
                </Row>
                {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
