import Product from '../components/Product/Product'
import {useEffect, useState} from 'react'
import db from '../Firebase.config'

const Categories = (props) => {
  
  
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
  }, [props.match.params.id])

  const [productos, setProductos] = useState([]);

  return (
    <div>
     <h3 className="boton-product-detail">Categoria {props.match.params.id}</h3> 
     {productos.map(prod => {
       return <Product image={prod.image} name={prod.name} price={prod.price} model={prod.model} id={prod.productid} />
     })}
    </div>
  )
}

export default Categories;