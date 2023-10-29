const GlobalReducer =  (state,action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                items: action.payload.items,
                message: action.payload.message,
            }
        case 'DELETE_ITEM':
            console.log(action.payload)
            return {
                items: state.items.filter((item) => item._id !== action.payload._id),
                message: action.payload.message,
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