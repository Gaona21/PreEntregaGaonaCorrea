import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import CustomProvider from './componentes/CustomProvider.jsx';
import Cart from './componentes/Cart.jsx';
import Checkout from './componentes/Checkout.jsx';
import Footer from './componentes/Footer.jsx';

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoria' element={<ItemListContainer />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={ <Checkout /> }/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
