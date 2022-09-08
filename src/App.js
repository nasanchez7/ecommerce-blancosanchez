
import './scss/styles.scss';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nav from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContainer from './container/CategoryContainer';
import Carrusel from './components/Carrusel';
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<CategoryContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
