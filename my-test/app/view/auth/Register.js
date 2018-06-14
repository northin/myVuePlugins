import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect,BrowserRouter,Link } from 'react-router-dom'
import BaseComponment from "@comp/BaseComponment.js"
import SendMessage from "@comp/SendMessage.js"
import {
    register
} from "@redux/action/authAction.js"
import {dict} from '@redux/action/commonAction.js'
import { sendCode } from "@config"
import {message, Form, Icon, Input, Button, Checkbox, Select,Row,Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class Register extends BaseComponment{

    constructor(props){
        super(props)
        this.state = {
            redirect:false,
            isCheck:false
        }
    }
    componentWillMount() {
        
        this.props.onDict("orgCode")
        // console.log(this.props.orgCode)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.form.validateFields( async (err, values) => {
            if (!err) {
                console.log(values)
                const res = await this.props.onRegister()
                if(res.errorCode == 0){
                    this.setState({redirect: true});  
                    this.success("注册成功！")
                }else{
                    this.error("注册失败！" + res.errormsg)
                }
            
            }
        });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致！');
        } else {
            callback();
        }
    }
    onCheckChange = (e) => {
        if(e.target.checked){
            this.setState({
                isCheck:true
            })
        }else{
            this.setState({
                isCheck:false
            })
        }
    }
    orgCodeChecked = (value) => {
        console.log(value)
        this.props.onDict("brachCode",value)
    }
    render(){
        const that = this.props
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        if (this.state.redirect) {  
            return <Redirect push to="/app/user/baseInfo" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="components-form-demo-normal-reg">
                {/* <div>{ that.orgCode["ss"][0].id }</div> */}
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                    {...formItemLayout}
                    label="请选择机构网点"
                    >
                    {getFieldDecorator('ques1', {
                        rules: [{
                        required: true, message: '请选择机构网点',
                        }],
                    })(<Select style={{  }} onChange={this.orgCodeChecked}>
                        
                            { 
                                that.orgCode["orgCode"]?(
                                    that.orgCode["orgCode"].map( (item,index) => (
                                        <Option key={index} value={item.id}>{item.user_email}</Option>
                                    ))
                                        
                                   
                                ):(
                                    null
                                ) 
                            }
                            </Select>
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="请选择营业网点"
                    >
                    {getFieldDecorator('ques2', {
                        rules: [{
                        required: true, message: '请选择营业网点',
                        }],
                    })(
                        <Select style={{  }}>
                            { 
                                that.orgCode["brachCode"]?(
                                    that.orgCode["brachCode"].map( (item,index) => (
                                        <Option key={index} value={item.id}>{item.user_email}</Option>
                                    ))
                                    
                                ):(
                                    null
                                ) 
                            }
                        </Select>
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="用户名">
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="登录密码">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="确认登录密码">
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请再次输入密码!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onBlur={this.handleConfirmBlur} placeholder="确认密码" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="验证码"
                    extra="我们必须确认你不是机器人"
                    >
                    <Row gutter={8}>
                        <Col span={12}>
                        {getFieldDecorator('captcha', {
                            rules: [{ required: true, message: '请输入你的短信验证码' }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={12}>
                        <SendMessage sendCode={sendCode.reg} sendMobile={that.form.getFieldValue("userName")}/>
                        </Col>
                    </Row>
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="推荐人手机">
                    {getFieldDecorator('phone', {
                        rules: [],
                    })(
                        <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="推荐人手机号" />
                    )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox onChange={this.onCheckChange}>我已经阅读并同意 <a href="">入金协议</a></Checkbox>
                    )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" disabled={!this.state.isCheck} className="login-form-button">
                        注册
                    </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

Register.propTypes = {
    // users: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         // name: PropTypes.string.isRequired,
    //         // age: PropTypes.number.isRequired,
    //     }).isRequired
    // ).isRequired,
    orgCode: PropTypes.object.isRequired,
    onRegister: PropTypes.func.isRequired,
    onDict: PropTypes.func.isRequired,
}
const mapStateToProps  = state => {
    return {
        orgCode:state.getIn(["common","dict"]).toJS()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRegister: () => {
            return dispatch(register())
        },
        onDict: (params) => {
            dispatch(dict(params))
        }
    }
}

const WrappedNormalRegister= Form.create()(Register);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalRegister)