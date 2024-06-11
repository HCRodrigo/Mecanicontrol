import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Agendamentos from './views/agendamento/agendamento'
import Cliente from './views/cliente/cliente';
import Loja from './views/loja/loja';
import Logar from './views/Logar/index';
import Nota from './views/nota/nota'

function RotasSide() {
    return (
        <>
    
            <Sidebar />
            <Routes>
                 <Route path='/' element={<Logar />} />
                <Route path='/loja' element={<Loja />} />
                <Route path='/nota' element={<Nota />} />
                <Route path='/cliente' element={<Cliente />} ></Route>
                <Route path='/agendamento' element={<Agendamentos />} />              
            </Routes>
  
        </>
    )
}

export default RotasSide