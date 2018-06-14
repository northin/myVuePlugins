import {auth_api} from "./../../api/index.js"
export let ADD = "ADD"
export let USER = "USER"
export let TEST_REMOVE = "TEST_REMOVE"
export function add(data){
    return {type:ADD , data}
}
export function testRemove(data){
    return {type:TEST_REMOVE,data}
}

export const userQueryAll = () => async (dispatch) => {
    try {
        let response = await auth_api.UserQueryAll("/user")
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
export function saveReducer( data ){
    return {type:USER,data}
}
