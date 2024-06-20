import { useState } from 'react'
import './createNota.css'

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
        <div className='box'>

            <div className='back-title-create-nota'>
                <h1 className='title-create-nota'>Cadastro de Nota</h1>
            </div>
            
            <form onSubmit={CadastrarNota}>

                <input className='input-codigo-loja' type="text" placeholder='Codigo' value={codigo} onChange={e => setCodigo(e.target.value)} />
                
                <input className='input-nfabricacao-loja' type="text" placeholder='Nº de fabricação' value={n_fabricacao} onChange={e => setN_fabricacao(e.target.value)} />
                
                <input className='input-loja-loja' type="text" placeholder='Loja' value={id_loja} onChange={e => setId_loja(e.target.value)} /><br />

                <input className='input-unidade-loja' type="text" placeholder='Unidade' value={unidade} onChange={e => setUnidade(e.target.value)} />

                <input className='input-vunidade-loja' type="text" placeholder='Valor por unidade' value={valor_unidade} onChange={e => setValor_unidade(e.target.value)} />

                <input className='input-quantidade-loja' type="text" placeholder='Quantidade' value={qtd} onChange={e => setQtd(e.target.value)} /><br />

                <input className='input-localpeca-loja' type="text" placeholder='Local' value={local_peca} onChange={e => setLocal_peca(e.target.value)} />

                <input className='input-valor-loja' type="text" placeholder='Valor total' value={valor} onChange={e => setValor(e.target.value)} /><br />

                <input className='input-descricao-loja' type="text" placeholder='Descrição' value={descricao} onChange={e => setDescricao(e.target.value)} /><br />


                <a href="/nota"><input className='button-cancelar-nota' type="button" value="Cancelar" /></a>
                
                <button className='button-cadastrar-nota' type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateNota