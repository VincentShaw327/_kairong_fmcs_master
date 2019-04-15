import React, { Component, Fragment } from 'react'
import { Radio } from 'antd';
import moment from 'moment'
import Clock from 'widgets/Clock'
import mqtt from 'mqtt'
import { resMqtt } from 'actions/common'
import First from './floor/first'
import Second from './floor/second'
import Third from './floor/third'

export default class plate extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'first',
            /*  mqttData: {
                first:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                clean: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            {
                                time: '01:00:02',
                                cleanroom: 24,
                                coat: 25,
                                office: 25,
                                locker: 25,
                                umbrellar: 25,
                                dlc: 25,
                                dress: 25,
                                auxiliary01: 24,
                                auxiliary02: 24,
                                grind: 27,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                            time: '00:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },{
                            time: '01:00:02',
                            cleanroom: 24,
                            coat: 25,
                            office: 25,
                            locker: 25,
                            umbrellar: 25,
                            dlc: 25,
                            dress: 25,
                            auxiliary01: 24,
                            auxiliary02: 24,
                            grind: 27,
                        },...]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            name: 'coat',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            name: 'clean',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        coat: {
                            temperature: 24,
                            humidity: '-',
                        },
                        ...
                    },
                },
                second:{
                    chartData: {
                        // 温度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        temperature: [
                            {
                                time: '00:00:00',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            ...
                        ],
                        // 湿度数据,从当天凌晨零点到当前时间的各个车间温度,一小时一个间隔
                        humidity: [
                            {
                                time: '00:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                            {
                                time: '01:00:02',
                                reserved: 24,
                                anneal: 25,
                                goods: 25,
                                depot: 25,
                            },
                        ]
                    },
                    // 各个车间的当前实时数据
                    tableData: [
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        {
                            time: '2019.04.14 12:23:22',
                            temperature: 24,
                            humidity: 25,
                        },
                        ...
                    ],
                    // 各个车间的当前实时数据
                    plantData: {
                        reserved: {
                            temperature: 24,
                            humidity: '-',
                        },
                        anneal:{
                            temperature: 24,
                            humidity: 25,
                        },
                        goods:{
                            temperature: 24,
                            humidity: 25,
                        },
                        depot:{
                            temperature: 24,
                            humidity: 25,
                        }
                    },
                },
                third:{

                }
            }, */
        }
    }

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const { view, mqttData } = this.state;
        return (
            <Fragment>
                <div style={{ marginBottom: 16 }}>
                    <Radio.Group value={view} onChange={this.handleSizeChange} >
                        <Radio.Button value="first">一楼</Radio.Button>
                        <Radio.Button value="second">二楼</Radio.Button>
                        <Radio.Button value="third">三楼</Radio.Button>
                    </Radio.Group>
                    <div style={{ display: 'inline-block', position: 'absolute', right: '2.5vw' }}><Clock /></div>
                </div>
                <div style={{ position: 'relative', margin: '0 auto' }}>
                    {
                        view === 'first' ? <First /> : view === 'second' ? <Second /> : view === 'third' ? <Third /> : ''
                    }
                </div>
            </Fragment>
        )
    }
}
