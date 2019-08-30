import { message } from 'antd'
import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils'
import moment from 'moment'


const initData = {
  list: [],
  egDodgeChartYear: [],
  egDodgeChartMonth: [],
  egDodgeChartDay: [],
  egTableDataYear: [],
  egTableDataMonth: [],
  egTableDataDay: [],
  abLineChart: [],
}
 const Report = handleActions( {
  'request auth group list'( state, action ) {
    return { ...state, loading: true }
  },
  'succReceiveEGTimeGr'( state, action ) {
    const { req, res } = action.payload
    const list = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    // console.log( '收到报表数据:', res )
    return {
        ...state, list, loading: false,
    }
  },
  'requestEGBarGr'( state, action ) {
    state.egDodgeChartDay = []
    state.egDodgeChartMonth = []
    return { ...state, loading: true }
  },
  'succReceiveEGBarGr'( state, action ) {
    const { req, res } = action.payload
    const { chartData, tableData } = res.data
    console.log( '收到报表数据:', res )
    const list = [];
    let len
    let time
    const Type = req[0].type
    const _fDate = Type === 'year' ? 'YYYY' : Type === 'month' ? 'M' : Type === 'day' ? 'M/DD' : ''
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    chartData.forEach( ( ele ) => {
      len = ele.date && ( ele.date.length || 0 );
      const obj = {
        name: ele.powerName,
      }
      // list.push( { name: ele.powerName } )
      for ( let index = 0; index < len; index++ ) {
        time = moment( ele.date[index] ).format( _fDate );
        // time = time.toString()
        obj[time] = Math.ceil( ele.power[index] )
        // obj[time] = 1400
      }
      list.push( obj )
    } );
    if ( req[0].type === 'year' ) {
      state.egDodgeChartYear = list
      state.egTableDataYear = tableData
    } else if ( req[0].type === 'month' ) {
      state.egDodgeChartMonth = list
      state.egTableDataMonth = tableData
    } else if ( req[0].type === 'day' ) {
      state.egDodgeChartDay = list
      state.egTableDataDay = tableData
    }
    // console.log( '收到报表数据:', action, list )
    return {
        ...state, loading: false,
    }
  },
  'requestABLineGr'( state, action ) {
    // state.egDodgeChartDay = []
    // state.egDodgeChartMonth = []
    return { ...state, loading: true }
  },
  'succReceiveABLineGr'( state, action ) {
    const { req, res } = action.payload
    // state.egDodgeChartDay = []
    // state.egDodgeChartMonth = []
    const list = res.data.map( ele =>
        // Object.assign(time:)
        // ele.time = moment( ele.time ).format( 'MM/DD HH:mm:ss' );
         ( {
          deviceUUID: ele.deviceUUID,
          time: moment( ele.time ).format( 'MM/DD HH:mm:ss' ),
          humidity: ele.humidity.toFixed( 2 ),
          temperature: ele.temperature.toFixed( 2 ),
        } ) )
    // console.log( 'succReceiveABLineGr', res, list )
    state.abLineChart = list
    return { ...state, loading: true }
  },

}, initData )

export default Report
