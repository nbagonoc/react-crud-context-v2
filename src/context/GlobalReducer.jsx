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
        case 'SET_MESSAGE':
            return {
                errors: action.payload
            }
        case 'SET_ERRORS':
            return {
                errors: action.payload
            }

        default:
            return state
    }
}

export default GlobalReducer;