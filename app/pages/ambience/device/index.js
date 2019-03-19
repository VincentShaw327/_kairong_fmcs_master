import React, { Component, Fragment } from 'react'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, List, Avatar } from 'antd';
import WindCabinet from './windCabinet'


export default class device extends Component {
    /* constructor() {
        super()
    } */
    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={12}><WindCabinet /></Col>
                </Row>
            </Fragment>
        )
    }
}

