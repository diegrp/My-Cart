import React, { createContext, useContext, useReducer } from 'react'
import cartItems from '../api/data'
import reducer from './reducer'

export const AppContext = createContext();

// const url = "endereço";

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0
}

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

// Ao executar a função, disparamos para nosso action um type e um id que recebemos de CartItem

const clearCart = () => {
  dispatch({ type:"CLEAR_CART" })
}

const remove = (id) => {
  dispatch({ type:"REMOVE", payload: id })
}

const increase = (id) => {
  dispatch({ type:"INCREASE", payload: id })
}

const decrease = (id) => {
  dispatch({ type:"DECREASE", payload: id })
}

useEffect( async () => {
  dispatch({ type:"LOADING" })
  /* API */
  // const response = await fetch(url);
  // const cart = await response.json();
  dispatch({ type:"DISPLAY_ITEMS", payload: state.cart, loading: false })
},[])

useEffect(() => {
  dispatch({ type:"GET_TOTALS" })
},[state.cart])

const toggleAmount = (id, type) => {
  dispatch({ type:"TOGGLE_AMOUNT", payload:{ id, type } })
}

    return(
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}