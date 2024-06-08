import { useState } from 'react'

function CreateAgendamento() {
    let [id_cliente, setId_cliente] = useState([])
    let [data, setData] = useState("")
    let [hora, setHora] = useState("")
    let [descricao, setDirecao] = useState("")

    async function CadastrarAgendamento(event){
      
      event.preventDefault()
      const clienteData = {
          id_mecanico,
          nome,
          email,
          endereco,
          contato
      }

      try {
          const resposta = await fetch("/agendamentos",{
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
              alert("Agendamento Cadastro")
              console.debug("Agendamento Cadastrada")
              window.location.href = "/agendamento"
          }
        } catch (error) {
            console.debug(error)
        }
    }   
        
    return (
        <div className='container'>
            <h1>Adicionar Cliente</h1>
            <form onSubmit={CadastrarAgendamento}>
                <label>Id do cliente:</label><br />
                <input type="text" value={id_cliente} onChange={e => setId_cliente(e.target.value)} /><br />
                <label>Data:</label>
                <input type="text" value={data} onChange={e => setData(e.target.value)} /><br />
                <label>Hora:</label>
                <input type="text" value={hora} onChange={e => setHora(e.target.value)} /><br />
                <label>Descrição:</label>
                <input type="text" value={descricao} onChange={e => setEndereco(e.target.value)} /><br />
                <a href="/loja">Cancelar</a>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateAgendamento