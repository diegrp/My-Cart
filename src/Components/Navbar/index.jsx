import React from 'react'
import cart from '../../Assets/icons/cart.svg'
import { useGlobalContext } from '../../GlobalContext'

const Navbar = () => {

    /* Quantidade de todos os nossos itens*/
    const { amount } = useGlobalContext();

    /* Menu com nossa quantidade de itens */
    return (
        <nav>
            <div className="nav-center">
                { /*Nome do app*/} 
                <h2>My Cart</h2>
                <div className="nav-container">
                    { /* img carrinho*/}
                    <img style={{ width:'45px' }} src={cart} alt="bag" />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar