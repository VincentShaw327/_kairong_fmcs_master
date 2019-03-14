import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Popconfirm } from 'antd';
/* import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util,
  } from 'bizcharts';
import DataSet from '@antv/data-set'; */
import PageHeaderLayout from '../../base/PageHeaderLayout';
import FFU from '../../images/device/timg.jpg'
import styles from './index.less'

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
            tableDataList: [],
            updateFromItem: {},
            // total: 0,
            current: 0,
            pageSize: 10,
            UModalShow: false,
            // loading: true,
        }
        this.url = '/api/TDevice/device_type';
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        const Milieu = ( obj ) => {
            const { title = '车间名称', temp = 23.4, rh = 12 } = obj
            return (
                <Fragment>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.parameter}>
                        <div>
                            <IconFont className={styles.icon} type="icon-wendu" />
                            <span className={styles.num}>{temp}</span>
                            <span className={styles.unit}>℃</span>
                        </div>
                        <div>
                            <IconFont className={styles.icon} type="icon-humidity" />
                            <span className={styles.num}>{rh}</span>
                            <span className={styles.unit}>RH%</span>
                        </div>
                    </div>
                </Fragment>
            )
        };
        return (
            <Fragment>
                <Card style={{ marginBottom: 18 }}>
                    <p color="#108ee9" style={{ marginBottom: 15, fontSize: 25, color: '#1890ff' }}>车间环境</p>
                    <div className={styles.firstfloor}>
                        <div className={styles.one}>
                            <div className={styles.empty} />
                            <div className={styles.cleanroom} >
                                <span className={styles.title}>清洗机房</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.coatingroom} >
                                <span className={styles.title}>光驰镀膜机房</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.officeroom} >
                                <span className={styles.title}>办公区</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.two}>
                            <div className={styles.empty} />
                            <div className={styles.lockerroom} >
                                <span className={styles.title}>更衣室</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.umbrellarroom}>
                                <span className={styles.divider} />
                                <span className={styles.title1} >光驰镀膜室</span>
                                <span className={styles.title2} >换伞区</span>
                                <div className={styles.parameter}>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-wendu" />
                                        <span className={styles.num}>26</span>
                                        <span className={styles.unit}>℃</span>
                                    </div>
                                    <div>
                                        <IconFont className={styles.icon} type="icon-humidity" />
                                        <span className={styles.num}>15</span>
                                        <span className={styles.unit}>RH%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.three}>
                            <div className={styles.left} >
                                <div className={styles.up} >
                                    <span className={styles.title}>镀膜房</span>
                                    <div className={styles.parameter}>
                                        <div>
                                            <IconFont className={styles.icon} type="icon-wendu" />
                                            <span className={styles.num}>26</span>
                                            <span className={styles.unit}>℃</span>
                                        </div>
                                        <div>
                                            <IconFont className={styles.icon} type="icon-humidity" />
                                            <span className={styles.num}>15</span>
                                            <span className={styles.unit}>RH%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.down} >
                                    <Milieu title="DLC机房" />
                                </div>
                            </div>
                            <div className={styles.right} >
                                <div className={styles.RLeft} >
                                    <div className={styles.up} >
                                        <Milieu title="更衣室" />
                                    </div>
                                    <div className={styles.down} >
                                        <Milieu title="辅机" />
                                    </div>
                                </div>
                                <div className={styles.RCenter}>
                                    <Milieu title="研磨设备" />
                                </div>
                                <div className={styles.RRight} >
                                    <Milieu title="辅机" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Fragment>
        )
    }
}
