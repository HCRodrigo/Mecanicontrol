import { useEffect, useState } from 'react'
import './cliente.css';

function Home() {
  //Estado para armazanar os usuarios
  const [clientes, setClientes] = useState([])

  useEffect(() => {

    document.title = "clientes"

    //Função carregar usuarios
    async function carregarClientes() {
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/clientes')
        if (!resposta.ok) {
          //Exibindo erro API
          console.debug("HTTP erro :" + resposta.status)
        } else {
          let dados = await resposta.json()
          setClientes(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar clientes", +error)
      }
    }

    //Chamando função carregar usuario
    carregarClientes()
  })

  return (
    <div className='container'>
      <h1>Todos os clientes</h1>
      <table>
        <thead>
          <tr>
            <th>id cliente</th>
            <th>id mecanico</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Endereco</th>
            <th>Contato</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.id_mecanico}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.contato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home