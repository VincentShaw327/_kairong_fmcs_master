/*
****************
*车间监控模块 */

export const TWorkshopScada = {
    path: '/scada/punch',
    component: props => import( /* webpackChunkName: "TScadaWorkShop_Auto" */'../pages/TScada/TScadaWorkShop_Auto' ),
}
export const firstFloor = {
    path: '/scada/first',
    component: props => import( /* webpackChunkName: "firstFloor" */'../pages/scada/first' ),
}
export const secondFloor = {
    path: '/scada/second',
    component: props => import( /* webpackChunkName: "secondFloor" */'../pages/scada/second' ),
}
export const thirdFloor = {
    path: '/scada/third',
    component: props => import( /* webpackChunkName: "thirdFloor" */'../pages/scada/third' ),
}
export const topFloor = {
    path: '/scada/energy',
    component: props => import( /* webpackChunkName: "energy" */'../pages/scada/energy' ),
}
export default TWorkshopScada;
