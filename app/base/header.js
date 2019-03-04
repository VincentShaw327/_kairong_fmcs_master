import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { Menu, Dropdown, Button, Modal } from 'antd'

const { confirm } = Modal

// @connect((state, props) => ({ config: state.config }))
export default class Header extends Component {
  // 初始化页面常量 绑定事件方法
  constructor( props, context ) {
    super( props )
    // this.state = {}
    this.handleLogout = this.handleLogout.bind( this )
  }

  // 登出
  handleLogout() {
    const { config } = this.props
    const self = this
    confirm( {
      title: '提示',
      content: '确认退出登录吗？',
      onOk() {
        // self.props.dispatch(fetchLogout({}, (result) => {
        //   // console.log(result)
        //   if (result.status == 1) {
        //     config.staff = {}
        //     hashHistory.push('/login')
        //   } else {
        //     message.error(result.msg)
        //   }
        // }))
        hashHistory.push( '/login' )
      },
    } )
  }
  render() {
    return (
      <div style={{ padding: 12, background: 'white' }}>
        <span style={{ fontSize: 25 }}>FMCS厂务管理系统</span>
        {/* <div>FMCS厂务管理系统</div> */}
      </div>
    )
  }
}
