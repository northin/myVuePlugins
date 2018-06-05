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
    componentWillMount() {
        console.log(this.props.todos)
    }
    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo,index) =>  <div key={index}>{todo.id}</div> )
                }
                <button onClick={()=>this.props.onClick(this.props.todos.length+1)}>{this.props.todos[0].id}</button>
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
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)