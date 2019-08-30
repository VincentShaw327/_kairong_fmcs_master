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
        const ds = new DataSet();
        const dv = ds.createView().source( data );
        dv.transform( {
            type: 'fold',
            fields: ['24nd', '25nd', '26nd', '27nd', '28nd', '29nd', '30nd', '31nd'],
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
                name: `0${index}nd`,
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
                    <Table 
                    bordered
                    onHeaderRow={record => ({className:'eg-report-header'})}
                    rowClassName={record => 'eg-report-row'}
                     columns={columns} dataSource={data02} />
                </Card>
            </div>
        );
  }
}

export default Groupedcolumn;
