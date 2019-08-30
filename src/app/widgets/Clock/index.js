import React, { Component, Fragment } from 'react'
import moment from 'moment'
import styles from './index.less'

class Clock extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            time: moment().format( 'YYYY-MM-DD HH:mm:ss' ),
        }
    }
    componentDidMount() {
        let time
        setInterval( () => {
            time = moment().format( 'YYYY-MM-DD HH:mm:ss' )
            this.setState( { time } )
        }, 1000 )
    }

    render() {
        return (
            <span className={styles.clock} >{this.state.time}</span>
        )
    }
}
export default Clock;
