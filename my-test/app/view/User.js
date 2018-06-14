import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    userQueryAll
} from "@redux/action/action.js"
import { Button } from 'antd/lib/radio';
import BaseComponment from "@comp/BaseComponment.js"
class User extends BaseComponment{

    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.props.userQueryAll() //发送get请求
        console.log(this.props.users)
    }
    render(){
        return (
            <div>
                <Button>ttttt</Button>
                <ul>
                    {this.props.users.map((todo,index) => (
                        <li
                            key ={index}
                        >
                            {todo.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

User.propTypes = {
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
        users : state.getIn(["test","user"]).toJS()
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
)(User)