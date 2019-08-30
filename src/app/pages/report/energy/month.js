import React from 'react';
import { Card, Button, Icon, Tag, Row, Col, message, Divider, Table } from 'antd';
import { fetchEGBarGraph } from 'actions/common'
import { connect } from 'react-redux'
import moment from 'moment'
import { BC_EG_M as EgMonthChart } from '../chart/bar'

const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min

@connect( ( state, props ) => ( {
  // MQTTData: state.MQTTData,
  Report: state.Report,
} ) )
class Groupedcolumn extends React.Component {
    constructor( props, context ) {
        super( props )
        // this.state = {}
    }

    componentDidMount() {
      /* const req = {
        startTime: '2019/01/14 00:00:00',
        endTime: '2019/04/22 23:00:00',
        type: 'month',
      }
      this.props.dispatch( fetchEGBarGraph( req ) ) */
    }

    render() {
        const { egDodgeChartMonth, egTableDataMonth } = this.props.Report;
        // console.log( 'egDodgeChartMonth', egDodgeChartMonth )
        const columns = [{
            title: '时间',
            dataIndex: 'time',
            key: 'name',
            render: text => <span >{moment( text ).format( 'YYYY/MM' )}</span>,
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
                    <EgMonthChart data={egDodgeChartMonth} />
                    <Table 
                    bordered 
                    onHeaderRow={record => ({className:'eg-report-header'})}
                    rowClassName={record => 'eg-report-row'}
                    columns={columns} dataSource={egTableDataMonth || data02} />
                </Card>
            </div>
        );
  }
}

export default Groupedcolumn;
