import { useState } from 'react'

function CreateLoja() {
    let [nome, setNome] = useState("")
    let [email, setEmail] = useState("")
    let [endereco, setEndereco] = useState("")
    let [contato, setContato] = useState("")

    async function CadastrarLoja(event){
      
      event.preventDefault()
      const lojaData = {
          nome,
          email,
          endereco,
          contato
      }

      try {
          const resposta = await fetch("/lojas",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(lojaData)
          })

          if(!resposta.ok){
              alert("Erro ao criar Loja")
              console.debug(resposta)
          }else{
              alert("Loja Cadastro")
              console.debug("Loja Cadastrada")
              window.location.href = "/loja"
          }
        } catch (error) {
            console.debug(error)
        }
    }   
        
    return (
        <div className='container'>
            <h1>Adicionar Loja</h1>
            <form onSubmit={CadastrarLoja}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} /><br />
                <label>Email:</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Endereço:</label>
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} /><br />
                <label>Contato:</label>
                <input type="text" value={contato} onChange={e => setContato(e.target.value)} /><br />
                <a href="/loja">Cancelar</a>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateLoja