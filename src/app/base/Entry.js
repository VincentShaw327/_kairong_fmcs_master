import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import GlobalFooter from 'components/ant-design-pro/GlobalFooter';
import asyncComponent from 'utils/load';
import Exception from 'components/ant-design-pro/Exception';
import moment from 'moment'
import mqtt from 'mqtt'
import { resMqtt } from 'actions/common'
// import THeader from './Header/THeader';
import THeader from './header';
import TTabMain from './TTabMain';
import RouteList from '../Routes'
import THome from '../pages/THome/THome';
// import { THome } from '../Routes';
import Nav from './nav';

// const { Home } = routeConfig
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
let client;
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

    componentDidMount() {
        this.subscribeMQTT();
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

    componentWillUnmount() {
        client.close();
        console.log( 'WillUnmount', client )
    }

    componentWillReceiveProps() {

    }

    subscribeMQTT() {
        // mqtt消息连接建立
        // client = mqtt.connect( 'ws://192.168.3.231:8083/mqtt' );
        // client = mqtt.connect( 'ws://47.91.154.238:8083/mqtt' );
        // client = mqtt.connect( 'ws://47.244.41.148:8083/mqtt' );
        
        let url=window.baseURL&&(window.baseURL.mqtt||'ws://47.244.41.148:8083/mqtt')
        client = mqtt.connect( url );
        // client = mqtt.connect( 'ws://192.168.0.175:8083/mqtt' );

        client.on( 'connect', () => {
            // 订阅消息
            console.log( '连接成功' )
            // client.subscribe( 'KAI-RONG' )
            // client.subscribe( 'SOOT_TEST_ANDROID_MSG_TO_SERVER' )
            client.subscribe( 'V1/Dev/10002/KanBan1' )
        } )
        client.on( 'message', ( topic, payload ) => {
            // 接收到mqtt消息推送数据
            const mqttData = JSON.parse( payload );
            console.log( '接收到MQTT信息', topic, mqttData );
            this.props.dispatch( resMqtt( { mqttData } ) );
        } );
        client.on( 'offline', () => console.log( 'mqtt服务离线' ) );
        client.on( 'reconnect', () => console.log( '尝试重连' ) );
        client.on( 'error', err => console.log( '发生错误', err ) );
        /* const autoPub=setInterval(() => {
            client.publish('inject_workshop',{"first":{"deviceState":{"run":77,"fault":5,"debug":11,"standby":4,"list":[{"item":"待机","count":4},{"item":"调膜","count":11},{"item":"故障","count":5},{"item":"运行","count":60}]},"unqualifiedList":[{"item":"表面起膜","count":23},{"item":"飞边","count":21},{"item":"未填满","count":17},{"item":"黑斑","count":13},{"item":"变形","count":13},{"item":"破裂","count":13}],"progressList":[{"key":"1","device":"A01","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":254},{"key":"2","name":"冷水主机动力开关箱","device":"A02","order":2019021800,"product":"产品","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"3","name":"空压机开关箱","device":"A03","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"4","name":"制氮机配电柜","device":"A04","order":2019021800,"product":"鼠标外壳","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"5","name":"纯水机房配电柜","device":"A05","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"6","name":"1F生产设备01","device":"A06","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"7","name":"1F生产设备02","device":"A07","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406},{"key":"8","name":"2F生产设备01","device":"A08","order":2019021800,"product":"-","capacity":23,"progress":47,"completed":234,"plan":4000,"rest":3406}],"achieveList":[{"name":"plan","3.1":18.9,"3.2":28.8,"3.3":39.3,"3.4":81.4,"3.5":47,"3.6":60.3,"3.7":24,"3.8":35.6,"3.9":35.6,"3.10":35.6},{"name":"actual","3.1":12.4,"3.2":23.2,"3.3":34.5,"3.4":99.7,"3.5":52.6,"3.6":35.5,"3.7":37.4,"3.8":42.4,"3.9":42.4,"3.10":42.4}],"qualifiedList":[{"month":"3.1","qualified":17,"unqualified":15.9},{"month":"3.2","qualified":16.9,"unqualified":14.2},{"month":"3.3","qualified":19.5,"unqualified":15.7},{"month":"3.4","qualified":14.5,"unqualified":8.5},{"month":"3.5","qualified":18.4,"unqualified":11.9},{"month":"3.6","qualified":21.5,"unqualified":15.2},{"month":"3.7","qualified":25.2,"unqualified":17},{"month":"3.8","qualified":26.5,"unqualified":16.6},{"month":"3.9","qualified":23.3,"unqualified":14.2}]}})
        }, 2000); */
        // console.log( 'mqData_first', mqttData )
        /* const autoPub = setInterval( () => {
            client.publish( 'inject_workshop', JSON.stringify( mqData_first() ) );
            client.publish( 'machine_monitor', JSON.stringify( mqData_second() ) );
            client.publish( 'device_maintain', JSON.stringify( mqData_third() ) );
            client.publish( 'central_feed', JSON.stringify( mqData_fouth() ) );
        }, 2000 ); */
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
        // console.log( 'authority', Routes )
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
                                <div style={{ minHeight: 830, padding: 25 }}>
                                    <RouteList />
                                </div>
                                {/* <TFooter /> */}
                            </Content>
                            <Footer style={{ padding: 0 }}>
                                <GlobalFooter
                                  className="globalFooter"
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
