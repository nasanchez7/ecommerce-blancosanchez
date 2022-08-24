
import './scss/styles.scss';
import ItemListContainer from './container/ItemListContainer';
import Nav from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
