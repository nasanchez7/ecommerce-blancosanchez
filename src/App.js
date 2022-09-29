import './scss/styles.scss';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nav from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContainer from './container/CategoryContainer';
import Cart from './components/Cart';
import CarritoProvider from './context/CarritoProvider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CarritoProvider>
            <Nav />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoriaId' element={<CategoryContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/>
          </CarritoProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
