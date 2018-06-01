import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from "./redux/action.js"
class ToDoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              completed: PropTypes.bool.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        onTodoClick: PropTypes.func.isRequired
    }
    
    render(){
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo) => (
                        <li
                            key ={todo.id}
                            onClick={() => this.props.onTodoClick(todo.id)}
                            style={ {
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>
          );
    }
    
}
const filterTodos = (todos, filter ) => { 
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLATE':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}
const mapStateToProps  = state => {
    return {
        todos : filterTodos(state.todos,state.visibilityFilter)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)