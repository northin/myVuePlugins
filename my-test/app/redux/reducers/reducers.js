import { 
    add,
    ADD,
    USER, 
    LOGIN,
    userQueryAll
} from "./../action/action.js"
import { combineReducers } from 'redux'
const initialState = {
    test:[],
    user:[{name:"sj",age:12}],
    isAuth:true
};


function test(state=initialState,action){
    switch(action.type){
        case ADD:
            return Object.assign({},state,{
                test:[
                    ...state,
                    ...action.data
                ]
            })
        case USER:
            return Object.assign({},state,{
                user:[
                    ...state.user,
                    ...action.data
                ]
            })
        case LOGIN:
        return Object.assign({},state,{
            isAuth:true
        })
        default:
            return state 
    }
}


const todoApp = combineReducers({
    // visibilityFilter,
    test
})

export default test