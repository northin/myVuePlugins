import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class MyLayout extends Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    onCollapse(collapsed){
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){


        return(
        
        <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>账户中心</span></span>}
            >
              <Menu.Item key="1"><Link to="/app/user/baseInfo">基本信息</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/app/user/mbChange">手机号更换</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/app/user/cread">银行卡管理</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/app/user/realName">实名认证</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/app/user/safeQuesSet">安全问题设置</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/app/user/pass">登录密码修改</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/app/user/pass">交易密码重置</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="credit-card" /><span>资金管理</span></span>}
            >
              <Menu.Item key="8"><Link to="/app/fund/charge">充值</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/app/fund/takeMoney">提现</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/app/fund/fundQry">充提流水</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="profile" /><span>信息查询</span></span>}
            >
              <Menu.Item key="11"><Link to="/app/info/myHold">我的持仓</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/app/info/hisOrderQry">历史订单查询</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/app/info/orderQry">今日订单查询</Link></Menu.Item>
              <Menu.Item key="14"><Link to="/app/info">历史成交查询</Link></Menu.Item>
              <Menu.Item key="15"><Link to="/app/about">今日成交查询</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="16">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="17">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff',minHeight:'80vh' }}>
                {this.props.children}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
        </Layout>
        
    )}
}
export default MyLayout;