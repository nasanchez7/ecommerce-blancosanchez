import logo from './logo.svg';
import './scss/styles.scss';
import ItemListContainer from './container/ItemListContainer';
import Nav from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer texto="Prueba las mejores hamburguesas de Argentina!"/>
    </div>
  );
}

export default App;
