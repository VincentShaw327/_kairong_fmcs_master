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
             {/* <PageHeaderLayout
               wrapperClassName="pageContent"
               BreadcrumbList={bcList}
             > */}
                {/* <Card style={{ marginBottom: 18 }}>
                    <header style={{ textAlign: 'center' }}>
                        <h1 style={{ color: 'green' }}>
                            FMCS厂务管理系统
                        </h1>
                    </header>
                </Card> */}
                <Row gutter={16} style={{ marginBottom: 18 }}>
                    <Col span={12}>
                        <Card title="空调机房水泵启动柜">
                            <Row>
                                <Col span={6}>
                                    <p>冷冻水泵1</p>
                                    <p>冷冻水泵2</p>
                                    <p>冷冻水泵3</p>
                                    <p>冷却水泵1</p>
                                    <p>冷却水泵2</p>
                                    <p>冷却水泵3</p>
                                    <p>热水泵1</p>
                                    <p>热水泵2</p>
                                    <p>冷却塔1</p>
                                    <p>冷却塔2</p>
                                </Col>
                                <Col span={6}>
                                    <p>运行中</p>
                                    <p>故障中</p>
                                    <p>运行中</p>
                                    <p>停机中</p>
                                    <p>运行中</p>
                                    <p>停机中</p>
                                    <p>运行中</p>
                                    <p>运行中</p>
                                    <p>故障中</p>
                                    <p>运行中</p>
                                </Col>
                                <Col span={8}>
                                    <p>当前水压:***Pa</p>
                                    <p>当前温度:***℃</p>
                                    <p>其它触摸屏参数...</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="空压机">
                            <p>空压机由业主提供,品牌未知,参数监控罐体压力</p>
                        </Card>
                    </Col>
                </Row>
                {/* </PageHeaderLayout> */}
            </Fragment>
        )
    }
}
