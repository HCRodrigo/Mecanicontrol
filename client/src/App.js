import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cliente from './views/cliente/cliente';
import Loja from './views/loja/loja';
import Sidebar from './components/sidebar';
import Logar from './views/Logar/index';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Logar/>}/>
        <Route path='/cliente' element={<Cliente/>}/>
        <Route path='/lojas' element={<Loja/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
