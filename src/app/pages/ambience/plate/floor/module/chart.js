import React, { Component, Fragment } from 'react';
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Table, Checkbox } from 'antd';
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
import moment from 'moment'

const CheckboxGroup = Checkbox.Group;

const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min
class Curved extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }
  handleChange=( checkedValues ) => {
    console.log( 'checked = ', checkedValues );
  }

  render() {
    const {
      data, width, height, plainOptions,
    } = this.props;
    console.log( 'line_data', data )
    const data01 = [];
    for ( let index = 0; index < 9; index++ ) {
        data01.push( {
            time: moment( { hour: 0, minute: 0, second: 3 } ).add( index, 'h' ).format( 'HH:mm:ss' ),

            temperature: getRandomArbitrary( 20, 23 ),
            humidity: getRandomArbitrary( 20, 25 ),
        } )
    }
    const ds = new DataSet();
    const dv = ds.createView().source( data01 );
    dv.transform( {
        type: 'fold',
        fields: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
        // 展开字段集
        key: '月份',
        // key字段
        value: '月均用电量', // value字段
    } );

    return (
        <Fragment>
            <div style={{
              width: width || 300, height: height || 300, background: 'white', paddingBottom: 18, marginBottom: 18,
              }}
            >
                <Chart
                  // height={600}
                  data={data.ABLineData || data01}
                    // scale={cols}
                  forceFit
                  padding={{
                    top: 30, right: 60, bottom: 70, left: 60,
                    }}
                >
                    <Legend
                      itemFormatter={( val ) => {
                          let txt = '';
                          if ( val === 'temperature' ) {
                            txt = '温度';
                          } else if ( val === 'humidity' ) {
                            txt = '湿度';
                          }
                          return txt;
                        }
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
                    <Geom
                    //   type="point"
                      type="line"
                      position="time*humidity"
                    //   shape="circle"
                    //   shape="smooth"
                      size={2}
                      color="blue"
                      /* style={{
                        stroke: '#fff',
                        lineWidth: 1,
                        }} */
                    />
                    {/* <Geom
                      type="point"
                      position="time*humidity"
                      color="blue"
                      size={4}
                    /> */}
                </Chart>
                <div style={{ textAlign: 'center', margin: '0px auto' }}>
                {/* {
                  plainOptions ? <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.handleChange} /> : ''
                } */}
                </div>
            </div>
        </Fragment>
    );
  }
}

const SecondList = ( { columns, data, ...others } ) => ( <Table bordered columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true, pageSize: 10 }} /> )

export default Curved;
export {
     SecondList,
}
