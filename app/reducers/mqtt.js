import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils'
// import moment from 'moment'
import { message } from 'antd'

const initData = {
  bomlist: [],
}

const MQTTDate = handleActions( {
  'request bom list'( state, action ) {
    return { ...state, loading: true }
  },
  'resMqttData'( state, action ) {
    // const { req, res } = action.payload
    return { ...state }
  },

}, initData )

export default MQTTDate
