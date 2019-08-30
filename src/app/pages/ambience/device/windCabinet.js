import React, { Component, Fragment } from 'react'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, List, Avatar } from 'antd';

import DeviceState from 'components/DeviceState'

export default class windCabinet extends Component {
    /* constructor() {
        super()
    } */
    render() {
        const data = [
            {
                floor: '一楼',
                cabinets: [
                    {
                        name: 'A01FG01',
                        id: 'MAU-1F-01',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A01FG02',
                        id: 'MAU-1F-02',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A02FG01',
                        id: 'AHU-1F-01',
                        type: '单冷控制',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A02FG02',
                        id: 'AHU-1F-03',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A02FG03',
                        id: 'AHU-1F-03',
                        type: '单冷控制',
                        txt: '运行中',
                        status: -1,
                    },
                ],
            },
            {
                floor: '二楼',
                cabinets: [
                {
                    name: 'A01FG01',
                    id: 'AHU-2F-01',
                    type: '单冷控制',
                    txt: '运行中',
                    status: 1,
                },
                {
                    name: 'A01FG02',
                    id: 'AHU-2F-02',
                    type: '单冷控制',
                    txt: '运行中',
                    status: 1,
                },
                {
                    name: 'A03FG03',
                    id: 'AHU-2F-03',
                    type: '单冷控制',
                    txt: '运行中',
                    status: 0,
                },
                {
                    name: 'A03FG04',
                    id: 'AHU-2F-04',
                    type: '单冷控制',
                    txt: '运行中',
                    status: 1,
                }],
            },
            {
                floor: '三楼',
                cabinets: [
                    {
                        name: 'A04FG01',
                        id: 'MAU-4F-01',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A04FG02',
                        id: 'MAU-4F-02',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A04FG03',
                        id: 'MAU-4F-03',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: 'A04FG04',
                        id: 'MAU-4F-04',
                        type: '恒温恒湿',
                        txt: '运行中',
                        status: 1,
                    }],
            },
        ];
        const ListHead = (
            <Row>
                <Col span={4}>楼层</Col>
                <Col span={5}>名称</Col>
                <Col span={5}>编号</Col>
                <Col span={5}>控制方式</Col>
                <Col span={5}>状态</Col>
                {/* <Col span={4} /> */}
            </Row>
        )
        const renderStatus = status => ( status === 1 ? <DeviceState txt="运行中" type="running" /> :
                    status === -1 ? <DeviceState txt="报警中" type="warning" /> :
                    status === 0 ? <DeviceState txt="离线中" type="offline" /> : <DeviceState /> )
        return (
            <Fragment>
                <div style={{ background: 'white' }}>
                    <List
                      bordered
                      header={ListHead}
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                            {/* <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                              title={<a href="https://ant.design">{item.title}</a>}
                              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            /> */}
                            <Row type="flex" justify="center" align="middle" style={{ width: '100%' }}>
                                <Col span={4}>{item.floor}</Col>
                                <Col span={20}>
                                    {
                                        item.cabinets.map( cb => (
                                            <Row type="flex" justify="center" align="middle" style={{ borderBottom: 'solid 0px blue', padding: '8px 0px' }}>
                                                <Col span={6}>{cb.name}</Col>
                                                <Col span={6}>{cb.id}</Col>
                                                <Col span={6}>{cb.type}</Col>
                                                {/* <Col span={6}>{cb.status}</Col> */}
                                                <Col span={6}>{renderStatus( cb.status )}</Col>
                                            </Row>
                                        ) )
                                    }

                                </Col>
                            </Row>
                        </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        )
    }
}

