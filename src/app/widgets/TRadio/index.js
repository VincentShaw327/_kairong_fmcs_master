import React, { Component, Fragment } from 'react'
import './index.css'
import classnames from 'classnames'

class TRadio extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            defaultValue:props.default||0,
            list:props.data||[]
        }
    }

    componentDidMount() {

    }

    componentWillUnmount(){
        let { list }=this.state;
        list.forEach(e=>e.actived=false)
        this.setState({list})
    }

    handleclick=(ele)=>{
        let { list }=this.state;
        let val
        console.log('ele',ele)
        list.forEach(e=>{
            if(ele.devuuid===e.devuuid){
                e.actived=true
                val=e.name
            }else{
                e.actived=false;
            }
        });
        this.setState({list,defaultValue:val})
        this.props.onChange&&this.props.onChange(ele)
    }

    render() {
        let {list,defaultValue}=this.state
        const {style}=this.props

        return (
            <div className="tradio-wrap" style={style}>
                {
                    list.map(ele=>
                        <div 
                            key={ele.devuuid}
                            className={classnames({
                                item:true,
                                active:ele.actived||(defaultValue===ele.devuuid)
                            })}
                            onClick={()=>this.handleclick(ele)}>
                            {ele.name}
                        </div>
                    )
                }
            </div>
        )
    }
}
export default TRadio;