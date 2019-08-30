import React, { Component, Fragment } from 'react'
import { Icon } from 'antd';
import styles from '../index.less'

const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );

const Milieu = ( obj ) => {
    const {
        title = '', data, UUID,
    } = obj
    let temp;
    let rh;
    if ( data && UUID ) {
        const item = data.find( ele => ele.UUID === parseInt( UUID, 10 ) )
        // console.log( '当前item', UUID, item, data )
        if ( item ) {
            temp = item.temperature
            rh = item.humidity
        }
    } else {
        temp = 23.4,
        rh = 12
    }
    return (
        <Fragment>
            <span className={styles.title}>{title}</span>
            <div className={styles.parameter}>
                <div>
                    <IconFont className={styles.icon} type="icon-wendu" />
                    <span className={styles.num}>{temp}</span>
                    <span className={styles.unit}>℃</span>
                </div>
                <div>
                    <IconFont className={styles.icon} type="icon-humidity" />
                    <span className={styles.num}>{rh}</span>
                    <span className={styles.unit}>RH%</span>
                </div>
            </div>
        </Fragment>
    )
};

export default Milieu
