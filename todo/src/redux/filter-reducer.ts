type filterStateType = {
    active: boolean
}
const initState = {
    active: false
}
type actionType = {
    type: 'change-active'
    active: boolean
}
export const filterReducer = (state: filterStateType = initState, action: actionType): filterStateType => {

    switch (action.type) {
        case 'change-active':
            return {active: action.active}

        default:
            return state
    }
}

export const changeActive = (active: boolean): actionType => {
    return {type: 'change-active', active}
}


