import React, {useState} from 'react';


export const CartContext = React.createContext();




export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([]);

  const addItem = (item) => {
    console.log(item)
    let cartItem;
    console.log(cart)
    if(productExist(item.id)) {
      console.log('existe')
      const cantidad = cart.find(product => product.id == item.id).quantity
      console.log(cantidad)
      const updatedCart = cart.map(p => (p.id == item.id ? {...p, quantity:p.quantity+1} :p)) 
      setCart(updatedCart)
    }
    else {
      console.log('no existe')
      cartItem = {...item, quantity: 1}
      setCart([...cart, cartItem])
    }

  }

  const totalElementosCarrito = () => {
    if(cart.length > 0) {

    return cart.map(p => p.quantity).reduce((a,b) => {
      return a+b
    }, 0)}
    else {
      return 0;
    }
  }

  const totalPrecioCarrito = () => {
    if(cart.length > 0) {

    return cart.map(p => p).reduce((a,b) => {
      return a+b.price*b.quantity
    }, 0)}
    else {
      return 0;
    }
  }

  const productExist = (itemId) => {
    console.log(itemId)
    return cart.some(product => product.id == itemId)
  }

  return <CartContext.Provider value={{cart, addItem, cantidadCart:totalElementosCarrito(), totalCarrito:totalPrecioCarrito()}}>
    {children}
  </CartContext.Provider>
};



