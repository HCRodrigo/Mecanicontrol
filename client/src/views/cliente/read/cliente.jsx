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
    <div className='box'>

      <div className='back-title-client'>
          <h1 className='title-cliente'>Clientes</h1>
      </div>
      
      <a href="/criarcliente"><input className='button-criar' type="button" value="Criar" /></a>
      
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
            <tr key={cliente.id}>
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