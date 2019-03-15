import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, Popconfirm } from 'antd';
// import FFU from '../../images/device/timg.jpg'
import styles from './index.less'

import { Plate, DevState, Chart } from './module/first_plat'
// import { TPostData, TAjax } from 'utils/TAjax';

const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );
@connect( ( state, props ) => ( {
    deviceType: state.deviceType,
} ) )
export default class type extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'plate',
        }
        this.url = '/api/TDevice/device_type';
    }

    componentWillMount() {}

    componentDidMount() {
        /* TPostData(
            'tableList', 'ListActive', { data: 123 },
            ( res ) => {
                console.log( '查询BOM列表：', res );
            },
            ( error ) => {
                message.info( error );
            },
        ) */
        // TAjax( 'GET', 'tableList', '', '', data => console.log( 'data', data ), 'fcb', true )
    }

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const { view } = this.state;
        return (
            <Fragment>
                <Radio.Group value={view} onChange={this.handleSizeChange} style={{ marginBottom: 16 }}>
                    <Radio.Button value="plate">平面图</Radio.Button>
                    <Radio.Button value="chart">图表曲线</Radio.Button>
                    <Radio.Button value="state">设备装态</Radio.Button>
                </Radio.Group>
                {
                    view === 'plate' ? <Plate /> : view === 'chart' ? <Chart /> : view === 'state' ? <DevState /> : ''
                }
            </Fragment>
        )
    }
}
