export const Energy = {
    path: '/scada/energy',
    component: props => import( /* webpackChunkName: "energy" */'../pages/energy' ),
}
export default Energy
