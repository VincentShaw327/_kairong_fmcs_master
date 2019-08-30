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
import 'style/table.css'

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
            selectedPCW:props.MQTTData.PCWSysList[0]||{},
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

    togglePCW=(v)=>{
        console.log('toggleCabinet',v)
        this.setState({selectedPCW:v})
    }

    render() {
        const {  selectedPCW } = this.state;
        let { PCWSysList } = this.props.MQTTData
        const {parameters,deviceList,state,devuuid}=selectedPCW
        const columns = [
            {
                title: '设备名称',
                dataIndex: 'name',
                key: 'name',
                width: 280,
                align:'center'
            },
            {
                title: '设备编号',
                dataIndex: 'id',
                key: 'id',
                align:'center'
                // width: 540,
            },{
                title: '运行模式',
                dataIndex: 'mode',
                key: 'mode',
                align:'center',
                render:(str,record)=>{
                    return <Mode type={str===0?'manual':str===1?'auto':'stop'} />
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
                <Tags name="PCW系统"/>
                <Card className={styles.card} >
                    <section className={styles.header}>
                        <div className={styles.sysNum}>
                            <div className={styles.title}>系统编号：</div>
                            <TRadio data={PCWSysList||[]} onChange={this.togglePCW} default={devuuid}/>
                        </div>
                        <div>系统状态：<SysState type={sys_State} style={{float:'right',marginRight:'3vw'}}/></div>
                        <div>系统参数：</div>
                    </section>
                    <section style={{marginBottom:25}}>
                        <TCardList dataSource={parameters||[]}/>
                    </section>
                </Card>
                <Card style={{marginTop:18}}><span style={{fontSize:'2.5em'}}>设备运行状态：</span>
                    <Table bordered columns={columns} dataSource={deviceList||[]} pagination={{ hideOnSinglePage: true, pageSize: 20 }} />
                </Card>
            </Fragment>
        )
    }
}