import React, { Component, Fragment } from 'react'
import styles from './index'

const DeviceState = ( {
txt, type, color, style, ...others
 } ) => {
     let bgColor
     let txColor
     let bdColor
    switch ( type ) {
        case 'running':
            bgColor = '#2b8ec0'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '运行中'
            break;
        case 'warning':
            bgColor = '#de3e3e'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '报警中'
            break;
        case 'offline':
            bgColor = '#5f5f5f'
            bdColor = '#2b8ec0'
            txColor = 'white'
            txt = '离线中'
            break;

        default:
            bgColor = 'white'
            txColor = '#393535'
            bdColor = '#d8d8d8'
            txt = '默认状态'
            break;
    }
    const initStyle = {
        color: color || txColor,
        border: 'solid 1px',
        fontSize: '1.2em',
        padding: '0.3em 0.85em',
        borderRadius: '0.3em',
        display: 'inline-block',
        borderColor: '#d8d8d8',
        background: bgColor,
    }
    const ds_styles = Object.assign( initStyle, style )
    return (
        <div style={ds_styles} >{txt}</div>
    )
}


export default DeviceState;
