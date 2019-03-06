/*
**报表模块
*/


export const eg_m_report = {
    path: '/report/energy/month',
    component: () => import( /* webpackChunkName: "eg_m_report" */ '../pages/report/energy/month' ),
}

export const eg_w_report = {
    path: '/report/energy/week',
    component: () => import( /* webpackChunkName: "eg_w_report" */ '../pages/report/energy/week' ),
}

export const eg_d_report = {
    path: '/report/energy/day',
    component: () => import( /* webpackChunkName: "eg_d_report" */ '../pages/report/energy/day' ),
}
