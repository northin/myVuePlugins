import Api from "./../../api/index.js"
export let ADD = "ADD"
export let USER = "USER"
export function add(data){
    return {type:ADD , data}
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