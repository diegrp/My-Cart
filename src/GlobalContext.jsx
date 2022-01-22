import React, { createContext, useContext, useReducer } from 'react'
import cartItems from '../api/data'
import reducer from './reducer'

export const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0
}

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}