import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    userQueryAll
} from "@redux/action/action.js"
import MyTitle from '@comp/myTitle.js'
import { Card,Form,Row, Col, Icon, Input, Button, Checkbox,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class CreadCard extends Component{

    constructor(props){
        super(props)
    }
    state = {
        isAdd : false,
        confirmDirty: false,
        isCurr:0
    }
    componentWillMount() {
        // this.props.userQueryAll() //发送get请求
        console.log(this.props.users)
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
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
    cardOnClick = (num) => {
        this.setState({
            isCurr:num
        })
    }
    addOnClick = () => {
        this.setState({
            isAdd:!this.state.isAdd
        })
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
                {!this.state.isAdd?(
                    <div>
                        <MyTitle title="银行卡管理" />
                        <div style={{ marginTop:'20px',display:'flex' }}>
                            <Card onClick={()=>this.cardOnClick(0)} className={(this.state.isCurr == 0?"card-current card-card":"card-card")}>
                                <p>中国银行</p>
                                <p>132** 1345451</p>
                                <span className={(this.state.isCurr == 0?"fat-block card-remove":"card-remove")}>解绑</span>
                            </Card>
                            <Card onClick={()=>this.cardOnClick(1)} className={(this.state.isCurr == 1?"card-current card-card":"card-card")}>
                                <p>中国银行</p>
                                <p>132** 1345451</p>
                                <span className={(this.state.isCurr == 1?"fat-block card-remove":"card-remove")}>解绑</span>
                            </Card>
                            <Card  onClick={this.addOnClick} style={{ width: 300,textAlign:'center',cursor: 'pointer' }}>
                                <div style={{ fontSize:'55px' }}>+</div>
                                <div >添加银行卡</div>
                            </Card>
                        </div>
                    </div>
                ):(
                    <div>
                    <MyTitle title="银行卡添加" />
                    <Form onSubmit={this.handleSubmitPass} style={{ width:'25vw',margin:'20vh auto' }}>
                        <FormItem
                        {...formItemLayout}
                        label="银行名称"
                        >
                        {getFieldDecorator('bank', {
                            rules: [{
                            required: true, message: '请选择银行',
                            }, {
                            validator: this.validateToNextPassword,
                            }],
                        })(
                            <Select style={{  }}>
                                <Option value="86">中国银行</Option>
                                <Option value="87">杭州银行</Option>
                            </Select>
                        )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="银行账号"
                        >
                        {getFieldDecorator('account', {
                            rules: [{
                            required: true, message: '请输入银行账号',
                            }, {
                            validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="text" />
                        )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="手机号"
                        >
                        {getFieldDecorator('mb', {
                            rules: [{
                            required: true, message: '请输入银行账号',
                            }, {
                            validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="text" disabled />
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

CreadCard.propTypes = {
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

const WrappedNormalCreadCard = Form.create()(CreadCard);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalCreadCard)