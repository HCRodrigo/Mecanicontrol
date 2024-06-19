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

      <div className='backclint'>
          <h1 className='titlecliente'>Clientes</h1>
      </div>
      
      <a href="/criarcliente">Criar</a>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Contato</th>
            <th>Rua</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id_cliente}>
              <td>{cliente.nome}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.rua}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  )
}

export default Home