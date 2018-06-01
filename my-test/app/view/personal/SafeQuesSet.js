import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    userQueryAll
} from "@redux/action/action.js"
import { Card,Form,Row, Col, Icon, Input, Button, Checkbox,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import MyTitle from '@comp/myTitle.js'
class SafeQuesSet extends Component{

    constructor(props){
        super(props)
    }
    state = {
        isFirst: false,
        isPass:false
        
    }
    componentWillMount() {
        console.log(this.props.users)
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
      handleSubmitPass= (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.setState({
                isPass:true,
                isFirst:true
            })
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
                {this.state.isFirst?(
                    <div>
                        {!this.state.isPass?(
                            <MyTitle title="安全问题设置"/>
                        ):(
                            <MyTitle title="重置安全问题"/>
                        )}
                        <Form onSubmit={this.handleSubmit} style={{ width:'25vw',margin:'20vh auto' }}>
                            <FormItem
                            {...formItemLayout}
                            label="安保问题"
                            >
                            {getFieldDecorator('ques1', {
                                rules: [{
                                required: true, message: '请选择问题',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Select style={{  }}>
                                    <Option value="86">第一问</Option>
                                    <Option value="87">第二问</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="答案"
                            >
                            {getFieldDecorator('answer1', {
                                rules: [{
                                required: true, message: '请输入答案',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="text" />
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="安保问题"
                            >
                            {getFieldDecorator('ques1', {
                                rules: [{
                                required: true, message: '请选择问题',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Select style={{  }}>
                                    <Option value="86">第一问</Option>
                                    <Option value="87">第二问</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="答案"
                            >
                            {getFieldDecorator('answer1', {
                                rules: [{
                                required: true, message: '请输入答案',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="text" />
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="安保问题"
                            >
                            {getFieldDecorator('ques1', {
                                rules: [{
                                required: true, message: '请选择问题',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Select style={{  }}>
                                    <Option value="86">第一问</Option>
                                    <Option value="87">第二问</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="答案"
                            >
                            {getFieldDecorator('answer1', {
                                rules: [{
                                required: true, message: '请输入答案',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="text" />
                            )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                ):(
                    <div>
                        <MyTitle title="重置安全问题"/>
                        <Form onSubmit={this.handleSubmitPass} style={{ width:'25vw',margin:'20vh auto' }}>
                            
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
                            <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                )}
            </div>
        )
    }
}

SafeQuesSet.propTypes = {
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
const WrappedNormalSafeQuesSet = Form.create()(SafeQuesSet);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalSafeQuesSet)