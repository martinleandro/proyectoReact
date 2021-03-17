import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Menu = () => {

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
    <div>
      <button><Link to='/'>Home</Link></button>
      <button onClick={clickBotonCategorias}>Categorias</button>
      {menuExpandido && 
      <nav>
        <ul>
          <li><Link to='/categories/teclados'>Teclados</Link></li>
          <li><Link to='/categories/2'>Mouse</Link></li>
          <li><Link to='/categories/3'>Monitores</Link></li>
        </ul>
      </nav>}
    </div>
  )
}

export default Menu;