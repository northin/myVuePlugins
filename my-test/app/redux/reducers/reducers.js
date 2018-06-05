import { 
    add,
    ADD,
    USER, 
    LOGIN,
    userQueryAll
} from "./../action/action.js"
// import { combineReducers } from 'redux'
import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
// const initialState = ;
const initialState = Immutable.fromJS({
    test:[{id:1}],
    user:[{name:"sj",age:12}],
    isAuth:true
});

function test(state=initialState,action){
    switch(action.type){
        case ADD:
            console.log(action.data)
            return state.updateIn(["test"],list => list.push(action.data))
        case USER:
            return state.update("user",action.data)
        case LOGIN:
            return state.set("isAuth",true)
        default:
            return state 
    }
}
const initialState1 = Immutable.Map({});
function test1(state=initialState1,action){
    switch(action.type){
        case ADD:
            return state.set("test1",action.data)
        case USER:
            return state.set("user1",action.data)
        case LOGIN:
            return state.setIn(["test","isAuth1"],true)
        default:
            return state 
    }
}

const todoApp = combineReducers({
    // visibilityFilter,
    test,
    test1
})

export default todoApp