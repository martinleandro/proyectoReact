import './App.scss';
import Header from './components/Header/Header';
import Home from './routes/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Categories from './routes/Categories';
import ProductDetail from './routes/ProductDetail';
import {useEffect} from 'react';
import db from './Firebase.config'
import Cart from './routes/Cart';
import CartProvider from './Context/CartContext';



const App = () => {

  useEffect(() => {
    let list= [];
    async function getItems() {
      const response = await db.collection('items').get();
      const datos = response.docs[0].data()
      console.log(datos.name)
      console.log(response.docs[0].data())
    }
   getItems();
  }, [])



  
  return (
    <BrowserRouter>
      
        <Header />
          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/categories/:id' component={Categories}/>
            <Route exact path='/item/:id' component={ProductDetail} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
      
    </BrowserRouter>
  );
}

export default App;
