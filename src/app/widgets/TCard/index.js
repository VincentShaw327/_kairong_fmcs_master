import React, { Component, Fragment } from 'react'
import styles from './index.less'
import classnames from 'classnames'
import TCircle from '../TCircle'


class TCard extends Component {
    constructor( props ) {
        super( props )
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        let {title='default',txt='默认值' ,style,unit,render,circle}=this.props

        return (
            <div className={styles.card} style={style}>
                <span className={styles.title}>{title}</span>
                
                {
                    circle?<TCircle type={txt===0?'on':'off'} />:<span className={styles.txt} >{txt.toFixed(2)}{unit}</span>
                }
                {/* <span className={styles.children} >{render()}</span> */}
            </div>
        )
    }
}

export  class TCardList extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            list:props.dataSource||[
                {
                    value:'01',
                    title:'-'
                },
                {
                    value:'02',
                    title:'--'
                },
            ]
        }
    }
    componentDidMount() {

    }

    render() {
        // let {list ,style}=this.state
        let {dataSource ,style}=this.props

        return (
            <div className={styles.cardlist} style={style}>
                {
                    dataSource.map((ele,index)=><TCard key={index} title={ele.title} txt={ele.value} unit={ele.unit} render={ele.render} circle={ele.circle} />)
                }
            </div>
        )
    }
}
export default TCard;