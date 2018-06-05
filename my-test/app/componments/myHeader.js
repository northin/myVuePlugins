import React, { Component } from 'react';
import { Button,Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    userLogin
} from "@redux/action/action.js"
import '@less/myHeader.less'
import bg1 from "@picture/bg1.jpg"
class MyHeader extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        // onLogin: PropTypes.func.isRequired
    }
    logout(){

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
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
              </Menu.Item>
            </Menu>
          );
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
        isAuth : state.getIn(["test","isAuth"])
    }
}
export default connect(
    mapStateToProps
)(MyHeader)