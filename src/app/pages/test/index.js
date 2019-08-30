import React, { Component, Fragment } from 'react'
import { Radio,Card,Table } from 'antd';
import { connect } from 'react-redux'


@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    UserAccount: state.UserAccount,
} ) )
export default class temperature extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'first',
        }
    }

    componentDidMount() {
        // this.subscribeMQTT();
    }

    componentWillUnmount() {
        // client.close();
        // console.log( 'WillUnmount', client )
    }

    componentWillReceiveProps() {

    }

    render() {

        return (
            <Fragment>
                这是测试页面
            </Fragment>
        )
    }
}