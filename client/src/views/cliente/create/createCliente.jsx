import { useState } from 'react'
import './createCliente.css'

function CreateCliente() {
    let [nome, setNome] = useState("")
    let [contato, setContato] = useState("")
    let [email, setEmail] = useState("")
    let [bairro, setBairro] = useState("")
    let [numero, setNumero] = useState("")
    let [rua, setRua] = useState("")
    let [complemento, setComplemento] = useState("")

    async function CadastrarCliente(event) {

        event.preventDefault()
        const clienteData = {
            nome,
            contato,
            email,
            bairro,
            numero,
            rua,
            complemento
        }

        try {
            const resposta = await fetch("/clientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(clienteData)
            })

            if (!resposta.ok) {
                alert("Erro ao criar cliente")
                console.debug(resposta)
            } else {
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
        <div className='box'>

            <div className='titleclientback'>
                <h1 className='titleclient'>Cadastro de Cliente</h1>
            </div>
            

            <form onSubmit={CadastrarCliente}>

                
                <input className='cadastro-client' type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} /><br />

                <input className='cadastro-client' type="text" placeholder='Contato' value={contato} onChange={e => setContato(e.target.value)} /><br />

                <input className='cadastro-client' type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                
                <input className='cadastro-client' type="text" placeholder='bairro' value={bairro} onChange={e => setBairro(e.target.value)} /><br />

                <input className='cadastro-client' type="text" placeholder='numero' value={numero} onChange={e => setNumero(e.target.value)} /><br />
                
                <input className='cadastro-client' type="text" placeholder='rua' value={rua} onChange={e => setRua(e.target.value)} /><br />
                
                <input className='cadastro-client' type="text" placeholder='complemento' value={complemento} onChange={e => setComplemento(e.target.value)} /><br />


                <a href="/cliente">Cancelar</a>
                
                <button type='submit'>Cadastrar</button>
            </form>
            
        </div>
    )
}

export default CreateCliente