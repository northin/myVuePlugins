import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    add
} from "@redux/action/action.js"

class About extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo,index)=>{
                        <div key={index}>{todo.id}</div>
                    })

                }
                <button>123</button>
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
    console.log(state)
    return {
        todos : state.test
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(add(id))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)