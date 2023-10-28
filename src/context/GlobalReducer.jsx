const GlobalReducer =  (state,action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                items: action.payload
            }
        case 'CREATE_ITEM':
            return {
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}

export default GlobalReducer;