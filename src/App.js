import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <Routes>

            <Route path = '/' element = { <ItemListContainer/> }/>
            <Route path = '/category/:categoria' element = { <ItemListContainer/> }/>
            <Route path = '/carrito' element = { <p>carrito</p> }/>
            <Route path = '/item/:id' element = { <ItemDetailContainer/> }/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
