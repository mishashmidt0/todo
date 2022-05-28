enum todoActionType {
    AddBD = "ADD-BD-TODO",
    CHANGEisDONE = "CHANGE-IS-DONE",
}

export type addTodo = {
    type: todoActionType.AddBD
    state: stateTodo
}
export type changeIsDoneTask = {
    type: todoActionType.CHANGEisDONE
    id: number;
    isDone: boolean
}

export type ActionType = addTodo | changeIsDoneTask

export interface taskTodo {
    id: number,
    name: string,
    shortdesc: string,
    description: string,
    isdone: boolean,
    date: string
}


export type  stateTodo = Array<taskTodo>

const initioState = [{
    id: 1,
    name: 'Название',
    shortdesc: 'Описание',
    description: 'Описание',
    isdone: false,
    date: '01-01-2001'
}]

export const todoReducer = (state: stateTodo = initioState, action: ActionType): stateTodo => {

    switch (action.type) {
        case todoActionType.AddBD:
            return [...action.state]

        case todoActionType.CHANGEisDONE:
            return [...state.map((el) => el.id === action.id ? {...el, isdone: action.isDone} : el)]

        default:
            return state
    }
}

export const addBdTodo = (state: stateTodo): addTodo => {
    return {type: todoActionType.AddBD, state}
}

export const changeIsDoneTask = (id: number, isDone: boolean): changeIsDoneTask => {
    return {type: todoActionType.CHANGEisDONE, id, isDone}
}

