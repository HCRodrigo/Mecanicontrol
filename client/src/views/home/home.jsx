import React from 'react'
import './home.css'


function home() {
  return (
    <div className='box'>

        <a href="/cliente"><button className='btn-client-home'><i class='bx bxs-user icon' ></i><br /><div className='title-btn-client'>Cliente</div></button></a>

        <a href="/loja"><button className='btn-loja-home'><i class='bx bxs-store icon' ></i><br /><div className='title-btn-loja'>Loja</div></button></a>

        <a href="/nota"><button className='btn-nota-home'><i class='bx bxs-notepad icon' ></i><br /><div className='title-btn-nota'>Notas</div></button></a>

        <a href="/agendamento"><button className='btn-calendario-home'><i class='bx bxs-calendar icon' ></i><br /><div className='title-btn-calendario'>Calendario</div></button></a>
    </div>
  )
}

export default home