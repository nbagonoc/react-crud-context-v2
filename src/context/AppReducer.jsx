const AppReducer =  (state,action) => {
    switch(action.type){
        case 'CREATE_ITEM':
            return {
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}

export default AppReducer;