import React, { Component } from 'react'

export default class R_EG_Day extends Component {
  constructor( props, context ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <div style={{ padding: 12, background: 'white' }}>
        <span style={{ fontSize: 25 }}>日报,样式同月报</span>
      </div>
    )
  }
}
