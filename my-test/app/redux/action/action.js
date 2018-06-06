import Api from "./../../api/index.js"
export let ADD = "ADD"
export let USER = "USER"
export let LOGIN = "LOGIN"
export let LOGIN_OUT = "LOGIN_OUT"
export let IS_LOGIN = "IS_LOGIN"
export let TEST_REMOVE = "TEST_REMOVE"
export function add(data){
    return {type:ADD , data}
}
export function testRemove(data){
    return {type:TEST_REMOVE,data}
}

export const userQueryAll = () => async (dispatch) => {
    try {
        console.log(Api)
        let response = await Api.UserQueryAll("/user")
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
export function saveReducer( data ){
    return {type:USER,data}
}
export function userLogin(){
    return {type:LOGIN}
}

export function userLoginOut(){
    return {type:LOGIN_OUT}
}

export function userIsLogin(data){
    return {type:IS_LOGIN,data}
}

// 是否登录
export const isLogin = () => async (dispatch) => {
    try {
        let response = await Api.IsLogin()
        await dispatch(userIsLogin(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}