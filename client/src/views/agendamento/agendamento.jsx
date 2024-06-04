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
    <div className='container'>
      <h1>Todos os agendamentos</h1>
      <table>
        <thead>
          <tr>
            <th>id agendamento</th>
            <th>id client</th>
            <th>Dia</th>
            <th>Hora</th>            
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map(agendamento => (
            <tr key={agendamento.id}>
              <td>{agendamento.id}</td>
              <td>{agendamento.id_cliente}</td>
              <td>{agendamento.dia}</td>
              <td>{agendamento.hora}</td>
              <td>{agendamento.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home