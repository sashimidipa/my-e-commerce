import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemCounter} from './components/ItemCounter/ItemCounter';
import {Pika} from './components/Pika/Pika';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import { CartScreen } from './components/CartScreeen/CartScreen';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'

function App() {

  
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCounter/>}/>
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/pika' element={<Pika/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
      </div>
      </CartProvider>
  );
}

export default App;
