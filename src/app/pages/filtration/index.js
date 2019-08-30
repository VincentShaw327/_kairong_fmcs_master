import React, { Component, Fragment } from 'react'
import { Radio,Card,Table,Row,Col } from 'antd';
import { connect } from 'react-redux'
// import moment from 'moment'
// import Clock from 'widgets/Clock'
import mqtt from 'mqtt'
import {_Temp} from 'enums'
import {Curved} from '../bizcharts/line'
import Tags from 'widgets/Tags'
import TButton,{Mode,DevState,SysState} from 'widgets/TButton'
import TCard from 'widgets/TCard'
import TRadio from 'widgets/TRadio'
import styles from './index.less'
import 'style/table.css'

let client;

@connect( ( state, props ) =>
    ( {
    MQTTData: state.MQTTData,
    UserAccount: state.UserAccount,
} ) )
export default class ffu extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            selectedFFU:props.MQTTData.FFUSysList[0]||{},
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

    toggleFFU=(v)=>{
        console.log('toggleCabinet',v)
        this.setState({selectedFFU:v})
    }

    render() {
        const {  selectedFFU } = this.state;
        const {deviceList,  state,devuuid } = selectedFFU;
        let { FFUSysList } = this.props.MQTTData
        const columns = [
            {
                title: '设备名称',
                dataIndex: 'name',
                key: 'name',
                width: 250,
                align:'center'
            },
            {
                title: '设备编号',
                dataIndex: 'id',
                key: 'id',
                align:'center'
                // width: 540,
            },/* {
                title: '运行模式',
                dataIndex: 'mode',
                key: 'mode',
                align:'center',
                render:(str,record)=>{
                    return <Mode type={record.state===0?'stop':str===1?'auto':'manual'} />
                }
            }, */ {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                align:'center',
                // render:str=><span>{_Temp.getDescFromValue(str)}</span>
                render:str=>{
                    let _type=str===0?'stop':str===1?'run':'stop'
                    return <DevState type={_type} />
                }
            }
        ];
        let sys_State=state===1?'run':state===2?'stop':'off'
       
        return (
            <Fragment>
                <Tags name="FFU系统"/>
                <Card className={styles.card} >
                    <section className={styles.header}>
                        <div className={styles.sysNum}>
                            <div className={styles.title}>系统编号：</div>
                            <TRadio data={FFUSysList||[]} onChange={this.toggleFFU} default={devuuid} style={{width:'88%'}}/>
                        </div>
                        <div>系统状态：<SysState type={sys_State} style={{float:'right',marginRight:'3vw'}}/></div>
                        <div>设备运行状况：</div>
                        <Table bordered columns={columns} dataSource={deviceList||[]} pagination={{ hideOnSinglePage: true, pageSize: 20 }} />
                    </section>
                </Card>
            </Fragment>
        )
    }
}