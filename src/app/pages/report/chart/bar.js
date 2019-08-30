import React from 'react';
// import { Card, Button, Icon, Tag, Row, Col, message, Divider, Table } from 'antd';
import {
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
import DataSet from '@antv/data-set';
import Slider from 'bizcharts-plugin-slider';

const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min

class BC_EG_Y extends React.Component {
    constructor( props, context ) {
        super( props )
        // this.state = {}
    }
    render() {
        const { data, years } = this.props
        const data01 = [];
        const ds = new DataSet();
        const dv = ds.createView().source( data || data01 );
        dv.transform( {
            type: 'fold',
            fields: years || ['2018', '2019'],
            // 展开字段集
            key: '月份',
            // key字段
            value: '月均用电量', // value字段
        } );
        return (
            <div>
                <Chart height={400} data={dv} forceFit>
                    <Axis name="月份" />
                    <Axis name="月均用电量"
                      visible
                      position="left"
                      title
                      line={{
                        stroke: 'dddddd',
                        fill: '#ffffff',
                        // lineDash: [2, 2, 3],
                        // lineCap: 'square',
                        lineWidth: 1,
                        endArrow: true,
                        arrowAngle: 30,
                        arrowRadius: 8,
                        }}
                      tickLine={{
                        lineWidth: 1, // 刻度线宽
                        stroke: '#ccc', // 刻度线的颜色
                        length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                        }}
                    //   label={{ formatter: ( text, item ) => `${text}/Kw/h` }}
                    />
                    <Legend />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="interval"
                      position="月份*月均用电量"
                      color="name"
                      adjust={[
                        {
                            type: 'dodge',
                            marginRatio: 1 / 32,
                        },
                        ]}
                    />
                </Chart>
            </div>
        );
  }
}
class BC_EG_M extends React.Component {
    constructor( props, context ) {
        super( props )
        // this.state = {}
    }
    render() {
        const { data } = this.props
        const data01 = [
            {
                name: '空调用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '照明用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 20, 25 ),
                '03': getRandomArbitrary( 20, 35 ),
                '04': getRandomArbitrary( 30, 35 ),
                '05': getRandomArbitrary( 20, 30 ),
                '06': getRandomArbitrary( 20, 35 ),
                '07': getRandomArbitrary( 20, 30 ),
                '08': getRandomArbitrary( 30, 35 ),
            },
            {
                name: '生产用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '冷水机用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '空压机用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '制氮机用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '纯水机用电',
                '01': getRandomArbitrary( 20, 25 ),
                '02': getRandomArbitrary( 50, 75 ),
                '03': getRandomArbitrary( 50, 75 ),
                '04': getRandomArbitrary( 50, 75 ),
                '05': getRandomArbitrary( 50, 75 ),
                '06': getRandomArbitrary( 50, 75 ),
                '07': getRandomArbitrary( 50, 75 ),
                '08': getRandomArbitrary( 50, 75 ),
            },
        ];
        const ds = new DataSet();
        const dv = ds.createView().source( data || data01 );
        dv.transform( {
            type: 'fold',
            fields: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            // 展开字段集
            key: '月份',
            // key字段
            value: '月均用电量', // value字段
        } );
        return (
            <div>
                <Chart height={400} data={dv} forceFit>
                    <Axis name="月份" />
                    <Axis name="月均用电量"
                      visible
                      position="left"
                      title
                      line={{
                        stroke: 'dddddd',
                        fill: '#ffffff',
                        // lineDash: [2, 2, 3],
                        // lineCap: 'square',
                        lineWidth: 1,
                        endArrow: true,
                        arrowAngle: 30,
                        arrowRadius: 8,
                        }}
                      tickLine={{
                        lineWidth: 1, // 刻度线宽
                        stroke: '#ccc', // 刻度线的颜色
                        length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                        }}
                    //   label={{ formatter: ( text, item ) => `${text}/Kw/h` }}
                    />
                    <Legend />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="interval"
                      position="月份*月均用电量"
                      color="name"
                      adjust={[
                        {
                            type: 'dodge',
                            marginRatio: 1 / 32,
                        },
                        ]}
                    />
                </Chart>
            </div>
        );
  }
}
class BC_EG_D extends React.Component {
    constructor( props, context ) {
        super( props )
        // this.state = {}
    }

