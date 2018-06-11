import { 
    add,
    testRemove,
    ADD,
    USER, 
    TEST_REMOVE,
    userQueryAll
} from "./../action/action.js"
// import { combineReducers } from 'redux'
import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import "@util/util.js"
import login from "./loginReducer.js"
// const initialState = ;
const initialState = Immutable.fromJS({
    test:[{id:1}],
    user:[{name:"sj",age:12}]
});

function test(state=initialState,action){
    switch(action.type){
        case ADD:
            console.log(action.data)
            return state.updateIn(["test"],list => list.push(action.data))
        case USER:
            return state.update("user",action.data)
        case TEST_REMOVE:
            return state.updateIn(["test"],list => list.delete(action.data))
        default:
            return state 
    }
}


const todoApp = combineReducers({
    // visibilityFilter,
    test,
    login
})

export default todoApp