/**
 *这是权限组页
 *添加日期:2018.03.03
 *添加人:shaw
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom'
import { Button, message, Avatar, Checkbox, Divider, Row, Col, Popconfirm, Menu, Card, List } from 'antd';
import { user_auth_item } from 'actions/user';
import { auth_group_list, auth_group_update, a_g_category_list, a_g_item_list, initCurGpChecked, setCurGpChecked } from 'actions/auth';
import { fn_mes_trans } from 'functions'
import SimpleTable from 'components/TTable/SimpleTable';
import { CreateModal, UpdateModal } from 'components/TModal';
import TUserAuthDetail from './TUserAuthDetail';
import PageHeaderLayout from '../../base/PageHeaderLayout';
// import { TPostData } from 'utils/TAjax';
// import { hashHistory, Link } from 'react-router';
// import { SimpleQForm, StandardQForm } from 'components/TForm';


@connect( ( state, props ) => ( {
    Breadcrumb: state.Breadcrumb,
    UserGroup: state.UserGroup,
    AuthGroup: state.AuthGroup,
} ) )
export default class TAuthGroupList extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            lsCurGroupAuth: [],
            tableDataList: [],
            updateFromItem: {},
            total: 0,
            current: 1,
            pageSize: 10,
            UModalShow: false,
            loading: true,

            showDetal: false,
            detailID: 0,
            detailMessage: {},
        }
        this.url = '/api/TUser/group';
    }

    componentWillMount() {
        // this.getTableList();
        this.props.dispatch( auth_group_list( {}, ( respose ) => {} ) )
        this.props.dispatch( a_g_category_list( {}, ( respose ) => {
            this.props.dispatch( a_g_item_list( {}, ( respose ) => {
                this.props.dispatch( initCurGpChecked( {} ) )
            } ) )
        } ) )
    }

    componentDidMount() {}

    handleClick=( e ) => {
        console.log( 'dianji menu', e )
        this.props.dispatch( setCurGpChecked( {
            ag_key: e.key,
            /* fn: ( respose ) => {
                    this.setState( { lsCurGroupAuth: respose } )
                    // this.forceUpdate()
            }, */
        } ) )
    }

    handleDelete=( data ) => {

    }


    handleTableChange=( pagination ) => {
        // console.log('pagination',pagination);
        const { current, pageSize } = pagination;
        this.setState( { current, pageSize, loading: true }, () => {
            // this.getTableList();
        } );
    }

    toggleRender( record ) {
        // console.log("toggleRender",record);
        this.setState( {
            showDetal: !this.state.showDetal,
            detailID: record.UUID,
            detailMessage: record,
        } )
    }

    toggleUModalShow=( record ) => {
        this.setState( { UModalShow: !this.state.UModalShow, updateFromItem: record } );
    }

    onChange=( checkedValues, item ) => {
        const { uObjectUUID, strGroupCode } = this.props.AuthGroup.authGroupItem;
        let { lsCurGroupAuth } = this.props.AuthGroup;
        const { options } = item;
        // let concatList = [];
        // console.log( 'lsCurGroupAuth', lsCurGroupAuth )
        options.forEach( ( ele1 ) => {
            lsCurGroupAuth = lsCurGroupAuth.filter( ele2 => ele2 !== ele1 )
        } )
        // console.log( 'filted', lsCurGroupAuth )
        lsCurGroupAuth = lsCurGroupAuth.concat( checkedValues )
        /* const concatList = lsCurGroupAuth.concat( checkedValues );
        concatList.forEach( ( ele, index ) => {
            const lIO = concatList.lastIndexOf( ele )
            if ( lIO !== index ) {
                concatList.splice( lIO, 1 )
            }
        } ) */
        // console.log( 'checked = ', checkedValues, item, lsCurGroupAuth );
        // this.setState( { lsCurGroupAuth } )
        const data = { strItemList: lsCurGroupAuth.toString() }
        const cond = {
            uuid: uObjectUUID,
            cols: fn_mes_trans.toCols( data ),
        }
        // console.log( '修改auth item', cond )
        this.props.dispatch( auth_group_update( cond, ( respose ) => {
            message.success( '更新成功!' );
            this.props.dispatch( setCurGpChecked( {
                ag_key: strGroupCode,
                fn: respose => this.setState( { lsCurGroupAuth: respose } ),
            } ) )
        } ) )
    }


    updateGPAuth=() => {
        const { uObjectUUID } = this.props.AuthGroup.authGroupItem;
        const { lsCurGroupAuth } = this.state;
        const data = { strItemList: lsCurGroupAuth.toString() }
        const cond = {
            uuid: uObjectUUID,
            cols: fn_mes_trans.toCols( data ),
        }
        console.log( '修改auth item', cond )
        this.props.dispatch( auth_group_update( cond, ( respose ) => { message.success( '更新成功!' ) } ) )
    }

    render() {
        console.log( 'current props', this.props )
        // let Feature = this.feature;
        // const { detail } = this.props;
        const {
            tableDataList,
            ProModelList,
            // loading,
            current,
            // total,
            pageSize,
            updateFromItem,
            UModalShow,
            showDetal,
            detailID,
            detailMessage,
        } = this.state;
        const { UserGroup, AuthGroup, Breadcrumb } = this.props;
        const {
            list, defaultMenuKeys, lsAuthCategory, lsAuthItem, lsAuthItemChecked, user_auth, total, loading,
        } = AuthGroup;

        const bcList = [{
          title: '首页',
          href: '#/home',
          }, {
          title: '系统设置',
        //   href: '/',
          }, {
          title: '权限管理',
          }, {
          title: showDetal ? '权限组详情' : '',
          }];

        return (
            <PageHeaderLayout
            //   title={showDetal ? '权限组详情' : '权限组管理'}
            //   action={showDetal ? HeadAction : ''}
            //   content={showDetal ? HeadContent : ''}
              wrapperClassName="pageContent"
              BreadcrumbList={bcList}
            >
               <Card>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={4}>
                            <Menu
                              onClick={this.handleClick}
                            // selectedKeys={[this.state.current]}
                            //   selectedKeys={[UserGroup.activeKey]}
                              defaultSelectedKeys={['SYS']}
                            //   defaultSelectedKeys={defaultMenuKeys}
                              mode="vertical"
                              selectable
                            >
                                {
                                    list.map( ( item, index ) => (
                                    <Menu.Item key={item.strGroupCode}>{item.strGroupName}</Menu.Item> ) )
                                }
                            </Menu>
                        </Col>
                        <Col className="gutter-row" span={20}>
                            {/* <Switch>
                                <Route path="/setting/auth_group_list/production" component={AuthListTable} />
                            </Switch> */}
                              <List
                                itemLayout="horizontal"
                                // dataSource={data}
                                dataSource={lsAuthItemChecked}
                                renderItem={item => (
                                <List.Item>
                                    {/* <List.Item.Meta
                                    //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                      title={<a>权限类别</a>}
                                      description="权限类别说明"
                                    /> */}
                                    <Row type="flex" justify="start" align="middle" style={{ width: '100%' }}>
                                        <Col span={3}>
                                            <List.Item.Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                              title={<span>{item.TypeName}</span>}
                                              description={item.TypeNote}
                                            />
                                        </Col>
                                        <Col span={16}>
                                            <Checkbox.Group onChange={checkedValue => this.onChange( checkedValue, item )} options={item.authList} value={item.defaultValue} style={{ width: '100%' }}>
                                                <Row>
                                                    {/* <Col span={4}><Checkbox value="A">A</Checkbox></Col> */}
                                                    {
                                                        item.authList.map( ( ele, index ) => <Col key={index} span={4}><Checkbox value={ele.value}>{ele.label}</Checkbox></Col> )
                                                    }
                                                </Row>
                                            </Checkbox.Group>
                                        </Col>
                                    </Row>
                                </List.Item>
                                )}
                              />
                            {/* <Button type="primary" onClick={this.updateGPAuth}>提交修改</Button> */}
                        </Col>
                    </Row>
               </Card>
            </PageHeaderLayout>
        );
    }
}
