import React from 'react'
import CartItem from '../CartItem';
import { useGlobalContext } from '../../GlobalContext'

const CartContainer = () => {

    // dados da api, limpar carrinho e total de itens
    const { cart, clearCart, total } = useGlobalContext(); 

    // Verifica a quantidade de itens dentro da nossa api, e retorna os itens ou não.
    if(cart.length === 0){
        return (
            <section className="cart">
                <header>
                    <h2>Minha lista de items</h2>
                </header>
                <p className="empty-cart">
                    O carrinho está atualmente vazio
                </p>
            </section>
        )
    }

    return (
        // Container geral dos nossos itens
        <section className="cart">
            <header>
                <h2>Minha lista de items</h2>
            </header>
            {/* retorna todos os itens de nossa api, usando o map */}
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            {/* Valor total dos itens dentro do carrinho */}
            <footer>
                <hr/>
                <div className="total-cart">
                    <p>Total: R$<span>{total},00</span></p>
                </div>
                {/* Limpa todos os itens do carrinho */}
                <button className="btn clear-btn" onClick={clearCart}>
                    Limpar Carrinho
                </button>
            </footer>
        </section>
    )
}

export default CartContainer

