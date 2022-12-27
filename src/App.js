import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      mensaje="Estamos trabajando en algo aqui, vuelve mas tarde..."
      />
    </div>
  );
}

export default App;
