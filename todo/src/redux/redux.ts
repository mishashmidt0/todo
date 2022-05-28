import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo-reducer";


const reducers = combineReducers({
    todoReducer
})


export const store = createStore(reducers)

export type storeType = ReturnType<typeof reducers>

