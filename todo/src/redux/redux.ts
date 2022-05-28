import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo-reducer";
import {filterReducer} from "./filter-reducer";


const reducers = combineReducers({
    todoReducer,
    filterReducer
})


export const store = createStore(reducers)

export type storeType = ReturnType<typeof reducers>

