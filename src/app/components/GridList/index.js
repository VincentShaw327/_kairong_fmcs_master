import React, { Component, Fragment } from 'react'
import { Row, Col, List, Avatar } from 'antd';

export default class windCabinet extends Component {
    /* constructor() {
        super()
    } */
    render() {
        let sunFixColumn = 0
        let sunFixNum = 0
        const sumFixWidth = ( arr ) => {
            // arr.filter( r => r.hasOwnProperty( 'width' ) )
            arr.forEach( ( ele ) => {
                if ( ele.width ) {
                    ++sunFixColumn
                    sunFixNum += ele.width
                }
            } );
        }
        const reckonWidth = ( r, i, arr ) => {
            const len = this.props.data.length
            const columnNum = arr.length
            if ( r.width ) {
                return parseInt( r.width, 10 )
            } else if ( !r.width && sunFixNum < 24 ) {

            }
            return 24 / columnNum
        }
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
          }, {
            title: '送水压力',
            dataIndex: 'pressure',
            key: 'pressure',
          }, {
            title: '送水温度',
            key: 'temperature',
            dataIndex: 'temperature',
          },
        ];
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
        const ListHead = () => (
                <Row>
                    {
                       columns.map( ( r, i, arr ) => <Col span={reckonWidth( r, i, arr )}>{r.title}</Col> )
                    }
                </Row>
            ) /* (
            <Row>
                <Col span={4}>楼层</Col>
                <Col span={5}>名称</Col>
                <Col span={5}>编号</Col>
                <Col span={5}>控制方式</Col>
                <Col span={5}>状态</Col>
            </Row>
        ) */
        return (
            <Fragment>
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
                                            <Col span={6}>{ cb.status}</Col>
                                        </Row>
                                    ) )
                                }

                            </Col>
                        </Row>
                    </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

