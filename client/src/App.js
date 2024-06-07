import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cliente from './views/cliente/cliente';
import Loja from './views/loja/loja';
import Sidebar from './components/sidebar';
import Logar from './views/Logar/index';
import Nota from './views/nota/nota'
import Agendamentos from './views/agendamento/agendamento'

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Logar/>}/>
        <Route path='/cliente' element={<Cliente/>}/>
        <Route path='/loja' element={<Loja/>}/>
        <Route path='/nota' element={<Nota/>}/>
        <Route path='/agendamento' element={<Agendamentos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
