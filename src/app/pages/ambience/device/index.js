import React, { Component, Fragment } from 'react'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, List, Avatar } from 'antd';
import Clock from 'widgets/Clock'
import WindCabinet from './windCabinet'
import Switchpump from './switchpump'
import Swappump from './swappump'
import FFU from './ffu'


export default class device extends Component {
    /* constructor() {
        super()
    } */
    render() {
        return (
            <Fragment>
                <div style={{ display: 'inline-block', position: 'absolute', right: '2.5vw' }}><Clock /></div>
                <Row gutter={16} style={{ marginTop: 40 }}>
                    <Col span={12}>
                    <span style={{ fontWeight: 'bold', fontSize: 18 }}><span />风柜状态:</span>
                        <WindCabinet />
                    </Col>
                    <Col span={12}>
                        <span style={{ fontWeight: 'bold', fontSize: 18 }}><span />板换房水泵状态:</span>
                        <Swappump />
                        <div style={{ height: 56 }} />
                        <span style={{ fontWeight: 'bold', fontSize: 18 }}><span />FFU状态:</span>
                        <FFU />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

