import React, { Component } from 'react';
import About from "./About.js"
import ToDoList from "./ToDoList.js"
import FilterToDo from "./filterTodo.js"

class Test extends Component {
    render(){
        return (
            <div>
                <About />
                <ToDoList />
                <FilterToDo filter="SHOW_ALL">
                    all
                </FilterToDo>
                <FilterToDo filter="SHOW_ACTIVE">
                    active
                </FilterToDo>
                <FilterToDo filter="SHOW_COMPLATE">
                    SHOW_COMPLATE
                </FilterToDo>
            </div>
          );
    }
    
}
export default Test