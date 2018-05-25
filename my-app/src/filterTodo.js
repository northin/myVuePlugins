import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ToDoList from './ToDoList.js'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from "./redux/action.js"
class FilterToDo extends Component {
    static propTypes = {
        // onTodoClick: PropTypes.func.isRequired
        active:PropTypes.bool.isRequired,
        children:PropTypes.node.isRequired,
        onClick:PropTypes.func.isRequired,
    }
    constructor(props){
        super(props)
        this.input = ''
    }
    
    render(){
        return (
            <div>
                {this.props.active?(
                    <span>{this.props.children}</span>
                ):(
                    <a
                        onClick={this.props.onClick}>{this.props.children}</a>
                ) }
            </div>
          );
    }
    
}
const mapStateToProps  = (state,ownProps) => {
    return {
        active : state.visibilityFilter === ownProps.filter
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}
export default connect( mapStateToProps ,mapDispatchToProps)(FilterToDo)