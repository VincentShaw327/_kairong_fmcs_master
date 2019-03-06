import React from 'react';
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

class Groupedcolumn extends React.Component {
    constructor( props, context ) {
        super( props )
        // this.state = {}
    }
    render() {
        const data = [
            {
                name: '空调用电',
                一月: getRandomArbitrary( 20, 25 ),
                二月: getRandomArbitrary( 50, 75 ),
                三月: getRandomArbitrary( 50, 75 ),
                四月: getRandomArbitrary( 50, 75 ),
                五月: getRandomArbitrary( 50, 75 ),
                六月: getRandomArbitrary( 50, 75 ),
                七月: getRandomArbitrary( 50, 75 ),
                八月: getRandomArbitrary( 50, 75 ),
            },
            {
                name: '照明用电',
                一月: getRandomArbitrary( 10, 15 ),
                二月: getRandomArbitrary( 10, 15 ),
                三月: getRandomArbitrary( 10, 15 ),
                四月: getRandomArbitrary( 10, 15 ),
                五月: getRandomArbitrary( 10, 15 ),
                六月: getRandomArbitrary( 10, 15 ),
                七月: getRandomArbitrary( 10, 15 ),
                八月: getRandomArbitrary( 10, 15 ),
            },
            {
                name: '生产用电',
                一月: getRandomArbitrary( 40, 60 ),
                二月: getRandomArbitrary( 50, 60 ),
                三月: getRandomArbitrary( 120, 150 ),
                四月: getRandomArbitrary( 120, 150 ),
                五月: getRandomArbitrary( 120, 150 ),
                六月: getRandomArbitrary( 120, 150 ),
                七月: getRandomArbitrary( 120, 150 ),
                八月: getRandomArbitrary( 120, 150 ),
            },
            {
                name: '冷水机用电',
                一月: getRandomArbitrary( 70, 80 ),
                二月: getRandomArbitrary( 70, 80 ),
                三月: getRandomArbitrary( 70, 80 ),
                四月: getRandomArbitrary( 70, 80 ),
                五月: getRandomArbitrary( 70, 80 ),
                六月: getRandomArbitrary( 70, 80 ),
                七月: getRandomArbitrary( 70, 80 ),
                八月: getRandomArbitrary( 70, 80 ),
            },
            {
                name: '空压机用电',
                一月: getRandomArbitrary( 15, 22 ),
                二月: getRandomArbitrary( 15, 22 ),
                三月: getRandomArbitrary( 15, 22 ),
                四月: getRandomArbitrary( 15, 22 ),
                五月: getRandomArbitrary( 15, 22 ),
                六月: getRandomArbitrary( 15, 22 ),
                七月: getRandomArbitrary( 15, 22 ),
                八月: getRandomArbitrary( 15, 22 ),
            },
            {
                name: '制氮机用电',
                一月: getRandomArbitrary( 18, 24 ),
                二月: getRandomArbitrary( 18, 24 ),
                三月: getRandomArbitrary( 18, 24 ),
                四月: getRandomArbitrary( 18, 24 ),
                五月: getRandomArbitrary( 18, 24 ),
                六月: getRandomArbitrary( 18, 24 ),
                七月: getRandomArbitrary( 18, 24 ),
                八月: getRandomArbitrary( 18, 24 ),
            },
            {
                name: '纯水机用电',
                一月: getRandomArbitrary( 5, 9 ),
                二月: getRandomArbitrary( 5, 9 ),
                三月: getRandomArbitrary( 5, 9 ),
                四月: getRandomArbitrary( 5, 9 ),
                五月: getRandomArbitrary( 5, 9 ),
                六月: getRandomArbitrary( 5, 9 ),
                七月: getRandomArbitrary( 5, 9 ),
                八月: getRandomArbitrary( 5, 9 ),
            },
        ];
        const ds = new DataSet();
        const dv = ds.createView().source( data );
        dv.transform( {
            type: 'fold',
            fields: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
            // 展开字段集
            key: '月份',
            // key字段
            value: '月均用电量', // value字段
        } );
        const columns = [{
            title: '时间',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '空调用电',
            dataIndex: 'airCondition',
            key: 'airCondition',
          }, {
            title: '照明用电',
            dataIndex: 'illumination',
            key: 'illumination',
          }, {
            title: '生产用电',
            key: 'produce',
            dataIndex: 'produce',
            /* render: tags => (
              <span>
                {tags.map( ( tag ) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if ( tag === 'loser' ) {
                    color = 'volcano';
                  }
                  return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                } )}
              </span>
            ), */
          }, {
            title: '冷水机用电',
            dataIndex: 'cold',
            key: 'cold',
          }, {
            title: '空压机用电',
            dataIndex: 'air',
            key: 'air',
          }, {
            title: '制氮机用电',
            dataIndex: 'nitrogen',
            key: 'nitrogen',
          }, {
            title: '纯水机用电',
            dataIndex: 'purewater',
            key: 'purewater',
          }, {
            title: '操作',
            key: 'action',
            render: ( text, record ) => (
              <span>
                {/* <a href="javascript:;">Invite {record.name}</a> */}
                <a href="javascript:;">Detail</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </span>
            ),
          }];

        const data02 = [];
        for ( let index = 1; index < 9; index++ ) {
            data02.push( {
                key: index,
                name: `0${index}月`,
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
                airCondition: getRandomArbitrary( 20, 25 ),
                illumination: getRandomArbitrary( 20, 25 ),
                produce: getRandomArbitrary( 20, 25 ),
                cold: getRandomArbitrary( 20, 25 ),
                air: getRandomArbitrary( 20, 25 ),
                nitrogen: getRandomArbitrary( 20, 25 ),
                purewater: getRandomArbitrary( 20, 25 ),
            } )
        }
        return (
            <div>
                <Card>
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
                    <Table bordered columns={columns} dataSource={data02} />
                </Card>
            </div>
        );
  }
}

export default Groupedcolumn;
