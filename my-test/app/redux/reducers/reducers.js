import { 
    add,
    ADD,
    USER, 
    userQueryAll
} from "./../action/action.js"
import { combineReducers } from 'redux'
const initialState = {
    test:[],
    user:[{name:"sj",age:12}]
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
        default:
            return state 
    }
}


const todoApp = combineReducers({
    // visibilityFilter,
    test
})

export default test