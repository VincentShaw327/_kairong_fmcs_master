import React, { Component } from 'react'
import { DatePicker, Row, Col, Radio, Select, Button } from 'antd';
import { fetchABLineGraph } from 'actions/common'
import { connect } from 'react-redux'
import moment from 'moment'
import First from './first'
import styles from './index.less'
import './index.css'
const { Option } = Select;
// import { Curved_E_F as First } from '../chart/line'
// import styles from './index.less'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


@connect( ( state, props ) => ( {
  Report: state.Report,
} ) )
export default class R_AB_Second extends Component {
  constructor( props, context ) {
    super( props )
    this.state = {
      startValue: moment().subtract( 1, 'days' ),
      endValue: moment(),
      endOpen: false,
      currentType: 'first',
      selectedWS: 306000,
      wsList: {
        first: [
          {
            key: 'clean',
            txt: 'DLC机房空调1#',
            uuid: 306000,
          },
          {
            key: 'gcp',
            txt: 'DLC机房空调2#',
            uuid: 306001,
          },
          {
            key: 'office',
            txt: 'DLC机房空调3#',
            uuid: 306002,
          },
          {
            key: 'gcr',
            txt: '光驰镀膜机房空调1#',
            uuid: 306003,
          },
          {
            key: 'cg01',
            txt: '光驰镀膜机房空调2#',
            uuid: 306004,
          },
          {
            key: 'dumo',
            txt: '光驰镀膜机房空调3#',
            uuid: 306005,
          },
          {
            key: 'cg02',
            txt: '光驰镀膜机房空调4#',
            uuid: 306006,
          },
          {
            key: 'yanmo',
            txt: '光驰镀膜机房空调5#',
            uuid: 306007,
          },
          {
            key: 'fuji1',
            txt: '光驰镀膜机房空调6#',
            uuid: 306008,
          },
          
        ],
        second: [
          {
            key: 'dlc',
            txt: '退火室空调1#',
            uuid: 306009,
          },
          {
            key: 'fuji2',
            txt: '退火室空调2#',
            uuid: 306010,
          },
          {
            key: 'reserved',
            txt: '退火室空调3#',
            uuid: 306011,
          },
          {
            key: 'anneal',
            txt: '退火室空调4#',
            uuid: 306012,
          },
          {
            key: 'goods',
            txt: '退火室空调5#',
            uuid: 306013,
          },
          {
            key: 'depot',
            txt: '退火室空调6#',
            uuid: 306014,
          },
          {
            key: '306015',
            txt: '成品仓空调1#',
            uuid: 306015,
          },
          {
            key: '306015',
            txt: '仓库空调1#',
            uuid: 306015,
          },
          {
            key: '306017',
            txt: '仓库空调2#',
            uuid: 306017,
          },
          {
            key: '306018',
            txt: '预留车间空调1#',
            uuid: 306018,
          },
          {
            key: '306019',
            txt: '预留车间空调2#',
            uuid: 306019,
          },
          {
            key: '306020',
            txt: '预留车间空调3#',
            uuid: 306020,
          },
          {
            key: '306021',
            txt: '预留车间空调4#',
            uuid: 306021,
          },
          {
            key: '306022',
            txt: '预留车间空调5#',
            uuid: 306022,
          },
          {
            key: '306023',
            txt: '生产办公室空调1#',
            uuid: 306023,
          },
          {
            key: '306024',
            txt: '烤箱房空调1#',
            uuid: 306024,
          },
          {
            key: '306025',
            txt: '烤箱房空调2#',
            uuid: 306025,
          },
        ],
        third: [
          {
            key: 'shop',
            txt: '生产车间',
            uuid: 306015,
          },
        ],
      },
    }
  }

  componentDidMount() {
    this.getLineData()
  }

  getLineData() {
    const { startValue, endValue, selectedWS } = this.state;
    const req = {
      startTime: startValue.format( 'YYYY/MM/DD HH:mm:ss' ),
      endTime: endValue.format( 'YYYY/MM/DD HH:mm:ss' ),
      deviceUUID: [selectedWS],
    }
    this.props.dispatch( fetchABLineGraph( req ) )
  }

