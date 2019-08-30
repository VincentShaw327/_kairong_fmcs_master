import React, { Component, Fragment } from 'react'
import { Radio,Card,Table } from 'antd';
import { connect } from 'react-redux'
// import moment from 'moment'
// import Clock from 'widgets/Clock'
import mqtt from 'mqtt'
import moment from 'moment'
import {_Temp} from 'enums'
import {Curved} from '../bizcharts/line'
import RadioButton from 'widgets/RadioButton'
import TButton ,{DevState}from 'widgets/TButton'
import Tags from 'widgets/Tags'
import { fetchABLineGraph_all } from 'actions/common'
import  './index.css'
let client;

@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    UserAccount: state.UserAccount,
} ) )
export default class temperature extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            workshopList: [
                306000,
                306001,
                306002,
                306003,
                306004,
                306005,
                306006,
                306007,
                306008,
                306009,
                306010,
                306011,
                306012,
                306013,
                306014,
                306015,
                306016,
                306017,
                306018,
                306019,
                306020,
                306021,
                306022,
                306023,
                306024,
                306025,
            ],
            startValue: moment().subtract( 1, 'days' ),
            endValue: moment(),
            currentChart:'clean',
            currentFloor:'1F',
            foorList:[
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
                /* {
                    name:'3F',
                    value:3,
                    actived:false
                }, */
            ]
        }
    }

    componentDidMount() {
        this.getLineData();
    }

    getLineData() {
        const { startValue, endValue, workshopList } = this.state;
        const req = {
          startTime: startValue.format( 'YYYY/MM/DD HH:mm:ss' ),
          endTime: endValue.format( 'YYYY/MM/DD HH:mm:ss' ),
          deviceUUID: workshopList,
        }
        this.props.dispatch( fetchABLineGraph_all( req ) )
    }


    handleFloorChange = ( e ) => {
        console.log( 'change', e )
        this.setState( { currentFloor: e.name } );
    }

    render() {
        const { view, mqttData ,foorList,currentChart,currentFloor} = this.state;
        let { abMonitorData,milieuList } = this.props.MQTTData
        const columns01 = [
            {
                title: '楼层',
                dataIndex: 'floor',
                key: 'floor',
                width: 250,
                align:'center'
                // render: text => <span>车间名称</span>,
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                align:'center',
                // width: 540,
                render: (text,record,index) => <a onClick={(e)=>this.setState({currentChart:record.enname})} style={{borderBottom: 'solid 3px #1890ff'}}>{text}</a>,
            }, /*  {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                // render: text => <a href="javascript:;">{text}</a>,
            },  */{
                title: '温度',
                dataIndex: 'temperature',
                key: 'temperature',
                align:'center'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                align:'center',
                render:(str,record)=>{
                    const {status,err}=record
                    let _type=str===200?'off':str===1?'run':str===0?'stop':'stop'
                    return <DevState type={_type} />
                }
            }
        ];
        const foor01=milieuList.filter(ele=>ele.floor==="1F")
        const foor02=milieuList.filter(ele=>ele.floor==="2F")
        const foor03=milieuList.filter(ele=>ele.floor==="3F")
        
        const {
            dlc1,dlc2,dlc3,
            dumo1,dumo2,dumo3,dumo4,dumo5,dumo6,
            anneal1,anneal2,anneal3,anneal4,anneal5,anneal6,
            warehouse,depot1,depot2,
            reserved1,reserved2,reserved3,reserved4,reserved5,
            office, oven1,oven2
        } = abMonitorData.first

        let tableData=currentFloor==='1F'?foor01:currentFloor==='2F'?foor02:currentFloor==='3F'?foor03:[];
        return (
            <Fragment>
                <Tags name="温度监控"/>
                <Card style={{textAlign:'center',marginTop:15}} className="temp-wrap">
                    <RadioButton dataSource={foorList||[]} onChange={this.handleFloorChange} />
                    <section className="temp-table-wrap">
                        <Table 
                            bordered 
                            columns={columns01} 
                            dataSource={tableData} 
                            pagination={{ hideOnSinglePage: true, pageSize: 20 }} 
                            onHeaderRow={column => {
                                return {
                                className: "temp-table-head", // 点击表头行
                                };
                            }}
                        />
                    </section>
                    <Curved width="79vw" height="28vw" data={abMonitorData.first[currentChart] || dlc1||[]} />
                </Card>
            </Fragment>
        )
    }
}