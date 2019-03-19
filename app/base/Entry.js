import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import GlobalFooter from 'components/ant-design-pro/GlobalFooter';
import { asyncComponent } from 'utils/load';
import Exception from 'components/ant-design-pro/Exception';
// import THeader from './Header/THeader';
import THeader from './header';
import TTabMain from './TTabMain';
import * as Routes from '../Routes'
import THome from '../pages/THome/THome';
// import { THome } from '../Routes';
import Nav from './nav';

const { Home } = Routes
// import PropTypes from 'prop-types';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
const isLogin = ( nextState, replaceState ) => {
  /* const token = sessionStorage.getItem( 'token' )
  if ( !token ) {
      replaceState( '/login' )
  } */
  let isHavelogin;
  const authority = sessionStorage.getItem( 'user_authority' );
  if ( !authority ) {
      isHavelogin = true
  } else {
      isHavelogin = false
  }
  return isHavelogin
}

@connect( ( state, props ) => ( {
  config: state.config,
  tabListResult: state.tabListResult,
} ) )
export default class TIndexPage extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            // siderTheme: false,
            // minHeight: 0,
            // maxHeight: 0,
            // maxHeight: innerHeight - 64,
            maxHeight: innerHeight - 16,
        }
    }

    componentWillMount() { }

    componentDidMount() {
        // this.setState( { maxHeight: innerHeight - 64, minHeight: innerHeight - 64 } );
        window.onresize = ( e ) => {
            // console.log('e',e);
            // console.log("innerHeight",innerHeight);
            this.setState( {
                maxHeight: innerHeight - 32,
                // minHeight: innerHeight - 64,
            } )
        }
    }
    // 二级菜单的生成
    renderLeftNav( options ) {
      const self = this
      return options.map( ( item ) => {
        if ( !item.children ) {
          return (
            // <SubMenu key={index} title={item.name}>
            <Menu.Item key={item.key ? item.key : item.url} name={item.name}>
                {item.icon ? <Icon type={item.icon} title={item.name} /> : ''}
              <span
                className="menu-name"
              >{item.name}
              </span>
            </Menu.Item>
            // </SubMenu>
          )
        }
        return (
          // <SubMenu key={`sub${index}`}
          <SubMenu key={item.key ? item.key : item.url}
            title={
              <span>
                <Icon type={item.icon} title={item.name} />
                <span className="menu-name">{item.name}</span>
              </span>}
          >
            {
              // item.url ?
                // <Menu.Item key={item.key ? item.key : item.url} name={item.name}>
                //   {/* <Icon type={item.icon} title={item.name} /> */}
                //   {/* <span className="menu-name">{item.name}</span> */}
                //   {item.name}
                // </Menu.Item> : null
            }

            {
              item.children && item.children.length > 0 ? self.renderLeftNav( item.children ) : null
            }
          </SubMenu>
        )
      } )
    }

    render() {
        console.log( 'authority', Routes )
        // const { children } = this.props
        return (
            <Layout style={{ height: '100%' }}>
                {/* <THeader handleSearch={this._child} /> */}
                <Layout>
                    <Nav {...this.props} />
                    <Scrollbars
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      autoHeight
                      autoHeightMin={500}
                    //   autoHeightMax={560}
                      autoHeightMax={this.state.maxHeight}
                      thumbMinSize={30}
                      universal
                    >
                        <Layout style={{ border: 'solid 0px' }}>
                            {/* <Content style={{ margin: '24px 16px 0',border:'solid 0px' }}> */}
                            <THeader />
                            <Content style={{ margin: '0', border: 'solid 0px' }}>
                                {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> */}
                                <div style={{ minHeight: 830, padding: 25 }}>
                                    {/* <TTabMain
                                      ref={child => this._child = child}
                                      {...this.props}
                                    /> */}
                                    {
                                        // isLogin() ? <Route
                                        //   render={() => <Redirect to={{ pathname: '/login' }} />}
                                        // /> : ''
                                    }
                                    <Switch>
                                        {
                                            Object.values( Routes.default ).map( item => ( <Route
                                              key={item.path}
                                              path={item.path}
                                                // component={item.component}
                                              render={( props ) => {
                                                    const Child = asyncComponent( item.component );
                                                    return <Child {...props} />
                                                }}
                                            /> ) )
                                        }
                                        {/* <Route path="/home" exact component={THome} /> */}
                                        <Route path="/" exact component={THome} />
                                        <Route
                                            // component={NoMatch}
                                          render={
                                                () => <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />
                                            }
                                        />
                                    </Switch>
                                </div>
                                {/* <TFooter /> */}
                            </Content>
                            <Footer style={{ padding: 0 }}>
                                <GlobalFooter
                                  className="globalFooter"
                                /*  links={[{
                                    key: 'Pro 首页',
                                    title: 'Pro 首页',
                                    href: 'http://pro.ant.design',
                                    blankTarget: true,
                                  }, {
                                    key: 'github',
                                    title: <Icon type="github" />,
                                    href: 'https://github.com/ant-design/ant-design-pro',
                                    blankTarget: true,
                                  }, {
                                    key: 'Ant Design',
                                    title: 'Ant Design',
                                    href: 'http://ant.design',
                                    blankTarget: true,
                                  }]} */
                                  copyright={
                                    <Fragment>
                                      Copyright <Icon type="copyright" />广东拓斯达科技股份有限公司
                                    </Fragment>
                                  }
                                />
                            </Footer>
                        </Layout>
                    </Scrollbars>
                </Layout>
            </Layout>
        );
    }
}

TIndexPage.propTypes = {
};
