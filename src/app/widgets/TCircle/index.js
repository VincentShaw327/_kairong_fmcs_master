import React, { Component, Fragment } from 'react'
import styles from './index.less'

class TCircle extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const {type='default',value}=this.props
        return (
            <span className={styles[type]} />
        )
    }
}
export default TCircle;