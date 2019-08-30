import React, { Component, Fragment } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux'
import { Curved_E_F as LineChart } from '../chart/line'


const getRandomArbitrary = ( min, max ) => Math.random().toFixed( 2 ) * ( max - min ) + min
@connect( ( state, props ) => ( {
  Report: state.Report,
} ) )
class Curved extends React.Component {
  render() {
    const { abLineChart } = this.props.Report

    const columns = [{
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: 180,
        // render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '温度',
        dataIndex: 'temperature',
        key: 'temperature',
      }, /* {
        title: '湿度',
        dataIndex: 'humidity',
        key: 'humidity',
      } */];

    const data02 = [];
    for ( let index = 0; index < 9; index++ ) {
        data02.push( {
            key: index,
            name: `0${index}月`,
            time: `0${index}:00`,
            age: 32,
            // address: 'New York No. 1 Lake Park',
            // tags: ['nice', 'developer'],
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
            {/* <Card> */}
              <div style={{ margin: '15px 0' }}>
                <LineChart data={abLineChart || []} />
              </div>
              <Table 
              bordered
              onHeaderRow={record => ({className:'ab-report-header'})}
              rowClassName={record => 'ab-report-row'}
               columns={columns} dataSource={abLineChart || data02} />
            {/* </Card> */}
        </Fragment>
    );
  }
}

export default Curved;
