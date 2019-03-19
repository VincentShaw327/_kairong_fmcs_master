import React, { Component, Fragment } from 'react'
import { Card, Radio, Button, Icon, Tag, Row, Col, message, Divider, Popconfirm } from 'antd';


import First from './floor/first'
import Second from './floor/second'
import Third from './floor/third'

export default class plate extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            view: 'first',
        }
    }

    handleSizeChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { view: e.target.value } );
    }

    render() {
        const { view } = this.state;
        return (
            <Fragment>

                <Radio.Group value={view} onChange={this.handleSizeChange} style={{ marginBottom: 16 }}>
                    <Radio.Button value="first">一楼</Radio.Button>
                    <Radio.Button value="second">二楼</Radio.Button>
                    <Radio.Button value="third">三楼</Radio.Button>
                </Radio.Group>
                {
                    view === 'first' ? <First /> : view === 'second' ? <Second /> : view === 'third' ? <Third /> : ''
                }
            </Fragment>
        )
    }
}
