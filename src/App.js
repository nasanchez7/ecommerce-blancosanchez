
import './scss/styles.scss';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nav from './components/NavBar';

function App() {

  return (
    <div className="App">
      <Nav/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
