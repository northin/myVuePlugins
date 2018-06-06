import { 
    LOGIN,
    LOGIN_OUT,
    IS_LOGIN,
    userIsLogin
} from "./../action/action.js"
// import { combineReducers } from 'redux'
import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import "@util/util.js"
// const initialState = ;
const initialState = Immutable.fromJS({
    isAuth:false
});

function login(state=initialState,action){
    switch(action.type){
        case LOGIN:
            return state.set("isAuth",true)
        case LOGIN_OUT:
            return state.set("isAuth",false)
        case IS_LOGIN:
            console.log(action.data)
            if(action.data.errorCode){
                console.log(1)
                return state.set("isAuth",false)
            }else{
                console.log(2)
                return state.set("isAuth",true)
            }
        default:
            return state 
    }
}




export default login