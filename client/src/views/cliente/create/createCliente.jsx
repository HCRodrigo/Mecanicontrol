import { useState } from 'react'

function CreateCliente() {
    let [id_mecanico, setId_mecanico] = useState([])
    let [nome, setNome] = useState("")
    let [email, setEmail] = useState("")
    let [endereco, setEndereco] = useState("")
    let [contato, setContato] = useState("")

    async function CadastrarCliente(event){
      
      event.preventDefault()
      const clienteData = {
          id_mecanico,
          nome,
          email,
          endereco,
          contato
      }

      try {
          const resposta = await fetch("/clientes",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(clienteData)
          })

          if(!resposta.ok){
              alert("Erro ao criar cliente")
              console.debug(resposta)
          }else{
              alert("Cliente Cadastro")
              console.debug("Cliente Cadastrada")
              window.location.href = "/cliente"
          }
        } catch (error) {
            console.debug(error)
        }
    }   

  /*
  <select 
      name="" 
      id=""
      value={id_categoria}
      onChange={e => setid_categoria(e.target.value)}
      >
    {categorias.map(categoria=>(
          <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nome}</option>
      ))}                
  </select>
  */
        
    return (
        <div className='container'>
            <h1>Adicionar Cliente</h1>
            <form onSubmit={CadastrarCliente}>
                <label>Id do mecânico:</label><br />
                <input type="text" value={id_mecanico} onChange={e => setId_mecanico(e.target.value)} /><br />
                <label>Nome:</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} /><br />
                <label>Email:</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Endereço:</label>
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} /><br />
                <label>Contato:</label>
                <input type="text" value={contato} onChange={e => setContato(e.target.value)} /><br />
                <a href="/loja">Cancelar</a>
                <button type='submit'>Criar Cliente</button>
            </form>
        </div>
    )
}

export default CreateCliente