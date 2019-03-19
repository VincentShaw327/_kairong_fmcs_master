import * as scada from './scada'
import * as report from './report'
import * as ambience from './ambience'
// import * as setting from './setting'

export const Home = {
    path: '/home',
    component: () => import( /* webpackChunkName: "home" */ '../pages/THome/THome' ),
}
export default Object.assign(
    { Home },
    ambience,
    scada,
    report,
)
