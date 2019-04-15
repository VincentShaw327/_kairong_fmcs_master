import React, { Component, Fragment } from 'react'
import { Icon } from 'antd';
import styles from '../index.less'

const IconFont = Icon.createFromIconfontCN( {
    scriptUrl: '//at.alicdn.com/t/font_1068745_luyn7t6ete.js',
} );

const Milieu = ( obj ) => {
    const { title = '车间名称', temp = 23.4, rh = 12 } = obj
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
