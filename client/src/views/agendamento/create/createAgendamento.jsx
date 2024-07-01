import { useState } from 'react'

function CreateAgendamento() {
    let [id_cliente, setId_cliente] = useState([])
    let [data, setData] = useState("")
    let [hora, setHora] = useState("")
    let [descricao, setDescricao] = useState("")

    async function CadastrarAgendamento(event){
      
      event.preventDefault()
      const agendamentoData = {
          id_cliente,
          data,
          hora,
          descricao
      }

      try {
          const resposta = await fetch("/agendamentos",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(agendamentoData)
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
        <div className='box'>
            
            <div className='back-title-create-calendar'>
                <h1 className='title-create-calendar'>Adicionar Agendamento</h1>
            </div>
            
            <form onSubmit={CadastrarAgendamento}>
                <input className='input-id-cliente-calendar' type="text" placeholder='id do cliente' value={id_cliente} onChange={e => setId_cliente(e.target.value)} /><br />
            
                <input className='input-data-calendar' type="text" placeholder='data' value={data} onChange={e => setData(e.target.value)} /><br />
                
                <input className='input-hora-calendar' type="text" placeholder='hora' value={hora} onChange={e => setHora(e.target.value)} /><br />
                
                <input className='input-descricao-calendar' type="text" placeholder='descrição' value={descricao} onChange={e => setDescricao(e.target.value)} /><br />
                
                <a href="/agendamento"><input className='button-cancelar-calendar' type="button" value="Cancelar" /></a>
                
                <button className='button-cadastrar-calendar' type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateAgendamento