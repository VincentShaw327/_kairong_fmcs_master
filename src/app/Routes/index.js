import React, { Component, Fragment } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Exception from 'components/ant-design-pro/Exception';
import asyncComponent from 'utils/load';
import * as scada from './scada'
import * as report from './report'
import * as ambience from './ambience'
import * as energy from './energy'
import THome from '../pages/THome/THome'
// import * as setting from './setting'

export const Home = {
    path: '/home',
    component: () => import( /* webpackChunkName: "home" */ '../pages/THome/THome' ),
}
export const Plate = {
    path: '/ambience/plate',
    component: () => import( /* webpackChunkName: "Plate" */ '../pages/temperature' ),
}
export const Energy = {
    path: '/scada/energy',
    component: props => import( /* webpackChunkName: "energy" */'../pages/energy' ),
}
export const Temperature = {
    path: '/temperature',
    component: props => import( /* webpackChunkName: "temperature" */'../pages/temperature' ),
}
export const Cycle = {
    path: '/cycle',
    component: props => import( /* webpackChunkName: "cycle" */'../pages/cycle' ),
}
export const Cabinet = {
    path: '/cabinet',
    component: props => import( /* webpackChunkName: "cabinet" */'../pages/cabinet' ),
}
export const pump = {
    path: '/pcw',
    component: props => import( /* webpackChunkName: "pump" */'../pages/pump' ),
}
export const Filtration = {
    path: '/ffu',
    component: props => import( /* webpackChunkName: "filtration" */'../pages/filtration' ),
}

 const routeConfig = Object.assign(
    { 
        Home ,
        Plate,
        Energy,
        Temperature,
        Cycle,
        Cabinet,
        pump,
        Filtration,
    },
    report,
    // ambience,
    // energy,
    // scada,
)
// export default routeConfig

export default class RouteList extends Component {
    state = { }
    render() {
        return (
            <Switch>
            {
                Object.values( routeConfig ).map( item => ( <Route
                  key={item.path}
                  path={item.path}
                    // component={item.component}
                  render={( props ) => {
                    //   console.log( 'route item', item )
                        const Child = asyncComponent( item.component );
                        return <Child {...props} />
                    }}
                /> ) )
            }
            <Route path="/" exact component={THome} />
            {/* <Route path="/" exact component={THome} /> */}
            <Route
                // component={NoMatch}
              render={
                    () => <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />
                }
            />
            </Switch>
        );
    }
}
