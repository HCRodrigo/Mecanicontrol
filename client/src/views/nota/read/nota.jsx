import { useEffect, useState } from 'react'
import './nota.css';

function Home() {
  //Estado para armazanar os usuarios
  const [notas, setNotas] = useState([])

  useEffect(() => {

    document.title = "notas"

    //Função carregar usuarios
    async function carregarNotas() {
      try {
        //Fazer uma chamada da API
        const resposta = await fetch('/notas')
        if (!resposta.ok) {
          //Exibindo erro API
          console.debug("HTTP erro :" + resposta.status)
        } else {
          let dados = await resposta.json()
          setNotas(dados)
        }
      } catch (error) {
        console.error("Erro ao buscar notas", +error)
      }
    }

    //Chamando função carregar usuario
    carregarNotas()
  })

  return (
    <div className='container'>
      <h1>Todas as notas</h1>
      <table>
        <thead>
          <tr>
            <th>id nota</th>
            <th>id mecanico</th>
            <th>id loja</th>
            <th>Codigo</th>
            <th>Número de fabricação</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Unidade</th>
            <th>Valor</th>
            <th>Valor por unidade</th>
            <th>Local da peça</th>
          </tr>
        </thead>
        <tbody>
          {notas.map(nota => (
            <tr key={nota.id}>
              <td>{nota.id}</td>
              <td>{nota.id_mecanico}</td>
              <td>{nota.id_loja}</td>
              <td>{nota.codigo}</td>
              <td>{nota.n_fabricacao}</td>
              <td>{nota.descricao}</td>
              <td>{nota.qtd}</td>
              <td>{nota.unidade}</td>
              <td>{nota.valor}</td>
              <td>{nota.valor_unidade}</td>
              <td>{nota.local_peca}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/criarnota">Criar</a>
    </div>
  )
}

export default Home