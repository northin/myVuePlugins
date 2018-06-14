import React, { Component } from 'react';
import { Button } from 'antd';
import '@less/common.less'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect,BrowserRouter,Link } from 'react-router-dom'
import BaseComponment from "@comp/BaseComponment.js"
import {
    register
} from "@redux/action/authAction.js"
import { valide } from "@util/util.js"

class SendMessage extends BaseComponment{
    constructor(props){
        super(props)
        this.state = {
            isDisabled:false,
            btnMsg:"短信获取",
            num:60
        }
    }

    send = () => {
        const checkData = valide.phone(this.props.sendMobile)
        if(checkData){
            this.error(checkData)
        }else{
            const sendCode = this.props.sendCode
            this.props.onSend(sendCode)
            this.setState({
                isDisabled:true,
            })
            this.timer = setInterval(()=> this.tick(this.state.num),1000)
        }
        
    }
    tick = (num) => {
        if(num == 0){
            clearInterval(this.timer);
            this.setState({
                btnMsg:"短信获取",
                num:60,
                isDisabled:false,
            })
        }else{
            this.setState({
                btnMsg:this.state.num+"秒可重发",
                num:this.state.num-1
            })
        }
        
    }
    componentDidMount(){
        
        
        // if()
    }
    render(){
        return (
            <div className="sendMessage">
                <Button disabled={this.state.isDisabled} onClick={this.send}>{ this.state.btnMsg }</Button>
            </div>
        )
    }
}

SendMessage.propTypes = {
    // users: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         // name: PropTypes.string.isRequired,
    //         // age: PropTypes.number.isRequired,
    //     }).isRequired
    // ).isRequired,
    // orgCode: PropTypes.object.isRequired,
    onSend: PropTypes.func.isRequired,
}
const mapStateToProps  = state => {
    return {
        // orgCode:state.getIn(["common","dict"]).toJS()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSend: (sendCode) => {
            return dispatch(register(sendCode))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SendMessage)