import React, { Component, Fragment } from 'react'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, List, Avatar } from 'antd';

import DeviceState from 'components/DeviceState'

export default class swappump extends Component {
    /* constructor() {
        super()
    } */
    render() {
        const data = [
            {
                floor: '一楼',
                cabinets: [
                    {
                        name: '主供水泵',
                        id: 'PCW-1F-01',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: '备用供水泵',
                        id: 'PCW-1F-02',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 0,
                    },
                ],
            },
            {
                floor: '二楼',
                cabinets: [],
            },
            {
                floor: '三楼',
                cabinets: [
                    {
                        name: '主供水泵',
                        id: 'PCW-3F-01',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: '备用供水泵',
                        id: 'PCW-3F-02',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 0,
                    },
                    {
                        name: '主供水泵',
                        id: 'PCW-3F-03',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 1,
                    },
                    {
                        name: '备用供水泵',
                        id: 'PCW-3F-04',
                        type: '变频恒温恒压',
                        txt: '运行中',
                        status: 0,
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
                            <Row type="flex" justify="center" align="middle" style={{ width: '100%' }}>
                                <Col span={4}>{item.floor}</Col>
                                <Col span={20}>
                                    {
                                        item.cabinets.map( cb => (
                                            <Row type="flex" justify="center" align="middle" style={{ borderBottom: 'solid 0px blue', padding: '8px 0px' }}>
                                                <Col span={6}>{cb.name}</Col>
                                                <Col span={6}>{cb.id}</Col>
                                                <Col span={6}>{cb.type}</Col>
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
