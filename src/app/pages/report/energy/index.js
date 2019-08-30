import React, { Component } from 'react'
import { DatePicker, Row, Col, Radio, Button, Select, Spin } from 'antd';
import moment from 'moment'
import { connect } from 'react-redux'
import { fetchEGBarGraph } from 'actions/common'
import Year from './year'
import Month from './month'
import Week from './week'
import Day from './day'
import styles from './index.less'
import './index.css'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;

@connect( ( state, props ) => ( {
  // MQTTData: state.MQTTData,
  Report: state.Report,
} ) )
export default class R_EG extends Component {
  constructor( props, context ) {
    super( props )
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false,
      currentType: 'month',
      yearlist: [],
      mc_year: moment().format( 'YYYY' ),
      dc_year: moment().format( 'YYYY' ),
      dc_month: moment().format( 'M' ),
      yc_startYear: '2016',
      yc_endYear: moment().format( 'YYYY' ),
      monthDays: 30,
    }
  }

  componentDidMount() {
    this.setYearList()
    this.getMCData()
  }

  setYearList=() => {
    let currentYear = moment().format( 'YYYY' )
    currentYear = parseInt( currentYear, 10 )
    const yearlist = [];
    for ( let index = 2; index >= -1; index-- ) {
      yearlist.push( ( currentYear - index ).toString() )
    }
    this.setState( { yearlist, yc_startYear: ( currentYear - 2 ).toString() } )
    // console.log( 'currentYear', currentYear, yearlist )
  }

  disabledStartDate = ( startValue ) => {
    const endValue = this.state.endValue;
    if ( !startValue || !endValue ) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = ( endValue ) => {
    const startValue = this.state.startValue;
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
     console.log( 'date type change', v )
     const _CType = v.target.value
     this.setState( {
       currentType: v.target.value,
     } )
     if ( _CType === 'year' ) {
       this.getYCData()
      } else if ( _CType === 'month' ) {
        this.getMCData()
     } else if ( _CType === 'day' ) {
      this.getDCData()
   }
  }

  getYCData=( v ) => {
    const { yc_startYear, yc_endYear } = this.state;
    // const _days = moment( `${dc_year}-${dc_month}`, 'YYYY-MM' ).daysInMonth()
    // this.setState( { monthDays: _days }, () => this.getDayChartData() )
    const req = {
      startTime: `${yc_startYear}/1/1 00:00:00`,
      endTime: `${yc_endYear}/12/30 23:00:00`,
      type: 'year',
    }
    this.props.dispatch( fetchEGBarGraph( req ) )
    // console.log( 'setyear', dc_month, dc_year, _days )
  }

  getMCData=( ) => {
    const { mc_year, yc_startYear, yc_endYear } = this.state;
    // const _days = moment( `${dc_year}-${dc_month}`, 'YYYY-MM' ).daysInMonth()
    // this.setState( { monthDays: _days }, () => this.getDayChartData() )
    const req = {
      startTime: `${mc_year}/1/1 00:00:00`,
      endTime: `${mc_year}/12/30 23:00:00`,
      type: 'month',
    }
    this.props.dispatch( fetchEGBarGraph( req ) )
    // console.log( 'setyear', dc_month, dc_year, _days )
  }

  getDCData=( v ) => {
    const { dc_month, dc_year } = this.state;
    const _days = moment( `${dc_year}-${dc_month}`, 'YYYY-MM' ).daysInMonth()
    this.setState( { monthDays: _days }, () => this.getDayChartData() )
    console.log( 'setyear', dc_month, dc_year, _days )
  }

  getDayChartData() {
    const { dc_month, dc_year, monthDays } = this.state;

    const req = {
      startTime: `${dc_year}/${dc_month}/1 00:00:00`,
      endTime: `${dc_year}/${dc_month}/${monthDays} 23:00:00`,
      type: 'day',
    }
    this.props.dispatch( fetchEGBarGraph( req ) )
  }

  render() {
    const {
      startValue, endValue, endOpen, currentType, yearlist, mc_year, dc_year, dc_month, monthDays, yc_startYear, yc_endYear,
    } = this.state;
    console.log( 'yc_startYear', yc_startYear )
    const DateYear = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
        <span>
          <Select defaultValue={yc_startYear} style={{ width: 80 }} onChange={v => this.setState( { yc_startYear: v } )}>
            {
              yearlist.map( ele => <Option value={ele} key={ele}>{ele}</Option> )
            }
          </Select>
        </span>~
        <Select defaultValue={yc_endYear} style={{ width: 80, marginLeft: 5 }} onChange={v => this.setState( { yc_endYear: v } )}>
          {
            yearlist.map( ele => <Option value={ele} key={ele}>{ele}</Option> )
          }
        </Select>
        </span>
      <span className={styles.sBt} onClick={() => this.getYCData()}>确定</span>
      </div>
    )
    const DateMonth01 = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
          {/* <RangePicker
            defaultPickerValue={[moment( '2019/01/01', dateFormat ), moment( '2019/04/01', dateFormat )]}
            // defaultValue={[moment( '2019/01/01', dateFormat ), moment( '2019/04/01', dateFormat )]}
          /> */}
          <MonthPicker
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={startValue}
            placeholder="Start"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />~
          <MonthPicker
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
      <span className={styles.sBt}>确定</span>
      </div>
    )
    const DateMonth = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
        <Select defaultValue={mc_year} style={{ width: 120 }} onChange={v => this.setState( ( { mc_year: v } ) )}>
          {
            yearlist.map( ele => <Option value={ele} key={ele}>{ele}</Option> )
          }
        </Select>
        </span>
      <span className={styles.sBt} onClick={() => this.getMCData()}>确定</span>
      </div>
    )
    const DateWeek = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
          {/* <RangePicker
            defaultPickerValue={[moment( '2019/01/01', dateFormat ), moment( '2019/04/01', dateFormat )]}
            // defaultValue={[moment( '2019/01/01', dateFormat ), moment( '2019/04/01', dateFormat )]}
          /> */}
          <WeekPicker
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={startValue}
            placeholder="Start"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />~
          <WeekPicker
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
      <span className={styles.sBt}>确定</span>
      </div>
    )
    const DateDay01 = (
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
          />~
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
      <span className={styles.sBt}>确定</span>
      </div>
    )
    const DateDay = (
      <div>
        <span><span style={{ marginRight: 12 }}>日期:</span>
        <span>
          <Select defaultValue={dc_year} style={{ width: 80 }} onChange={v => this.setState( { dc_year: v } )}>
            {
              yearlist.map( ele => <Option value={ele} key={ele}>{ele}</Option> )
            }
          </Select>
        </span>年
        <Select defaultValue={dc_month} style={{ width: 80, marginLeft: 5 }} onChange={v => this.setState( { dc_month: v } )}>
          <Option value="1" key="1">1</Option>
          <Option value="2" key="2">2</Option>
          <Option value="3" key="3">3</Option>
          <Option value="4" key="4">4</Option>
          <Option value="5" key="5">5</Option>
          <Option value="6" key="6">6</Option>
          <Option value="7" key="7">7</Option>
          <Option value="8" key="8">8</Option>
          <Option value="9" key="9">9</Option>
          <Option value="10" key="10">10</Option>
          <Option value="11" key="11">11</Option>
          <Option value="12" key="12">12</Option>
        </Select>月
        </span>
      <span className={styles.sBt} onClick={() => this.getDCData()}>确定</span>
      </div>
    )

    return (
      <div style={{ padding: 12, background: 'white' }}>
        <div style={{ margin: '15px 0' }}>
          <Row>
            <Col span={4}>
              <RadioGroup defaultValue="month" size="middle" onChange={this.handleChange} >
                  <RadioButton value="year">按年</RadioButton>
                  <RadioButton value="month">按月</RadioButton>
                  {/* <RadioButton value="week">按周</RadioButton> */}
                  <RadioButton value="day">按日</RadioButton>
              </RadioGroup>
            </Col>
            <Col span={12} />
            <Col span={8}>
              {
                currentType === 'year' ? DateYear :
                currentType === 'month' ? DateMonth :
                currentType === 'day' ? DateDay : ''
              }
            </Col>
          </Row>
        </div>
        {/* <span style={{ fontSize: 25 }}>-</span> */}
        <Spin spinning={this.props.Report.loading}>
          {
            currentType === 'year' ? <Year startYear={yc_startYear} endYear={yc_endYear} /> :
            currentType === 'month' ? <Month /> :
            currentType === 'day' ? <Day days={monthDays} month={dc_month} /> : ''
          }
        </Spin>
      </div>
    )
  }
}
