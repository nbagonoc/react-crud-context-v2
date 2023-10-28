import { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, {
        items: [],
        message: null,
        errors: {},
    });

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
