import React, { Component, Fragment } from 'react';
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Table } from 'antd';
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

class Curved_E_F extends Component {
  render() {
    const { data } = this.props;
    const DemoDate = [];
    for ( let index = 0; index < 10; index++ ) {
      DemoDate.push( {
        time: `03.20 0${index}:00:00`,
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 23 ),
        ws1_tp: getRandomArbitrary( 20, 23 ),
        ws2_tp: getRandomArbitrary( 20, 23 ),
        ws1_hd: getRandomArbitrary( 20, 23 ),
        ws2_hd: getRandomArbitrary( 20, 23 ),
      } )
    }
    const ds = new DataSet( {
      state: {
        start: new Date( '2019/03/20 00:00:00' ).getTime(),
        end: new Date( '2019/03/20 09:00:00' ).getTime(),
      },
    } );

    const dv = ds.createView().source( data || DemoDate );
    dv.transform( {
      type: 'fold',
      fields: ['temperature', 'humidity'],
      // 展开字段集
      key: 'city', // key字段
      value: '温度', // value字段
    } );
  const handleChange = ( obj ) => {
    const { startValue, endValue } = obj;
    ds.setState( 'start', startValue );
    ds.setState( 'end', endValue );
  }

    // console.log( dv );
    const cols = {
      time: {
        range: [0, 1],
        tickCount: 10,
      },
    };

    return (
        <Fragment>
            <Card>
                <Chart height={400}
                  data={data || DemoDate}
                  // data={DemoDate}
                  // data={dv}
                  scale={cols}
                  forceFit
                  padding={{
                    top: 50, right: 120, bottom: 80, left: 80,
                  }}
                >
                    <Legend
                      itemFormatter={( val ) => {
                        let txt = '';
                        if ( val === 'temperature' ) {
                          txt = '温度';
                        } /* else if ( val === 'humidity' ) {
                          txt = '湿度';
                        } */
                        return txt;
                      }
                          //  `${val}` // val 为每个图例项的文本值
                        }
                    />
                    <Axis name="time" />
                    <Axis
                      name="temperature"
                      label={{
                          formatter: val => `${val}°C`,
                      }}
                      visible
                      position="left"
                      line={{
                            stroke: 'dddddd',
                            fill: '#ffffff',
                      }}
                      tickLine={{
                            lineWidth: 1, // 刻度线宽
                            stroke: '#ccc', // 刻度线的颜色
                            length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                      }}
                    />
                    {/* <Axis
                      name="humidity"
                      label={{
                        formatter: val => `${val}RH%`,
                      }}
                      visible
                      position="right"
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
                    /> */}
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="line"
                      position="time*temperature"
                      size={2}
                      color="green"
                    //   shape="smooth"
                    />
                    {/* <Geom
                      type="point"
                      position="time*temperature"
                      color="green"
                      size={4}
                    /> */}
                    {/* <Geom
                      type="line"
                      position="time*humidity"
                      size={2}
                      color="blue"
                    /> */}
                    {/* <Geom
                      type="point"
                      position="time*humidity"
                      color="blue"
                      size={4}
                    /> */}
                </Chart>
              {/* <div>
                <Slider
                  width="auto"
                  height={26}
                  start={ds.state.start}
                  end={ds.state.end}
                  xAxis="time"
                  yAxis="flow"
                  scales={{
                    time: {
                      type: 'time',
                      tickCount: 10,
                      mask: 'M/DD H:mm',
                    },
                  }}
                  // data={dv}
                  data={DemoDate}
                  backgroundChart={{
                    type: 'line',
                  }}
                  onChange={e => handleChange( e )}
                />
              </div> */}
            </Card>
        </Fragment>
    );
  }
}

