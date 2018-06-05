import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect,BrowserRouter,Link } from 'react-router-dom'
import BaseComponment from "@comp/BaseComponment.js"
import {
    userLogin
} from "@redux/action/action.js"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends BaseComponment{

    constructor(props){
        super(props)
        this.state = {
            redirect:false
        }
    }
    componentWillMount() {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.onLogin()
            this.setState({redirect: true});  
          }
        });
      }
    render(){
        const that = this.props
        if (this.state.redirect) {  
            return <Redirect push to="/app/user/baseInfo" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="components-form-demo-normal-login">
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或 <a href="">马上注册!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

Login.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            // name: PropTypes.string.isRequired,
            // age: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    onLogin: PropTypes.func.isRequired
}
const mapStateToProps  = state => {
    return {
        users : state.getIn(["test","user"])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => {
            dispatch(userLogin())
        }
    }
}

const WrappedNormalLogin= Form.create()(Login);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLogin)