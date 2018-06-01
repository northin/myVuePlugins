import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    userQueryAll
} from "@redux/action/action.js"
import { Form,Row, Col, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import MyTitle from '@comp/myTitle.js'
class MbChange extends Component{

    constructor(props){
        super(props)

    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        isPass:false,
        confirmDirtyPass: false,
    }
    componentWillMount() {
        // this.props.userQueryAll() //发送get请求
        // console.log(this.props.users)
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.setState({
                isPass:true
            })
          }
        });
      }
      handleSubmitPass= (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
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
        return (
            <div>
                <MyTitle title="手机号更换"/>
                {this.state.isPass?(<Form onSubmit={this.handleSubmitPass} style={{ width:'25vw',margin:'20vh auto' }}>
                    <FormItem
                    {...formItemLayout}
                    label="手机号"
                    >
                    {getFieldDecorator('mobile', {
                        rules: [{
                        required: true, message: '请输入手机号',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="text" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="验证码"
                    >
                    <Row gutter={8}>
                        <Col span={12}>
                        {getFieldDecorator('captcha1', {
                            rules: [{ required: true, message: '输入手机短信验证码' }],
                        })(
                            <Input type="text"/>
                        )}
                        </Col>
                        <Col span={12}>
                        <Button>发生短信</Button>
                        </Col>
                    </Row>
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>):(<Form onSubmit={this.handleSubmit} style={{ width:'25vw',margin:'20vh auto' }}>
                    <FormItem
                    {...formItemLayout}
                    label="登录密码"
                    >
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: '请输入密码',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="验证码"
                    >
                    <Row gutter={8}>
                        <Col span={12}>
                        {getFieldDecorator('captcha', {
                            rules: [{ required: true, message: '输入手机短信验证码' }],
                        })(
                            <Input />
                        )}
                        </Col>
                        <Col span={12}>
                        <Button>发生短信</Button>
                        </Col>
                    </Row>
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">下一步</Button>
                    </FormItem>
                </Form>)}
                
            </div>
        )
    }
}

MbChange.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            // name: PropTypes.string.isRequired,
            // age: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    userQueryAll: PropTypes.func.isRequired
}
const mapStateToProps  = state => {
    return {
        users : state.user
    }
}
const WrappedNormalLoginForm = Form.create()(MbChange);
const mapDispatchToProps = dispatch => {
    return {
        userQueryAll: () => {
            dispatch(userQueryAll())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm)