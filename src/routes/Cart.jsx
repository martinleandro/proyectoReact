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
         </div>
            

      ))}
        <div className="total-compra">
          Total Elementos: {cartContext.cantidadCart}<br/>
          Total Compra: ${cartContext.totalCarrito}
        </div>
          
      
    </div>
  )
}

export default Cart;
