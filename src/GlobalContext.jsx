import React, { createContext, useContext } from 'react'

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