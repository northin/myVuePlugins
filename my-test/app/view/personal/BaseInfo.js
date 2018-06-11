import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    userQueryAll
} from "@redux/action/action.js"
import { Button } from 'antd/lib/radio';
import { Row, Col, Slider, Icon } from 'antd';
import '@less/common.less'
class BaseInfo extends Component{

    constructor(props){
        super(props)
    }
    componentWillMount() {
        // this.props.userQueryAll() //发送get请求
        // console.log(this.props.users)
    }
    render(){
        return (
            <div style={{ height: '80vh' }}>
                <div className="baseInfo-top">
                <Row gutter={16} >
                    <Col span={3}>
                        <Icon type="user" style={{ height:'9vh',lineHeight:'9vh',width:'9vh' ,fontSize:'30px'}}/>
                    </Col>
                    <Col span={18} className="baseInfo-custInfo">
                        <div>
                            <span>会员等级：V1</span>
                            <span>会员等级：K1</span>
                            <span>会员账号：282238</span>
                            <span>手机号：1822222151</span>
                        </div>
                        <div>
                            <span>银行卡</span>
                            <span>上次登录：2018-06-01</span>
                        </div>
                    </Col>
                    <Col span={3} style={{ height: '8vh','borderLeft': '1px solid #ccc' }}>
                        消息中心
                    </Col>
                </Row>
                </div>
                <div style={{borderTop: '2px solid red',paddingTop: '20px'}}>
                <Row gutter={16} className="baseInfo-fundInfo">
                    <Col span={5} className="baseInfo-fundInfo-col">
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                    </Col>
                    <Col span={5} className="baseInfo-fundInfo-col" >
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                    </Col>
                    <Col span={6} className="baseInfo-fundInfo-col" >
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                    </Col>
                    <Col span={6} className="baseInfo-fundInfo-col" >
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                        <div>资产总值</div>
                        <div className="money">￥98.256.00</div>
                    </Col>
                    <Col span={2} className="baseInfo-fundInfo-col" style={{paddingLeft: '0px',lineHeight: '124px'}}>
                        查看我的持仓
                    </Col>
                </Row>
                </div>
                <div style={{textAlign:'left',paddingLeft:'3vw',marginTop:"2vh"}}>
                    <Button>充值</Button>
                    <Button>提现</Button>
                </div>
            </div>
        )
    }
}

BaseInfo.propTypes = {
    // users: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         // name: PropTypes.string.isRequired,
    //         // age: PropTypes.number.isRequired,
    //     }).isRequired
    // ).isRequired,
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseInfo)