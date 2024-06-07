import { useEffect, useState } from 'react'
import './loja.css';

function Home() {
  //Estado para armazanar os usuarios
  const [lojas, setLojas] = useState([])

  useEffect(() => {

    document.title = "lojas"

    //Função carregar usuarios
    async function carregarLojas() {
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/lojas')
        if (!resposta.ok) {
          //Exibindo erro API
          console.debug("HTTP erro :" + resposta.status)
        } else {
          let dados = await resposta.json()
          setLojas(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar clientes", +error)
      }
    }

    //Chamando função carregar usuario
    carregarLojas()
  })

  return (
    <div className='container'>
      <h1>Todas as lojas</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Endereco</th>
            <th>Contato</th>
          </tr>
        </thead>
        <tbody>
          {lojas.map(loja => (
            <tr key={loja.id}>
              <td>{loja.id}</td>
              <td>{loja.nome}</td>
              <td>{loja.email}</td>
              <td>{loja.endereco}</td>
              <td>{loja.contato}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/criarloja">Criar</a>
    </div>
  )
}

export default Home