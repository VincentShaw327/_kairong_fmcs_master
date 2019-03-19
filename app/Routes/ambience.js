export const Plate = {
    path: '/ambience/plate',
    component: () => import( /* webpackChunkName: "Plate" */ '../pages/ambience/plate' ),
}
export const Device = {
    path: '/ambience/device',
    component: () => import( /* webpackChunkName: "Device" */ '../pages/ambience/device' ),
}
export default Plate
