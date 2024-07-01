import { useEffect, useState } from 'react'
import './agendamento.css';

function Home() {
  //Estado para armazanar os usuarios
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {

    document.title = "agendamentos"

    //Função carregar usuarios
    async function carregarAgendamentos() {
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/agendamentos')
        if (!resposta.ok) {
          //Exibindo erro API
          console.debug("HTTP erro :" + resposta.status)
        } else {
          let dados = await resposta.json()
          setAgendamentos(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar agendamentos", +error)
      }
    }

    //Chamando função carregar usuario
    carregarAgendamentos()
  })

  return (
    <div className='box'>

    <div className='back-title-calendar'>
        <h1 className='title-calendar'>Agendamento</h1>
    </div>

    <a href="/criarAgendamento"><input className='button-criar' type="button" value="Criar" /></a>

    <div className='faixa-calendar'>
        <div className='faixa-calendar-icon'>
            <h1 className='icon-calendar'><i class='bx bxs-calendar icon' ></i></h1>
        </div>
      <table className='information'>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Hora</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map(agendamento => (
            <tr key={agendamento.id}>
              <td>{agendamento.dia}</td>
              <td>{agendamento.hora}</td>
              <td>{agendamento.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home