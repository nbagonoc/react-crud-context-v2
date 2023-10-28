import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState ={
    items: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    const createItem = item => {
        dispatch({
            type: 'CREATE_ITEM',
            payload: item
        })
    }


    return (
        <GlobalContext.Provider value={{
            items: state.items,
            createItem,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
