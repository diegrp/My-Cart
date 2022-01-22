import React from 'react'
import { ReactComponent as Up } from '../../Assets/icons/up.svg'
import { ReactComponent as Down } from '../../Assets/icons/down.svg'
import { useGlobalContext } from '../../GlobalContext'

const CartItem = ({ id, title, price, img, amount }) => {

    // remover item, adicionar e diminuir a quantidade de itens do carrinho
    const { remove, toggleAmount } = useGlobalContext(); 

    // Informaçoes dos nossos itens e funções 
    return(
        <section className="cart-item">
            {/* Informaçoes do nosso item */}
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <p className="price-item">Preço: R$<span>{price},00</span></p>
                <button className="remove-btn" onClick={() => remove(id)}>
                    Remover Item
                </button>
            </div>
            {/* Botões de add e remover itens */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                <button className="amount-btn" onClick={() => toggleAmount(id, 'inc')}>
                    <Up/>
                </button>
                <div className="amount">{amount}</div>
                <button className="amount-btn" onClick={() => toggleAmount(id, 'dec')}>
                    <Down/>
                </button>
            </div>
        </section>
    )
}

export default CartItem