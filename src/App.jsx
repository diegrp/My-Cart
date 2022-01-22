import React from 'react'
import Navbar from './Components/Navbar'
import { useGlobalContext } from './GlobalContext'
import CartContainer from './Components/CartContainer'

const App = () => {

    const { loading } = useGlobalContext();

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <main>
            <Navbar/>
            <CartContainer/>
        </main>
    )
}

export default App