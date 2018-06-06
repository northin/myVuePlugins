import React, { Component } from 'react';
import { Button,Menu, Dropdown, Icon } from 'antd';
import { Redirect,Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    userLogin,
    userLoginOut
} from "@redux/action/action.js"
import BaseComponment from "@comp/BaseComponment.js"
import '@less/myHeader.less'
import bg1 from "@picture/bg1.jpg"
class MyHeader extends BaseComponment{
    constructor(props){
        super(props)
        this.state = {
            isLogout:false
        }
    }
    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        onLoginOut: PropTypes.func.isRequired
    }
    logout = async(e) => {
        e.preventDefault();
        await this.props.onLoginOut()
        if(this.props.isAuth){
            this.error("登出失败")
        }else{
            this.setState({
                isLogout:true
            })
            this.success("登出成功")
        }
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">我的信息</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">修改密码</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" onClick={this.logout}>退出</a>
              </Menu.Item>
            </Menu>
          );
        if (this.state.isLogout) {  
            return <Redirect push to="/login" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        return (
            <div className="header-top">
                <div>场外期权交易系统</div>
                {this.props.isAuth?(
                    <div className="header-right">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                <span className="header-name">
                                    sj<Icon type="down" />
                                </span>
                                
                                <img className="header-img" src={bg1}></img>
                            </a>
                        </Dropdown>
                    </div>
                ):(
                    <div className="header-right">
                        <Button><Link to="/login">登录</Link></Button>
                        <Button><Link to="/register">注册</Link></Button>
                    </div>
                )}
            </div>
            
        )
    }
}
const mapStateToProps  = state => {
    return {
        isAuth : state.getIn(["login","isAuth"])
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLoginOut: () => {
            dispatch(userLoginOut())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHeader)