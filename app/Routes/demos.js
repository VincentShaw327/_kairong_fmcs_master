//
export const demo01 = {
    path: '/demos/one',
    component: () => import( /* webpackChunkName: "demo01" */ '../pages/demos/one' ),
}
export const demo02 = {
    path: '/demos/two',
    component: () => import( /* webpackChunkName: "demo02" */ '../pages/demos/two' ),
}
