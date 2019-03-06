import * as scada from './scada'
// import * as production from './production'
// import * as mould from './mould'
// import * as materials from './materials'
// import * as device from './device'
// import * as procession from './procession'
// import * as work from './work'
// import * as mtrlloss from './mtrlloss'
// import * as quality from './quality'
// import * as maintain from './maintain'
import * as report from './report'
// import * as setting from './setting'
import * as demos from './demos'

export const Home = {
    path: '/home',
    component: () => import( /* webpackChunkName: "demo02" */ '../pages/THome/THome' ),
}
/* export{
    TWorkshopScada,
    production
} */
export default Object.assign(
    // production,
    // mould,
    // materials,
    // device,
    // procession,
    // work,
    // mtrlloss,
    // quality,
    // maintain,
    // setting,
    { Home },
    demos,
    scada,
    report,
)
