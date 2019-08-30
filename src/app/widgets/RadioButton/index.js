import React, { Component, Fragment } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import  './index.css'

class RadioButton extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            list:props.dataSource||[
                {
                    name:'1F',
                    value:1,
                    actived:true
                },
                {
                    name:'2F',
                    value:2,
                    actived:false
                },
                {
                    name:'3F',
                    value:3,
                    actived:false
                },
            ]
        }
    }
    componentDidMount() {
        let time

    }

    handleclick=(ele)=>{
        let { list }=this.state;
        console.log('ele',ele)
        list.forEach(e=>{
            if(ele.value===e.value){
                e.actived=true
            }else{
                e.actived=false;
            }
        });
        this.setState({list})
        this.props.onChange&&this.props.onChange(ele)
    }

    render() {
        const {list}=this.state;
        return (
            <div className="wrap">
                {
                    list.map((ele,index)=><span key={index} className={classnames({
                        actived:ele.actived
                      })} onClick={()=>this.handleclick(ele)}>{ele.name}</span>)
                }
            </div>
        )
    }
}
export default RadioButton;
