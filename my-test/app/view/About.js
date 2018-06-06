import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    add,
    testRemove
} from "@redux/action/action.js"
import BaseComponment from "@comp/BaseComponment.js"
import MyModal from '@comp/myModal.js'
class About extends BaseComponment{

    constructor(props){
        super(props)
    }
    componentWillMount() {
        console.log(this.props.todos)
    }
    
    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo,index) =>  <div key={index}>{todo.id}</div> )
                }

                <MyModal onRef={this.onRef} content="确认退出？" />
                <button onClick={()=>this.props.onClick(this.props.todos.length+1)}>添加</button>
                <button onClick={()=>this.props.onRemoveClick(1)}>删除</button>
                <button onClick={this.onModalClick}>弹框</button>
            </div>
        )
    }
}

About.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired
}
const mapStateToProps  = state => {
    console.log(state.getIn(["test","test"]).toJS())
    return {
        todos : state.getIn(["test","test"]).toJS()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(add({"id":id}))
        },
        onRemoveClick:id => {
            dispatch(testRemove(id))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)