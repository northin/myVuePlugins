import React, { Component } from 'react';
import { Button,Menu, Dropdown, Icon } from 'antd';
import { Redirect,Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    userLogin,
    logout
} from "@redux/action/loginAction.js"
import BaseComponment from "@comp/BaseComponment.js"
import '@less/myHeader.less'
import MyModal from '@comp/myModal.js'
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
    onHandeOK= async (e) => {
        e.preventDefault();
        const as = await this.props.onLoginOut()
        console.log(as)
        await this.logout()
    }
    logout() {
        const isLogoutSucc = this.props.isAuth;
        if(isLogoutSucc){
            this.error("登出失败!请稍后再试")
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
                <a target="_blank" rel="noopener noreferrer" onClick={this.onModalClick}>退出</a>
              </Menu.Item>
            </Menu>
          );
        if (this.state.isLogout) {  
            return <Redirect push to="/login" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        return (
            <div className="header-top">
                <MyModal onRef={this.onRef} content="确认退出？" onHandeOK={this.onHandeOK}/>
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
            return dispatch(logout())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHeader)