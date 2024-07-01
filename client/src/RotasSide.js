import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Cliente from './views/cliente/read/cliente';
import CreateCliente from './views/cliente/create/createCliente'
import Loja from './views/loja/read/loja';
import CreateLoja from './views/loja/create/createLoja'
import Nota from './views/nota/read/nota'
import CreateNota from './views/nota/create/createNota'
import Agendamentos from './views/agendamento/read/agendamento'
import CreateAgendamentos from './views/agendamento/create/createAgendamento'
import Home from './views/home/home'

function RotasSide() {
    return (
        <>
    
            <Sidebar />
            <Routes>
                <Route path='/cliente' element={<Cliente/>}/>
                <Route path='/criarcliente' element={<CreateCliente/>}/>
                <Route path='/loja' element={<Loja/>}/>
                <Route path='/criarloja' element={<CreateLoja/>}/>
                <Route path='/nota' element={<Nota/>}/>
                <Route path='/criarnota' element={<CreateNota/>}/>
                <Route path='/agendamento' element={<Agendamentos/>}/> 
                <Route path='/criarAgendamento' element={<CreateAgendamentos/>}/> 
                <Route path='/home' element={<Home/>}/>          
            </Routes>
  
        </>
    )
}

export default RotasSide