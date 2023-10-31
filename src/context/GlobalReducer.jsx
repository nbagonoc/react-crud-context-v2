const GlobalReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return {
                item: action.payload.item,
                alert: action.payload.alert,
            }
        case 'SET_ITEMS':
            return {
                items: action.payload.items,
                alert: state.alert,
            }
        case 'DELETE_ITEM':
            return {
                items: state.items.filter(
                    (item) => item._id !== action.payload._id
                ),
                alert: action.payload.alert,
            }
        case 'CREATE_ITEM':
            console.log('triggered')
            console.log(action.payload.alert)
            return {
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'EDIT_ITEM':
            return {
                alert: action.payload.alert,
                errors: action.payload.errors,
            }
        case 'CLEAR_ALERT':
            return {
                ...state,
                alert: {},
            }
        default:
            return state
    }
}

export default GlobalReducer
