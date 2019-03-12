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

export const ab_f_report = {
    path: '/report/ambience/first',
    component: () => import( /* webpackChunkName: "ab_f_report" */ '../pages/report/ambience/first' ),
}

export const ab_s_report = {
    path: '/report/ambience/second',
    component: () => import( /* webpackChunkName: "ab_s_report" */ '../pages/report/ambience/second' ),
}

export const ab_t_report = {
    path: '/report/ambience/third',
    component: () => import( /* webpackChunkName: "ab_t_report" */ '../pages/report/ambience/third' ),
}

export const dev_err_report = {
    path: '/report/error',
    component: () => import( /* webpackChunkName: "dev_err_report" */ '../pages/report/error' ),
}
