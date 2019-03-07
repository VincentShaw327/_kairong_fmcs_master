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


const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min
class Curved extends React.Component {
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

    const columns = [{
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        // render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '温度',
        dataIndex: 'temperature',
        key: 'temperature',
      }, {
        title: '湿度',
        dataIndex: 'humidity',
        key: 'humidity',
      }];

    const data02 = [];
    for ( let index = 0; index < 9; index++ ) {
        data02.push( {
            key: index,
            name: `0${index}月`,
            time: `0${index}:00`,
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            temperature: getRandomArbitrary( 20, 25 ),
            humidity: getRandomArbitrary( 20, 25 ),
            produce: getRandomArbitrary( 20, 25 ),
            cold: getRandomArbitrary( 20, 25 ),
            air: getRandomArbitrary( 20, 25 ),
            nitrogen: getRandomArbitrary( 20, 25 ),
            purewater: getRandomArbitrary( 20, 25 ),
        } )
    }
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
                <Table bordered columns={columns} dataSource={data02} />
            </Card>
        </Fragment>
    );
  }
}

export default Curved;
