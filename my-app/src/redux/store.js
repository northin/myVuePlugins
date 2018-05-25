import {createStore} from "redux"

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from "./action.js"



let store =  createStore(todoApp)

console.log(store.getStore())
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo("learn react"))
store.dispatch(addTodo("learn redux"))
store.dispatch(addTodo("learn english"))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))



unsubscribe()







