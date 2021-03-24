import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import './Menu.scss'
import cartImage from "../../img/cart.png"
import {CartContext} from '../../Context/CartContext';


const Menu = () => {

  const cart = useContext(CartContext)

  const [menuExpandido, setMenuExpandido] = useState(false)
  
  const clickBotonCategorias = () => {
    if (menuExpandido === true) {
      setMenuExpandido(false)
    } else {
      setMenuExpandido(true)
    }
  }

  useEffect(() => {
    
  });
  

  return (
    <div className="div-menu">
      <nav className="pegado">
        <ul className="lista-menu">
          <li className="botones"><Link className="links" to='/'>Home</Link></li>
          <li onClick={clickBotonCategorias} className="botones links" >Categorias
          {menuExpandido && 
          <nav className="sub-menu">
            <ul>
              <li className="links"><Link className="links" to='/categories/teclados'>Teclados</Link></li>
              <li className="links"><Link className="links" to='/categories/video'>Placas de video</Link></li>
              <li className="links"><Link className="links" to='/categories/monitor'>Monitores</Link></li>
            </ul>
            </nav>}
          </li>
          <li className="botones"><Link className="links" to=''>Contacto</Link></li>
          <li className="botones"><Link className="links" to='/'>Nosotros</Link></li>
          <li className="links"><Link className="cantidad-carrito" to='/cart'><img className="cart" src={cartImage} alt=""/>{cart.cantidadCart}</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;