    render() {
        const { data, fields } = this.props
        const data01 = [
            {
                name: '空调用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '照明用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 20, 25 ),
                '26nd': getRandomArbitrary( 20, 35 ),
                '27nd': getRandomArbitrary( 30, 35 ),
                '28nd': getRandomArbitrary( 30, 35 ),
                '29nd': getRandomArbitrary( 20, 30 ),
                '30nd': getRandomArbitrary( 20, 35 ),
                '31nd': getRandomArbitrary( 20, 30 ),
            },
            {
                name: '生产用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '冷水机用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '空压机用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '制氮机用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
            {
                name: '纯水机用电',
                '24nd': getRandomArbitrary( 20, 25 ),
                '25nd': getRandomArbitrary( 50, 75 ),
                '26nd': getRandomArbitrary( 50, 75 ),
                '27nd': getRandomArbitrary( 50, 75 ),
                '28nd': getRandomArbitrary( 50, 75 ),
                '29nd': getRandomArbitrary( 50, 75 ),
                '30nd': getRandomArbitrary( 50, 75 ),
                '31nd': getRandomArbitrary( 50, 75 ),
            },
        ];
        const data02 = [];
        const ds = new DataSet( {
            state: {
            //   start: new Date( '2019/04/01 00:00:00' ).getTime(),
            //   end: new Date( '2019/04/30 23:00:00' ).getTime(),
              start: 1,
              end: 30,
            },
          } );
        const dv = ds.createView().source( data || data02 );
        dv.transform( {
            type: 'fold',
            fields: fields || ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            ],
            // 展开字段集
            key: '月份',
            // key字段
            value: '月均用电量', // value字段
        } );
        const handleChange = ( obj ) => {
            const { startValue, endValue } = obj;
            ds.setState( 'start', startValue );
            ds.setState( 'end', endValue );
        }
        return (
            <div>
                <Chart height={400} data={dv} forceFit>
                    <Axis name="月份" />
                    <Axis name="月均用电量"
                      visible
                      position="left"
                      title
                      line={{
                        stroke: 'dddddd',
                        fill: '#ffffff',
                        // lineDash: [2, 2, 3],
                        // lineCap: 'square',
                        lineWidth: 1,
                        endArrow: true,
                        arrowAngle: 30,
                        arrowRadius: 8,
                        }}
                      tickLine={{
                        lineWidth: 1, // 刻度线宽
                        stroke: '#ccc', // 刻度线的颜色
                        length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                        }}
                    //   label={{ formatter: ( text, item ) => `${text}/Kw/h` }}
                    />
                    <Legend />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="interval"
                      position="月份*月均用电量"
                      color="name"
                      adjust={[
                        {
                            type: 'dodge',
                            marginRatio: 1 / 32,
                        },
                        ]}
                    />
                </Chart>
                {/* <div>
                    <Slider
                      width="auto"
                      height={26}
                      start={ds.state.start}
                      end={ds.state.end}
                      xAxis="linear"
                      yAxis="flow"
                      scales={{
                        linear: {
                        // type: 'time',
                        type: 'linear',
                        tickCount: 2,
                        // mask: 'M/DD H:mm',
                        },
                    }}
                    // data={dv}
                      data={data || data01}
                    //   backgroundChart={{
                    //     type: 'line',
                    // }}
                      onChange={e => handleChange( e )}
                    />
                </div> */}
            </div>
        );
  }
}

export {
    BC_EG_Y,
    BC_EG_M,
    // BC_EG_Y,
    BC_EG_D,
}
