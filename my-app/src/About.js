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
class About extends Component {
    static propTypes = {
        // onTodoClick: PropTypes.func.isRequired
        
    }
    constructor(props){
        super(props)
        this.input = ''
    }
    
    render(){
        return (
            <div>
                <input 
                    ref={node => {
                        this.input = node
                    }}></input>
                <button onClick={e => {
                    this.props.dispatch(addTodo(this.input.value))
                    this.input.value = ''
                }}>添加</button>
            </div>
          );
    }
    
}
export default connect(  )(About)