import React, { Component, Fragment } from 'react'
import styles from './index.less'

class Tags extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const {name}=this.props
        return (
            <span className={styles.tags} >{name}</span>
        )
    }
}
export default Tags;