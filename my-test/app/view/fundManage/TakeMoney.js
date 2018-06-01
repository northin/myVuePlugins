import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
    userQueryAll
} from "@redux/action/action.js"
import { Radio,Card,Form,Row, Col, Icon, Input, Button, Checkbox,Select } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
import MyTitle from '@comp/myTitle.js'

class TakeMoney extends Component{

    constructor(props){
        super(props)
    }
    state = {
        value: 1,
      }
    componentDidMount() {
        // this.props.userQueryAll() //发送get请求
        // console.log(this.props.users)
        this.props.form.setFieldsValue({
            fundBln: 123,
            bankCard:1
        });
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            // this.setState({
            //     isPass:true
            // })
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
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
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
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        return (
            <div>
                <MyTitle title="体现" />
                <Form onSubmit={this.handleSubmit} style={{ width:'25vw',margin:'20vh auto' }}>
                    <FormItem
                    {...formItemLayout}
                    label="银行卡"
                    >
                    {getFieldDecorator('bankCard', {
                        rules: [{
                        required: true, message: '请选择银行卡',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <RadioGroup onChange={this.onChange} >
                            <Radio style={radioStyle} value={1}>中国银行</Radio>
                            <Radio style={radioStyle} value={2}>中国工商银行</Radio>
                            <Radio style={radioStyle} value={3}>杭州银行</Radio>
                            
                        </RadioGroup>
                    )}
                    </FormItem>  
                    <FormItem
                    {...formItemLayout}
                    style={{ textAlign:'right' }}
                    >
                       <Link to="/user/cread">+添加银行卡</Link>
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="可取金额"
                    >
                    {getFieldDecorator('fundBln', {
                        rules: [{
                        required: true, message: '请输入提现金额',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="text" disabled  />
                    )}
                    </FormItem> 
                    <FormItem
                    {...formItemLayout}
                    label="提现金额"
                    >
                    {getFieldDecorator('fund', {
                        rules: [{
                        required: true, message: '请输入提现金额',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="text" />
                    )}
                    </FormItem>
                    <FormItem
                    {...formItemLayout}
                    label="交易密码"
                    >
                    {getFieldDecorator('pass', {
                        rules: [{
                        required: true, message: '请输入交易密码',
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
                    <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

TakeMoney.propTypes = {
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
const mapDispatchToProps = dispatch => {
    return {
        userQueryAll: () => {
            dispatch(userQueryAll())
        }
    }
}
const WrappedNormalTakeMoney = Form.create()(TakeMoney);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalTakeMoney)