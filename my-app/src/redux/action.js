import { getData, postData } from './../api/index.js'

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TODDLE_TODO"
export const SET_FILTER = "SET_FILTER"

export const ADD_TEST = "ADD_TEST"
export const TEST = "TEST"
let nextTodoId = 1
export const VisibilityFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLATE: 'SHOW_COMPLATE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export function addTest1(text){
    return { type:ADD_TEST,text}
}
export const addTest = (obj) => async (dispatch) => {
    try {
        await postData(`/cat/add`,obj)
        let response = await postData(`/cat`)
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}

export function addTodo(text){
    return { type:ADD_TODO,text ,id: nextTodoId++}
}

export function toggleTodo(id){
    return { type:TOGGLE_TODO,id }
}


export function setVisibilityFilter(filter){
    return { type:SET_FILTER,filter }
}

export function saveReducer(data){
    return { type:TEST,data }
}


export const getTest = (id) => async (dispatch) => {
    try {
        let response = await getData(`/cat/${id}`)
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}

export const postTest = (params) => async (dispatch) => {
    try {
        let response = await postData(`/cat`,params)
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}

export const removeTest = (params) => async (dispatch) => {
    try {
        await postData(`/cat/del`,params)
        let response = await postData(`/cat`)
        await dispatch(saveReducer(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}






