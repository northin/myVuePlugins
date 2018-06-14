import {auth_api} from "./../../api/index.js"
import { actionFactory } from ".././factory/factory.js"
export let LOGIN = "LOGIN"
export let LOGIN_OUT = "LOGIN_OUT"
export let IS_LOGIN = "IS_LOGIN"
export let REGISTER = "REGISTER"
//登录
export const login = () => async (dispatch) => {
    try {
        let response = await auth_api.Login()
        await dispatch(userLogin(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
export const userLogin = actionFactory(LOGIN,"data")
// export function userLogin(data){
//     return {type:LOGIN,data}
// }
//登出
export const logout = () => async (dispatch) => {
    try {
        let response = await auth_api.Logout()
        await dispatch(userLoginOut(response.data))
        // return response.data
    } catch (error) {
        console.log('error: ', error)
    }
}
export const userLoginOut = actionFactory(LOGIN_OUT,"data")
// export function userLoginOut(data){
//     return {type:LOGIN_OUT,data}
// }
//注册
export const register = () => async (dispatch) => {
    try {
        let response = await auth_api.Register()
        await dispatch(userRegister(response.data))
        return response.data
    } catch (error) {
        console.log('error: ', error)
    }
}
export const userRegister = actionFactory(REGISTER,"data")
// export function userRegister(data){
//     return {type:REGISTER,data}
// }


// 是否登录
export const isLogin = () => async (dispatch) => {
    try {
        let response = await auth_api.IsLogin()
        await dispatch(userIsLogin(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
export const userIsLogin = actionFactory(IS_LOGIN,"data")
// export function userIsLogin(data){
//     return {type:IS_LOGIN,data}
// }