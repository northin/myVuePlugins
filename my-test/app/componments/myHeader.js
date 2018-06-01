import React, { Component } from 'react';
import { Button } from 'antd';
import '@less/myHeader.less'
class MyHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="header-top">
                <div>场外期权交易系统</div>
                <div className="header-right">
                    <Button>登录</Button>
                    <Button>注册</Button>
                </div>
            </div>
        )
    }
}
export default MyHeader