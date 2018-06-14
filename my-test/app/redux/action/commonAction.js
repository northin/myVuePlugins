import {common_api} from "./../../api/index.js"
export let DICT = "DICT"
//字典
export const dict = (params) => async (dispatch) => {
    try {
        let response = await common_api.dict(params)
        await dispatch(getDict(response.data,params))
        // return response.data
    } catch (error) {
        console.log('error: ', error)
    }
}
export function getDict(data,params){
    return {type:DICT,data,params}
}