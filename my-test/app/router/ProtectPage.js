import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Redirect,BrowserRouter,Link } from 'react-router-dom';
import { Provider,connect } from 'react-redux';
import App from "@view/App.js"
import { isLogin } from "@redux/action/action.js"
class ProtectPage extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.props.onCheck()
    }
    render(){
        return (
            <div>
                {
                    (!this.props.isAuth)?(
                        <Redirect to='/login'></Redirect>
                    ):(
                        <App {...props}/>   
                    )
                }
            </div>
        )
    }
}
ProtectPage.propTypes = {
    isAuth:PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired
}
const mapStateToProps  = state => {
    console.log(state)
    return {
        isAuth : state.getIn(["login","isAuth"]).toJS()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCheck: () => {
            dispatch(isLogin())
        },
    }
}
export default connect(
    mapDispatchToProps,
    mapStateToProps
)(ProtectPage)