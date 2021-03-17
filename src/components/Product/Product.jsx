import {Link} from 'react-router-dom';

const Product = (props) => {
  return (
    <div>
      <button><Link to={{
        pathname: '/item/' + props.id
      }}>Detalle</Link></button>
      Nombre Producto: {props.name}
      Foto: 
      Precio: {props.price}
      Model: {props.model}
    </div>
  )
}

export default Product;