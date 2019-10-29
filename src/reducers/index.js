import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'


import tabListResult from './tabList'

import {
  loginResponse, Breadcrumb,
} from './common'

import Report from './report'
/* import {
  UserAccount,
  UserGroup,
  UserAuth,
  UserRole,
} from './user' */

// import { AuthGroup, AuthCategory } from './auth'

import MQTTData from './mqtt'

const rootReducer = combineReducers( {
    routing,
    config: ( state = {} ) => state,
    tabListResult,

    loginResponse,
    Breadcrumb,

    // device,
    // deviceModel,
    // deviceType,
    // deviceBrand,
    // productOrder,
    // productTask,
    // productJob,
    // productDist,
    // Feeding,

    // UserAccount,
    // UserGroup,
    // UserAuth,
    // UserRole,

    // AuthGroup,
    // AuthCategory,
    MQTTData,
    Report,
} );

export default rootReducer;