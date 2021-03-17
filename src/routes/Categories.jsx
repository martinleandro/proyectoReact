import Product from '../components/Product/Product'
import {useEffect, useState} from 'react'
import db from '../Firebase.config'

const Categories = (props) => {
  const Products = [
    {
      Id: 1,
      NombreProducto: 'Teclado',
      PrecioProducto: '$5000'
    },
    {
      Id: 2,
      NombreProducto: 'Teclado Gamer',
      PrecioProducto: '$52000'
    },
    {
      Id: 3,
      NombreProducto: 'Teclado Azul',
      PrecioProducto: '$55000'
    }
  ]
  
  useEffect(() => {
    let list= [];
    async function getItems() {
      const response = await db.collection('items').where('categoryid', '==', props.match.params.id).get();
      response.forEach(item => {
        console.log(item.data())
        list.push(item.data())
        
      })
      setProductos(list)
    }
  
   getItems();
  }, [])

  const [productos, setProductos] = useState([]);

  return (
    <div>
     Categoria {props.match.params.id}
     {productos.map(prod => {
       return <Product name={prod.name} price={prod.price} model={prod.model} id={'f3NZHyXEGEGbGW4lfRnt'} />
     })}
    </div>
  )
}

export default Categories;