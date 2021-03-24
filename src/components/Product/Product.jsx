import {Link} from 'react-router-dom';
import "../Product/Product.scss";
import {CartContext} from '../../Context/CartContext';
import {useContext} from 'react';

const Product = (props) => {

  const cart = useContext(CartContext)

  const agregarCarrito = () => {
    const product = {
      id:props.id,
      name:props.name,
      model:props.model,
      price:props.price
    }
    cart.addItem(product);
  }



  return (
    <div>
      <div className="product-container">
       <div className="product-image">
        <img className="img-product" src={props.image} alt=""/> 
      </div>
      <div className="product-detail">
        <h3>Nombre Producto: {props.name}</h3>
        <h3>Model: {props.model}</h3>
        <h3>Precio: {props.price}</h3>
        <h3 className="boton-product-detail"><Link className="links" to={{
        pathname: '/item/' + props.id
        }}>Detalle</Link></h3>
        <h3 className="boton-product-detail" onClick={agregarCarrito}>Agregar</h3>
      </div>
    </div>
    </div>
    
  )
}

export default Product;