const GlobalReducer =  (state,action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                items: action.payload,
            }
        case 'DELETE_ITEM':
            return {
                items: state.items.filter((item) => item._id !== action.payload._id)
            }
        case 'CREATE_ITEM':
            return {
                message: action.payload.message,
                errors: action.payload.errors,
            }

        default:
            return state
    }
}

export default GlobalReducer;