  disabledStartDate = ( startValue ) => {
    const { endValue } = this.state;
    if ( !startValue || !endValue ) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = ( endValue ) => {
    const { startValue } = this.state;
    if ( !endValue || !startValue ) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = ( field, value ) => {
    this.setState( {
      [field]: value,
    } );
  }

  onStartChange = ( value ) => {
    this.onChange( 'startValue', value );
  }

  onEndChange = ( value ) => {
    this.onChange( 'endValue', value );
  }

  handleStartOpenChange = ( open ) => {
    if ( !open ) {
      this.setState( { endOpen: true } );
    }
  }

  handleEndOpenChange = ( open ) => {
    this.setState( { endOpen: open } );
  }

  handleChange=( v ) => {
    const _type = v.target.value
    const _wsuuid = _type === 'first' ? 306000 : _type === 'second' ? 306011 : _type === 'third' ? 306015 : -1
    this.setState( {
      currentType: _type,
      selectedWS: _wsuuid,
    } )
    console.log( 'date type change', _type, _wsuuid )
 }

 setWorkShopID=( v ) => {
  console.log( 'setWorkShopID', v )
  this.setState( { selectedWS: v } )
 }

  render() {
    const {
      startValue, endValue, endOpen, currentType, wsList, selectedWS,
    } = this.state;
    const { abLineChart } = this.props.Report
    const workshopList = wsList[currentType]

    const DateDay = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
            <DatePicker
              disabledDate={() => this.disabledStartDate()}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              value={startValue}
              placeholder="Start"
              onChange={() => this.onStartChange()}
              onOpenChange={() => this.handleStartOpenChange()}
            />
          <span style={{ padding: 5 }}>-</span>
          <DatePicker
            disabledDate={this.disabledEndDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={endValue}
            placeholder="End"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
        </span>
      {/* <span className={styles.sBt}>确定</span> */}
      </div>
    )


    return (
      <div style={{ padding: 15, background: 'white' }}>
        <div style={{ margin: '15px 0' }}>
          <Row type="flex" align="middle">
            <Col span={5}>
              <RadioGroup defaultValue="first" size="middle" onChange={v => this.handleChange( v )} >
                  <RadioButton value="first">一楼</RadioButton>
                  <RadioButton value="second">二楼</RadioButton>
                  {/* <RadioButton value="third">三楼</RadioButton> */}
              </RadioGroup>
            </Col>
            <Col span={4}> <span style={{ marginRight: 8 }}>车间:</span>
              <Select value={selectedWS} style={{ width: 180 }} onChange={v => this.setWorkShopID( v )}>
                {/* <Option value="clean">清洗机房</Option>
                <Option value="gcp">光驰镀膜房</Option>
                <Option value="office">办公区</Option>
                <Option value="gcr">光驰镀膜室</Option>
                <Option value="cg01">更衣室01</Option> */}
                {workshopList.map( item => <Option key={item.key} value={item.uuid}>{item.txt}</Option> )}
              </Select>
            </Col>
            {/* <Col span={5}> <span style={{ marginRight: 8 }}>对比车间:</span>
              <Select defaultValue="clean" style={{ width: 120 }}>
                <Option value="clean">清洗机房</Option>
                <Option value="gcp">光驰镀膜房</Option>
                <Option value="office">办公区</Option>
                <Option value="gcr">光驰镀膜室</Option>
                <Option value="cg01">更衣室01</Option>
              </Select>
            </Col> */}
            {/* <Col span={9} /> */}
            <Col span={8}>
              {/* { DateDay } */}
              <div>
                <span><span style={{ marginRight: 12 }}>日期:</span>
                    <DatePicker
                      disabledDate={this.disabledStartDate}
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      value={startValue}
                      placeholder="Start"
                      onChange={this.onStartChange}
                      onOpenChange={this.handleStartOpenChange}
                    />
                  <span style={{ padding: 5 }}>-</span>
                  <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                  />
                </span>
                {/* <span className={styles.sBt}>确定</span> */}
              </div>
            </Col>
            <Col span={3}><span className={styles.sBt} onClick={() => this.getLineData()}>确定</span></Col>
          </Row>
        </div>
        <First />
      </div>
    )
  }
}
