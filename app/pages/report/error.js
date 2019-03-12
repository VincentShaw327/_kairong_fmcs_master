import React, { Fragment } from 'react';
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Table, DatePicker } from 'antd';
import moment from 'moment';
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

const { RangePicker } = DatePicker;
const getRandomArbitrary = ( min, max, fix ) => {
  if ( max >= 10 ) {
    return ( Math.random() * ( max - min ) ).toFixed( fix || 2 ) + min
  } else if ( max > 0 && max < 10 ) {
    return Math.floor( Math.random() * ( max - min ) )
  }
  return ''
}

const getRandomString = ( arr ) => {
  if ( Array.isArray( arr ) ) {
    const len = arr.length
    return arr[getRandomArbitrary( 0, len, 0 )]
  }
    return '';
}


class Donut extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const data = [
      {
        item: '故障一',
        count: 40,
      },
      {
        item: '故障二',
        count: 21,
      },
      {
        item: '故障三',
        count: 17,
      },
      {
        item: '故障四',
        count: 13,
      },
      {
        item: '故障五',
        count: 9,
      },
    ];
    const dv = new DataView();
    dv.source( data ).transform( {
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    } );
    const cols = {
      percent: {
        formatter: ( val ) => {
          val = `${val * 100}%`;
          return val;
        },
      },
    };
    const columns = [{
      title: '序号',
      dataIndex: 'key',
      key: 'index',
      width: 80,
    }, {
      title: '报警时间',
      dataIndex: 'time',
      key: 'time',
      width: 180,
      // render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '报警类型',
      dataIndex: 'type',
      key: 'type',
      width: 200,
    }, {
      title: '报警设备',
      dataIndex: 'device',
      key: 'device',
      width: 200,
    }, {
      title: '故障原因分析',
      dataIndex: 'cause',
      key: 'cause',
    }, {
      title: '是否已处理',
      dataIndex: 'isActived',
      key: 'isActived',
      width: 120,
      render: str => <span>是</span>,
    }];

    const data02 = [];
    const initDate = moment().subtract( 10, 'days' );
    for ( let index = 1; index < 9; index++ ) {
        data02.push( {
            key: index,
            time: `${initDate.add( index, 'days' ).format( 'YYYY-MM-DD hh:mm:ss' )}`,
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            type: getRandomString( ['温度故障', '湿度故障', '水泵故障', 'FFU故障'] ),
            device: getRandomString( ['水泵', 'FFU', '空调', '电表'] ),
            produce: getRandomArbitrary( 20, 25 ),
            cold: getRandomArbitrary( 20, 25 ),
            cause: '--',
            isActived: getRandomArbitrary( 0, 1 ),
            purewater: getRandomArbitrary( 20, 25 ),
        } )
    }

    return (
        <Fragment>
            <Card>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ position: 'absolute', display: 'inlineBlock', right: 30 }}>
                  <span style={{ marginRight: '1em' }}>日期:</span>
                    <RangePicker
                      ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf( 'month' ), moment().endOf( 'month' )] }}
                      showTime
                      format="YYYY/MM/DD HH:mm:ss"
                      // onChange={onChange}
                    />
                  </span>
                </div>
                <div>
                    <Chart
                        // height={window.innerHeight}
                      // renderer="svg"
                      height={550}
                      width={1200}
                      data={dv}
                      scale={cols}
                      padding={[50, 0, 50, 0]}
                        //   forceFit
                      style={{
                        // border: 'solid 1px #e8e8e8',
                        borderRadius: 8,
                        maxWidth: 1200,
                        margin: '0 auto',
                        marginBottom: 18,
                        // background: 'yellow',
                      }}
                    >
                    <Coord type="theta" radius={1} innerRadius={0.75} />
                    <Axis name="percent" />
                    <Legend
                      position="right-center"
                    //   offsetY={-window.innerHeight / 2 + 120}
                    //   offsetX={-100}
                      // name="故障二"
                      marker="square"
                      offsetX={-200}
                      itemMarginBottom={40}
                      textStyle={{
                        textAlign: 'middle', // 文本对齐方向，可取值为： start middle end
                        fill: '#404040', // 文本的颜色
                        fontSize: '30', // 文本大小
                        // fontWeight: 'bold', // 文本粗细
                        // rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
                        textBaseline: 'middle', // 文本基准线，可取 top middle bottom，默认为middle
                      }}
                      itemFormatter={
                        ( val, count ) => {
                          const arr_Item = data.find( record => record.item === val )
                          return `${val}:  ${arr_Item.count}次` // val 为每个图例项的文本值
                        }
                      }
                    />
                    <Tooltip
                      showTitle={false}
                      itemTpl="<li><span style=&quot;fonsr-size:5em;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                          position={['50%', '50%']}
                          html="<div style=&quot;color:#8c8c8c;font-size:2em;text-align: center;width: 10em;&quot;>故障总次数:<span style=&quot;margin-left:0.5em;color:#262626;font-size:1.25em&quot;>200</span>次</div>"
                          alignX="middle"
                          alignY="middle"
                        />
                    </Guide>
                    <Geom
                      type="intervalStack"
                      position="percent"
                      color="item"
                      tooltip={[
                        'item*percent',
                        ( item, percent ) => {
                            percent = `${percent * 100}%`;
                            return {
                            name: item,
                            value: percent,
                            };
                        },
                        ]}
                      style={{
                        lineWidth: 1,
                        stroke: '#fff',
                        }}
                    >
                        <Label
                          content="percent"
                          offset={20}
                          formatter={( val, item ) => `${item.point.item}: ${val}`}
                          textStyle={{
                            // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
                            // fill: '#404040', // 文本的颜色
                            fontSize: 25, // 文本大小
                            // fontWeight: 'bold', // 文本粗细
                            // // rotate: 30,
                            // textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                          }}
                        />
                    </Geom>
                    </Chart>
                </div>
                <Table bordered columns={columns} dataSource={data02} />
            </Card>
        </Fragment>
    );
  }
}

export default Donut;
