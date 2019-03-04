import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import {
    Spin,
    message,
    Form,
    Icon,
    Input,
    Button,
    Row,
    Col,
    Checkbox,
} from 'antd'
import { fetchLogin, userInfo } from 'actions/common'
import { login } from 'actions/user';
import styles from './login.less'
import bgimg from '../images/bg.png'

const FormItem = Form.Item


@Form.create( {
    onFieldsChange( props, items ) {},
} )

@connect( ( state, props ) =>
    ( {
    Breadcrumb: state.Breadcrumb,
    UserAccount: state.UserAccount,
} ) )
export default class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor( props, context ) {
        super( props )
        this.state = {
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind( this )
        this.checkPass = this.checkPass.bind( this )
        this.checkName = this.checkName.bind( this )
        this.noop = this.noop.bind( this )
    }

    handleSubmit( e ) {
        e.preventDefault()
        this.props.form.validateFields( ( err, values ) => {
            if ( !err ) {
                const testMessage = {
                    account: 'admin',
                    username: values.username53,
                    password: values.password,
                    img: 'img/avtar01.png',
                    UserLevel: 'administer',
                    Permission: [],
                }
                console.log( '开始登陆', values )
                // this.state.loading = true
                // this.setState({loading: true})
                // Object.keys( values ).map( key => values[key] = ( values[key] && values[key].trim() ) )
                // sessionStorage.setItem( 'token', testMessage )
                // hashHistory.push( '/home' )

                this.props.dispatch( login( values, ( respose ) => {
                    console.log( 'denglu success', respose.data.lstAuthItem )
                    sessionStorage.setItem( 'user_authority', respose.data.lstAuthItem );
                    this.props.history.push( '/' )
                        // user_authority
                    } ) )
            }
        } )
    }

    // 组件已经加载到dom中
    componentDidMount() {
        // this.props.dispatch(fetchLogin({ currentPage: 1 }))
    }

    checkName = ( rule, value, callback ) => {
        // const { validateFields } = this.props.form
        if ( value ) {
            // validateFields([''])
        }
        callback()
    }

    checkPass = ( rule, value, callback ) => {
        // const { validateFields } = this.props.form
        if ( value ) {
            // validateFields([''])
        }
        callback()
    }

    noop = () => false

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className={styles.login}>
                <div className={styles.sy_top}>
                    <h1 className={styles.top_title}>T-MES智能制造执行系统</h1>
                </div>
                <div className={styles.loginContent}>
                    {/* <div className={styles.lg_img} /> */}
                    <img src={bgimg} alt="" className={styles.lg_img} />
                    <div className={styles.sy_bottom}>
                        <div className={styles.PerformName}>T-MES智能制造执行系统</div>
                        <Row className={styles.ul_wrap}>
                            <Col span={24}>
                                <Spin spinning={this.state.loading}>
                                    <div className={styles.loginForm}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormItem hasFeedback="hasFeedback">
                                                {
                                                    getFieldDecorator( 'strName ', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: '请输入用户名',
                                                            }, {
                                                                validator: this.checkName,
                                                            },
                                                            // { pattern: regExpConfig.IDcardTrim, message: '身份证号格式不正确' }
                                                        ],
                                                        // validateTrigger: 'onBlur',
                                                    } )( <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" type="text" /> )
                                                }
                                            </FormItem>
                                            <FormItem hasFeedback="hasFeedback">
                                                {
                                                    getFieldDecorator( 'strPsw', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: '请输入密码',
                                                            },
                                                            // { pattern: regExpConfig.pwd, message: '密码只能是6-16个数字或者字母组成' }
                                                        ],
                                                        // validateTrigger: 'onBlur',
                                                    } )( <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="请输入密码" type="password" /> )
                                                }

                                            </FormItem>
                                            <Form.Item>
                                                {getFieldDecorator( 'remember', {
                                                    valuePropName: 'checked',
                                                    initialValue: true,
                                                } )( <Checkbox>记住密码</Checkbox> )}
                                                {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                                                <Button className={styles.loginBtn} type="primary" htmlType="submit">登录</Button>
                                            </Form.Item>
                                            {/* <FormItem>
                                                <Button className={styles.loginBtn} type="primary" htmlType="submit">登录</Button>
                                                <Link to="/register">注册</Link>
                                            </FormItem> */}
                                        </Form>
                                    </div>
                                </Spin>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
