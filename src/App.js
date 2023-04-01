import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './App.css';

import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import { ItemCounter } from './components/ItemCounter/ItemCounter';
import { Pika } from './components/Pika/Pika';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'}/>
        <Pika/>
        <ItemCounter/>
      </div>
    </>
  )
}

export default App;
