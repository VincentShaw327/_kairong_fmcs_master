import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button, Card, Radio, Avatar, Upload, message, Icon } from 'antd';
import { urlBase } from 'utils/TAjax';
import SimpleTable from 'components/TTable/SimpleTable';
import { fn_mes_trans } from 'functions';
// import { SimpleQForm, StandardQForm } from 'components/TForm';
import { device_brand_list } from 'actions/device'
import { account_list, account_update } from 'actions/user';
import PageHeaderLayout from '../../base/PageHeaderLayout';

const FormItem = Form.Item
const RadioGroup = Radio.Group;

@connect( ( state, props ) => ( {
  processionConfig: state.processionConfig,
  UserAccount: state.UserAccount,
  deviceBrand: state.deviceBrand,
} ) )
@Form.create()
export default class brand extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            // tableDataList: [],
            updateFromItem: {},
            // total: 0,
            current: 0,
            pageSize: 10,
            // WorkshopUUID: -1,
            UModalShow: false,
            // loading: true,

            DeviceModelList: [],
            DeviceTypeList: [],
            // ModelUUID: -1,
            // TypeUUID: -1,
        }
        this.url = '/api/TDevice/device'
    }

    componentWillMount() {
        const { list } = this.props.UserAccount;
        if ( Array.isArray( list ) && list.length === 0 ) {
            this.props.dispatch( account_list( {}, ( respose ) => {} ) )
            // console.log( '...请求list...' );
        }
    }

    componentDidMount() {
        // const { pageSize, current } = this.state;
        // const page = { page: current, size: pageSize }

    }


    handleQuery = ( data ) => {
        // console.log( '查询的值是:', data );
        // const { keyWord, TypeUUID, ModelUUID } = data;
        this.setState( {
            // keyWord,
            // TypeUUID,
            // ModelUUID,
            current: 1,
        }, () => {
            this.getTableList();
        } );
    }

    handleTableChange=( pagination ) => {
        // console.log( 'pagination', pagination );
        const { current, pageSize } = pagination;
        this.setState( { current: current, pageSize, loading: true }, () => {
            // console.log( '条件', this.state, this.getQuePage() )
            const page = { page: current - 1, size: pageSize }
            this.props.dispatch( device_brand_list( page, ( respose ) => {} ) )
        } );
    }

    toggleUModalShow=( record ) => {
        this.setState( { UModalShow: !this.state.UModalShow, updateFromItem: record } );
    }


    render() {
        // let Feature=this.feature;
        const {
            current,
            // loading,
            // total,
            pageSize,
            updateFromItem, UModalShow,
        } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { processionConfig, moldModel, deviceModel } = this.props;
        // const { Breadcrumb, detail } = this.props;
        const { list, total, loading } = this.props.UserAccount;
        console.log( 'user setting props', this.props )
        // const { list, total, loading } = this.props.deviceBrand;
        // const Data = {
        //     // list:tableDataList,
        //     list: list,
        //     pagination: { total, current, pageSize },
        // };
        const userItem = list.length >= 1 ? list[0] : {};

        const bcList = [{
            title: '首页',
            href: '/',
            }, {
            title: '系统设置',
            // href: '/',
            }, {
            title: '个人设置',
        }];

        const formItemLayout = {
            labelCol: { span: 24 },
            wrapperCol: { span: 14 },
        };

        const uploadprops = {
            name: 'file',
            action: `${gconfig.linkUrl}api/fileupload/do`,
            headers: {
              authorization: 'authorization-text',
            },
            onChange: ( info ) => {
              if ( info.file.status !== 'uploading' ) {
                console.log( info.file, info.fileList );
              }
              if ( info.file.status === 'done' ) {
                message.success( `${info.file.name} file uploaded successfully` );
                const userUUID = userItem.uObjectUUID
                const Res = info.file.response.data[0]
                const fileURL = Res.strFileStorageDir + Res.strFileStorageName
                const cond = {
                  uuid: userUUID,
                  cols: fn_mes_trans.toCols( { strAvatar: fileURL } ),
                }
                console.log( '开始更新产品url', cond )
                this.props.dispatch( account_update( cond, () => message.success( '更新成功!' ) ) );
              } else if ( info.file.status === 'error' ) {
                message.error( `${info.file.name} file upload failed.` );
              }
            },
        };

        return (
          <PageHeaderLayout wrapperClassName="pageContent" BreadcrumbList={bcList}>
            <Card>
                <h1 style={{ marginBottom: 15 }}>基本设置</h1>
                <Row>
                    <Col span={12}>
                        <Form layout="horizontal">
                            <FormItem
                              label="登录名称"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'strModelName', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.strNickName,
                                } )( <Input /> )
                            }
                            </FormItem>
                            <FormItem
                              label="真实姓名"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'strMouldCode', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.strTrueName,
                                } )( <Input /> )
                            }
                            </FormItem>
                            <FormItem
                              label="出生日期"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'dtBirthday', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.dtBirthday,
                                } )( <Input /> )
                            }
                            </FormItem>
                            <FormItem
                              label="邮箱"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'nMouldMaxSPM', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.strEmail,
                                } )( <Input /> )
                            }
                            </FormItem>
                            <FormItem
                              label="手机号"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'nMouldMinSPM', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.strMobile,
                                } )( <Input /> )
                            }
                            </FormItem>
                            <FormItem
                              label="性别"
                              {...formItemLayout}
                            >
                            {
                                getFieldDecorator( 'fMouldStepValue', {
                                rules: [{ required: true, message: 'Username is required!' }],
                                initialValue: userItem.nSex,
                                } )( <RadioGroup>
                                        <Radio value={0}>女</Radio>
                                        <Radio value={1}>男</Radio>
                                     </RadioGroup> )
                            }
                                <Button type="primary" onClick={this.updateMold} style={{ display: 'block', marginTop: 25 }} >更新基本信息</Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <Avatar size={128} icon="user" src={gconfig.linkUrl + userItem.strAvatar} />
                        <div style={{ margin: 8 }}>
                            <Upload {...uploadprops}>
                                <Button>
                                    <Icon type="upload" /> 更换头像
                                </Button>
                            </Upload>
                        </div>
                    </Col>
                </Row>
            </Card>
          </PageHeaderLayout>
        )
    }
}
