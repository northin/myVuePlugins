import { 
    DICT,

} from "./../action/commonAction.js"
import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import "@util/util.js"
const initialState = Immutable.fromJS({
    dict:{}
});

function common(state=initialState,action){
    switch(action.type){
        case DICT:
            return state.setIn(["dict",action.params], action.data)
        default:
            return state 
    }
}




export default common