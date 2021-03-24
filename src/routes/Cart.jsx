import {CartContext} from '../Context/CartContext';
import React, {useContext} from 'react';
import "../routes/Cart.scss"


const Cart = () => {

  const cartContext = useContext(CartContext)
  console.log(cartContext)
  return (
    <div>


      {cartContext.cart.map(product => (

        <div className="compra-final">
          <h2>Nombre: {product.name}</h2>
          <h2>Cantidad: {product.quantity}</h2>
          <h3>Precio: ${product.price}</h3>
          <h3>Precio total: ${product.quantity*product.price}</h3>

          <div>
          Total Elementos: {cartContext.cantidadCart}
          Total Compra: ${cartContext.totalCarrito}
          </div>
         </div>
            

      ))}

          
      
    </div>
  )
}

export default Cart;
