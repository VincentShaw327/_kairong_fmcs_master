import React, { Component, Fragment } from 'react'
import { Radio,Card,Table,Row,Col } from 'antd';
import { connect } from 'react-redux'
// import moment from 'moment'
// import Clock from 'widgets/Clock'
import mqtt from 'mqtt'
import {_Temp} from 'enums'
import {Curved} from '../bizcharts/line'
import Tags from 'widgets/Tags'
import TCard ,{TCardList}from 'widgets/TCard'
import TButton,{Mode,DevState,SysState} from 'widgets/TButton'
import TRadio from 'widgets/TRadio'
import styles from './index.less'
// import 'style/table.css'
import './index.css'


@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
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
        const { view, mqttData } = this.state;
        let { abMonitorData,milieuList ,cyclePump} = this.props.MQTTData
        const {parameters,deviceList,state}=cyclePump
        const columns = [
            {
                title: '设备名称',
                dataIndex: 'name',
                key: 'name',
                width: 250,
                align:'center'
                // render: text => <span>车间名称</span>,
            },
            {
                title: '设备编号',
                dataIndex: 'id',
                key: 'id',
                align:'center'
                // width: 540,
                // render: text => <span>车间名称</span>,
            },{
                title: '运行模式',
                dataIndex: 'mode',
                key: 'mode',
                align:'center',
                render:str=>{
                    return <Mode type={str===1?'auto':'manual'} />
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                align:'center',
                // render:str=><span>{_Temp.getDescFromValue(str)}</span>
                render:(str,record)=>{
                    const {state,err}=record
                    let _type=err===1?'err':str===1?'run':str===0?'stop':'stop'
                    return <DevState type={_type} />
                }
            }
        ];

        let sys_State=state===1?'run':state===2?'stop':'off'
        return (
            <Fragment>
                <Tags name="冷却/冷冻水系统"/>
                <Card className={styles.card} >
                    <section className={styles.header}>
                        <div>系统编号：<TButton txt="1AC01_1#" style={{padding: '5px 25px'}}/></div>
                        <div>系统状态：<SysState type={sys_State} style={{float:'right',marginRight:'3vw'}}/></div>
                        <div>系统参数：</div>
                    </section>
                    <section style={{marginBottom:25}}>
                        <TCardList dataSource={parameters}/>
                    </section>
                </Card>
                <Card style={{marginTop:18}}><span style={{fontSize:'2.5em'}}>设备运行状态：</span>
                    <Table 
                    bordered 
                    onHeaderRow={record => ({className:'cycle-header'})}
                    onRow={record => ({className:'cycle-row'})}
                    columns={columns} dataSource={deviceList||[]} pagination={{ hideOnSinglePage: true, pageSize: 20 }} />
                </Card>
            </Fragment>
        )
    }
}