class Curved_E_S extends Component {
  render() {
    const data = [
      {
        month: 'Jan',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Feb',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Mar',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Apr',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'May',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Jun',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Jul',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Aug',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Sep',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Oct',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Nov',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Dec',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source( data );
    dv.transform( {
      type: 'fold',
      fields: ['temperature', 'humidity'],
      // 展开字段集
      key: 'city',
      // key字段
      value: '温度', // value字段
    } );
    console.log( dv );
    const cols = {
      month: {
        range: [0, 1],
      },
    };

    return (
        <Fragment>
            <Card>
                <Chart height={400}
                  data={data}
                //   scale={cols}
                  forceFit
                  padding={{
                    top: 50, right: 120, bottom: 80, left: 80,
                    }}
                >
                    <Legend />
                    <Axis name="month" />
                    <Axis
                      name="temperature"
                      label={{
                          formatter: val => `${val}°C`,
                      }}
                      visible
                      position="left"
                      line={{
                            stroke: 'dddddd',
                            fill: '#ffffff',
                      }}
                      tickLine={{
                            lineWidth: 1, // 刻度线宽
                            stroke: '#ccc', // 刻度线的颜色
                            length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                      }}
                    />
                    <Axis
                      name="humidity"
                      label={{
                        formatter: val => `${val}RH%`,
                    }}
                      visible
                      position="right"
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
                    />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="line"
                      position="month*temperature"
                      size={2}
                      color="green"
                    //   shape="smooth"
                    />
                    <Geom
                      type="point"
                      position="month*temperature"
                      color="green"
                      size={4}
                    />
                    <Geom
                    //   type="point"
                      type="line"
                      position="month*humidity"
                    //   shape="circle"
                    //   shape="smooth"
                      size={2}
                      color="blue"
                      /* style={{
                        stroke: '#fff',
                        lineWidth: 1,
                        }} */
                    />
                    <Geom
                      type="point"
                      position="month*humidity"
                      color="blue"
                      size={4}
                    />
                </Chart>
            </Card>
        </Fragment>
    );
  }
}

class Curved_E_T extends Component {
  render() {
    const data = [
      {
        month: 'Jan',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Feb',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Mar',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Apr',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'May',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Jun',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Jul',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Aug',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Sep',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Oct',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Nov',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
      {
        month: 'Dec',
        temperature: getRandomArbitrary( 20, 23 ),
        humidity: getRandomArbitrary( 20, 25 ),
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source( data );
    dv.transform( {
      type: 'fold',
      fields: ['temperature', 'humidity'],
      // 展开字段集
      key: 'city',
      // key字段
      value: '温度', // value字段
    } );
    console.log( dv );
    const cols = {
      month: {
        range: [0, 1],
      },
    };

    return (
        <Fragment>
            <Card>
                <Chart height={400}
                  data={data}
                //   scale={cols}
                  forceFit
                  padding={{
                    top: 50, right: 120, bottom: 80, left: 80,
                    }}
                >
                    <Legend />
                    <Axis name="month" />
                    <Axis
                      name="temperature"
                      label={{
                          formatter: val => `${val}°C`,
                      }}
                      visible
                      position="left"
                      line={{
                            stroke: 'dddddd',
                            fill: '#ffffff',
                      }}
                      tickLine={{
                            lineWidth: 1, // 刻度线宽
                            stroke: '#ccc', // 刻度线的颜色
                            length: 7, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
                      }}
                    />
                    <Axis
                      name="humidity"
                      label={{
                        formatter: val => `${val}RH%`,
                    }}
                      visible
                      position="right"
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
                    />
                    <Tooltip
                      crosshairs={{
                        type: 'y',
                        }}
                    />
                    <Geom
                      type="line"
                      position="month*temperature"
                      size={2}
                      color="green"
                    //   shape="smooth"
                    />
                    <Geom
                      type="point"
                      position="month*temperature"
                      color="green"
                      size={4}
                    />
                    <Geom
                    //   type="point"
                      type="line"
                      position="month*humidity"
                    //   shape="circle"
                    //   shape="smooth"
                      size={2}
                      color="blue"
                      /* style={{
                        stroke: '#fff',
                        lineWidth: 1,
                        }} */
                    />
                    <Geom
                      type="point"
                      position="month*humidity"
                      color="blue"
                      size={4}
                    />
                </Chart>
            </Card>
        </Fragment>
    );
  }
}

export {
    Curved_E_F,
    Curved_E_S,
    Curved_E_T,
}
