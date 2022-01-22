import React, { createContext, useContext } from 'react'
import cartItems from '../api/data'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}