import React, { Component, Fragment } from 'react'
import TweenOne from 'rc-tween-one';
import classNames from 'classnames/bind'
import styles from './index.less'

const cx = classNames.bind( styles );
class Asider extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            visible: false,
            hidden: true,
            paused: false,
            reverse: false,
        }
    }

    componentDidMount() {
        window.addEventListener( 'click', () => {
            this.mouseLeave()
        } )
    }

    mouseEnter=( e ) => {
        console.log( '鼠标进入', e );
        e.stopPropagation();

        this.setState( {
            visible: true,
            hidden: false,
            paused: false,
            reverse: true,
        } )
        // show.visible = true; show.hidden = false
    }

    mouseLeave=( e ) => {
        console.log( '鼠标进入', e );
        this.setState( {
            visible: false,
            hidden: true,
            paused: false,
            reverse: false,
        } )
        /* setTimeout( () => {
            this.setState( {
                visible: false,
                hidden: true,
            } )
        }, 3000 ); */
    }

    render() {
        console.log( 'look styles', styles )
        const { visible, hidden } = this.state
        const { children, title } = this.props
        let { btn } = this.props
        if ( !btn ) {
            btn = {
                txt: '按钮',
            }
        }
        const className = cx( { asider: true } )
        const _header = (
            <header className={styles.header}>
                <span >{title || '这是标题'}</span>
            </header>
        )
        // const className = cx( { asider: true, visible: visible, hidden: hidden } )
        // onMouseOverCapture={e => this.mouseEnter( e )} onMouseLeave={e => this.mouseLeave( e )}
        return (
            <TweenOne
              paused={this.state.paused}
              reverse={this.state.reverse}
              animation={{
                right: 0,
                duration: 500,
              }}
              style={{ zIndex: 999, right: '20vw', position: 'absolute' }}
            >
                <div className={className} onClick={e => this.mouseEnter( e )}>
                    <div className={styles.btn} onClick={e => this.mouseEnter( e )} >
                        <span className={styles.title}>{btn.txt || '这是按钮'}</span>
                    </div>
                        {title ? _header : ''}
                        {children}
                </div>
            </TweenOne>
        )
    }
}

export default Asider;
