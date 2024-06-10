import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cliente from './views/cliente/read/cliente';
import CreateCliente from './views/cliente/create/createCliente'
import Loja from './views/loja/read/loja';
import CreateLoja from './views/loja/create/createLoja'
import Sidebar from './components/sidebar';
import Logar from './views/Logar/index';
import Nota from './views/nota/read/nota'
import CreateNota from './views/nota/create/createNota'
import Agendamentos from './views/agendamento/read/agendamento'

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Logar/>}/>
        <Route path='/cliente' element={<Cliente/>}/>
        <Route path='/criarcliente' element={<CreateCliente/>}/>
        <Route path='/loja' element={<Loja/>}/>
        <Route path='/criarloja' element={<CreateLoja/>}/>
        <Route path='/nota' element={<Nota/>}/>
        <Route path='/criarnota' element={<CreateNota/>}/>
        <Route path='/agendamento' element={<Agendamentos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
