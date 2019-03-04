/* eslint no-restricted-globals: ["off", "innerHeight"] */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { updateTabList } from 'actions/tabList';
import { updateBreadcrumbList } from 'actions/common';
// import LOGO from '../images/T-3.png';
// import LOGO from '../images/_TOP-STAR-LOGO.png';
import LOGO from '../images/logo.png';
// import LOGO from '../images/_TOP-STAR-LOGO_01.jpg';
// import LOGO from '../images/_TOP-STAR-LOGO_02.jpg';

const { SubMenu } = Menu;
const { Sider } = Layout;

@connect( ( state, props ) => ( { tabList: state.tabListResult } ) )
export default class LeftNav extends Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
          // siderTheme: false,
          // minHeight: 0,
          // maxHeight: 0,
          maxHeight: innerHeight - 64,
          // minHeight: innerHeight - 64,
        }
    }

    componentDidMount() {
      // this.setState( { maxHeight: innerHeight - 64, minHeight: innerHeight - 64 } );
      window.onresize = ( e ) => {
          // console.log( 'e', e );
          // console.log( 'innerHeight', innerHeight );
          this.setState( {
              maxHeight: innerHeight - 64,
              minHeight: innerHeight - 64,
          } )
      }
      // this.props.config.nav.map( ( item ) => {
      //   console.log( 'item', item )
      // } )
    }

    THandleClick = ( e ) => {
      this.props.history.push( e.key )
      // console.log( 'menu clicked', e )
      this.props.dispatch( updateTabList( { title: e.item.props.name, content: '', key: e.key } ) )
      this.props.dispatch( updateBreadcrumbList( { title: e.item.props.name, href: e.key } ) )
    }

    // handleopen =e => console.log( 'opened', e )

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
        return (
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            // onCollapse={( collapsed, type ) => { console.log( collapsed, type ); }}
          >
            <div style={{ padding: '5px 20px' }}>
              <img src={LOGO} alt="" style={{ width: '100%' }} />
            </div>
            {/* <div style={{ background: `url(${LOGO}) no-repeat`, backgroundSize: '200px 85px', height: 96 }} /> */}
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              autoHeight
              autoHeightMin={500}
              autoHeightMax={this.state.maxHeight}
              thumbMinSize={30}
              universal
            >
                <Menu
                  // theme="light"
                  theme="dark"
                  mode="inline"
                  selectedKeys={[this.props.tabList.activeKey]}
                  defaultSelectedKeys={['4']}
                  onOpenChange={this.handleopen}
                  onClick={this.THandleClick}
                >
                    {
                        this.renderLeftNav( this.props.config.nav || [] )}
                </Menu>
            </Scrollbars>
          </Sider>
        )
    }
}
