import { combineReducers } from 'redux'
import {
    addTodo,
    toggleTodo,
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    VisibilityFilter,
    ADD_TEST,
    TEST
} from "./action.js"
const { SHOW_ALL } = VisibilityFilter
const initialState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: [
        {
            id:0,
            text:'sjj',
            completed:true
        }
    ],
    test:[
        
    ]
};

function visibilityFilter(state= initialState,action){
    switch(action.type){
        case SET_FILTER:
            console.log(state)
            return Object.assign({},state,{
                visibilityFilter:action.filter,
                todos:state.todos.map((todo) => {
                    // console.log(todo,index)
                        if(todo.completed){
                            return Object.assign({},todo)
                        }
                        return todo
                    })
            })
        default:
            return state
    }

}

function todos(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
            console.log(state)
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false,
                        id: action.id,
                    }
                ]
            })
        case TEST:
            return Object.assign({},state,{
                test:[
                    ...state,
                    ...action.data
                ]
            }) 
        case ADD_TEST:
            console.log(state)
            return Object.assign({},state,{
                test:[
                    ...state.test,
                    {
                        text:action.text
                    }
                ]
            })  
        case TOGGLE_TODO:
            console.log(state)
            return Object.assign({}, state, {
                todos:state.todos.map((todo) => {
                // console.log(todo,index)
                    if(todo.id == action.id){
                        return Object.assign({},todo,{
                            completed:!todo.completed
                        })
                    }
                    return todo
                })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            })
        case SET_FILTER:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            })
        default:
            return state
    }
}
const todoApp = combineReducers({
    // visibilityFilter,
    todos
})

export default todos