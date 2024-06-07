import { useState } from 'react'

function CreateNota() {
    let [id_loja, setId_loja] = useState("")
    let [codigo, setCodigo] = useState("")
    let [n_fabricacao, setN_fabricacao] = useState("")
    let [descricao, setDescricao] = useState("")
    let [qtd, setQtd] = useState("")
    let [unidade, setUnidade] = useState("")
    let [valor, setValor] = useState("")
    let [valor_unidade, setValor_unidade] = useState("")
    let [local_peca, setLocal_peca] = useState("")

    async function CadastrarNota(event){
      
        event.preventDefault()
        const notaData = {
            id_loja,
            codigo,
            n_fabricacao,
            descricao,
            qtd,
            unidade,
            valor,
            valor_unidade,
            local_peca
        }

      try {
          const resposta = await fetch("/notas",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(notaData)
          })

          if(!resposta.ok){
              alert("Erro ao criar Nota")
              console.debug(resposta)
          }else{
              alert("Nota Cadastro")
              console.debug("Nota Cadastrada")
              window.location.href = "/nota"
          }
        } catch (error) {
            console.debug(error)
        }
    }   
        
    return (
        <div className='container'>
            <h1>Adicionar Loja</h1>
            <form onSubmit={CadastrarNota}>
                <label>Id da loja:</label>
                <input type="text" value={id_loja} onChange={e => setId_loja(e.target.value)} /><br />
                <label>Codigo:</label>
                <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} /><br />
                <label>Número de fabricação:</label>
                <input type="text" value={n_fabricacao} onChange={e => setN_fabricacao(e.target.value)} /><br />
                <label>Descrição:</label>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} /><br />
                <label>Quantidde:</label>
                <input type="text" value={qtd} onChange={e => setQtd(e.target.value)} /><br />
                <label>Unidade:</label>
                <input type="text" value={unidade} onChange={e => setUnidade(e.target.value)} /><br />
                <label>Valor:</label>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} /><br />
                <label>Valor por unidade:</label>
                <input type="text" value={valor_unidade} onChange={e => setValor_unidade(e.target.value)} /><br />
                <label>Local de peça:</label>
                <input type="text" value={local_peca} onChange={e => setLocal_peca(e.target.value)} /><br />
                <a href="/nota">Cancelar</a>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateNota