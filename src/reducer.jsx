const reducer = ( state, action ) => {
  // Limpa todos os itens do carrinho
  if(action.type === 'CLEAR_CART'){
      return { ...state, cart:[] }
  }
  // Mostra os itens, que seja diferente do qual eu esteja removendo, verificação pelo id
  if(action.type === 'REMOVE'){
      return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
  }
  // adiciona mais um item referente a determinado grupo de itens pelo id
  if(action.type === 'INCREASE'){
      let tempCart = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload){
              return { ...cartItem, amount: cartItem.amount + 1 }
          }
          return cartItem;
      })

      return { ...state, cart: tempCart }
  }
  // remove um item referente a determinado grupo de itens pelo id
  if(action.type === 'DECREASE'){
      let tempCart = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload){
              return { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem;
          // aceita apenas itens com quantidade diferente de 0
      })
      .filter((cartItem) => cartItem.amount !== 0 ) 

      return { ...state, cart: tempCart }
  }
  // mostra o valor total dos nossos itens adicionado no carrinho e sua quantidade
  if(action.type === 'GET_TOTALS'){
      // cartTotal é nosso state, e cartItem é nosso state.cart
      let { amount, total } = state.cart.reduce((cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          // calculo do preço de todos itens
          const totalItem = price * amount;

          cartTotal.amount += amount; // quantidade total dos itens
          cartTotal.total += totalItem; // preço total do itens adicionado ao carrinho
          
          return cartTotal;
      },
      {
          amount: 0,
          total: 0
      })

      /*conversão para float e definição do número de casas após a vírgula da
      quantidade total dos itens*/

      total = parseFloat(total.toFixed(2)); 

      return { ...state, amount, total }
  }
  // mostra o nosso loading, antes de carregar nossos itens
  if(action.type === 'LOADING'){
      return { ...state, loading: true }
  }
  // desabiltia nosso loading, ao receber nosso carrinho dentro de payload
  if(action.type === 'DISPLAY_ITEMS'){
      return { ...state, cart: action.payload, loading: false }
  }
  // alternância entre adicionar e remover itens usando o tipo da ação e id, para saber qual item se refere
  if(action.type === 'TOGGLE_AMOUNT'){
      let tempCart = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload.id){
              if(action.payload.type === 'inc'){
                  return { ...cartItem, amount: cartItem.amount + 1 }
              }
              if(action.payload.type === 'dec'){
                  return { ...cartItem, amount: cartItem.amount - 1 }
              }
          }
          return cartItem;
          // aceita apenas itens com quantidade diferente de 0;
      })
      .filter((cartItem) => cartItem.amount !== 0 ) 

      return { ...state, cart: tempCart }
  }
  // throw new Error("no matching action type");
}

export default reducer