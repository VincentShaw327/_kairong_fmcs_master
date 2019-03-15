import React, { Component, Fragment } from 'react';
import {
    Tooltip,
    Icon,
    Button,
    Row,
    Col,
    Card,
    Table,
    Divider, Tag,
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
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            render: ( text ) => {
                const num = Math.ceil( Math.random() * 5 )
                // const txt = num === 1 ? '待机中' : num === 2 ? '运行中' : num === 3 ? '故障中' : '离线中'
                const tagObj = num === 1 ?
                { bgColor: '#208933', txt: '待机中' } : num === 2 ?
                { bgColor: '#1b6bec', txt: '运行中' } : num === 3 ?
                { bgColor: '#f85c52', txt: '故障中' } : { bgColor: '#6c6c6c', txt: '离线中' }
                return <Button style={{ background: tagObj.bgColor, color: 'white' }}>{tagObj.txt}</Button>
                // return <span style={{ color: tagObj.bgColor }}>{tagObj.txt}</span>
            },
          }, {
            title: '送水压力',
            dataIndex: 'pressure',
            key: 'pressure',
          }, {
            title: '送水温度',
            key: 'temperature',
            dataIndex: 'temperature',
          }];

        const data = [{
            key: '1',
            name: '冷冻水泵1',
            state: 32,
            pressure: '23.67',
            temperature: 23.2,
          }, {
            key: '2',
            name: '冷冻水泵2',
            state: 42,
            pressure: '24.04',
            temperature: 23.2,
          }, {
            key: '3',
            name: '冷冻水泵3',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }, {
            key: '4',
            name: '冷冻水泵4',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }, {
            key: '5',
            name: '热水泵1',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }, {
            key: '6',
            name: '热水泵2',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }, {
            key: '7',
            name: '热水泵3',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }, {
            key: '8',
            name: '热水泵4',
            state: 32,
            pressure: '23.14',
            temperature: 23.2,
          }];

        return (
            <Fragment>
                <Card style={{ marginBottom: 18 }}>
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
                </Card>
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
                    <Col span={18} />
                </Row>
                {/* <Card title="空压机">
                    <p>空压机由业主提供,品牌未知,参数监控罐体压力</p>
                </Card> */}
            </Fragment>
        )
    }
}
