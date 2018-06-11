import Api from "./../../api/index.js"
export let LOGIN = "LOGIN"
export let LOGIN_OUT = "LOGIN_OUT"
export let IS_LOGIN = "IS_LOGIN"

//登录
export const login = () => async (dispatch) => {
    try {
        let response = await Api.Login()
        await dispatch(userLogin(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
export function userLogin(data){
    return {type:LOGIN,data}
}

export const logout = () => async (dispatch) => {
    try {
        let response = await Api.Logout()
        await dispatch(userLoginOut(response.data))
        // return response.data
    } catch (error) {
        console.log('error: ', error)
    }
}
export function userLoginOut(data){
    return {type:LOGIN_OUT,data}
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
export function userIsLogin(data){
    return {type:IS_LOGIN,data}
}