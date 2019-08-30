import React, { Component, Fragment } from 'react'
import  './index.css'
import classnames from 'classnames'

class TButton extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    Mode(){
        let {type='default',txt='默认值' ,style}=this.props
        return <span  className={classnames({
            btn:true,
            [type]:true
          })} style={style} >{txt}</span>
    }

    render() {
        let {type='default',txt='默认值' ,style}=this.props
        if(type==='state'){

        }
        return (
            <span  className={classnames({
                btn:true,
                [type]:true
              })} style={style} >{txt}</span>
        )
    }
}

class Mode extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    Mode(){
        let {type='default',txt='默认值' ,style}=this.props
        return <span  className={classnames({
            btn:true,
            [type]:true
          })} style={style} >{txt}</span>
    }

    render() {
        let {type='auto' ,style}=this.props
        let txt=type==="auto"?'自动':type==='manual'?'手动':''
        return (
            <span  className={classnames({
                mode:true,
                [type]:true
              })} style={style} >{txt}</span>
        )
    }
}

class DevState extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        let {type='stop' ,style}=this.props
        let txt
        switch (type) {
            case 'run':
            txt="启动"
                break;
            case 'err':
            txt="故障"
                break;
            case 'stop':
            txt="停止"
                break;
            case 'off':
            txt="离线"
                break;
            default:
                txt="未知"
                break;
        }

        return (
            <span  className={classnames({
                devState:true,
                [type]:true
              })} style={style} >{txt}</span>
        )
    }
}

class SysState extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        let {type='stop' ,style}=this.props
        let txt
        switch (type) {
            case 'run':
            txt="启动"
                break;
            case 'err':
            txt="故障"
                break;
            case 'stop':
            txt="停止"
                break;
            case 'off':
            txt="离线"
                break;
            default:
                txt="未知"
                break;
        }

        return (
            <span  className={classnames({
                sysState:true,
                [type]:true
              })} style={style} >{txt}</span>
        )
    }
}

export {
    Mode,
    DevState,
    SysState
}

export default TButton;
