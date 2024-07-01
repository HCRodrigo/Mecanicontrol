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

      <div className='box'>
      
      <div className='back-title-loja'>
        <h1 className='title-loja'>Lojas</h1>
      </div>
     
      <a href="/criarloja"><input className='button-criar' type="button" value="Criar" /></a>

      <div className='faixa-client'>
        <div className='faixa-client-icon'>
            <h1 className='icon-client'><i class='bx bxs-store-alt icon' ></i></h1>
        </div>

        <table className='information'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Rua</th>
            </tr>
          </thead>
          <tbody>
            {lojas.map(loja => (
              <tr key={loja.id_loja}>
                <td>{loja.nome}</td>
                <td>{loja.rua}</td>
                <td>{loja.local_peca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
      
    </div>
  )
}

export default Home