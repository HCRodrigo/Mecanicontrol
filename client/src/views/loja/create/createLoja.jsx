import { useState } from 'react'
import './createLoja.css'

function CreateLoja() {
    let [nome, setNome] = useState("")
    let [contato, setContato] = useState("")
    let [email, setEmail] = useState("")
    let [bairro, setBairro] = useState("")
    let [numero, setNumero] = useState("")
    let [rua, setRua] = useState("")
    let [complemento, setComplemento] = useState("")

    async function CadastrarLoja(event) {

        event.preventDefault()
        const lojaData = {
            nome,
            contato,
            email,
            bairro,
            numero,
            rua,
            complemento
        }

        try {
            const resposta = await fetch("/lojas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(lojaData)
            })

            if (!resposta.ok) {
                alert("Erro ao criar Loja")
                console.debug(resposta)
            } else {
                alert("Loja Cadastro")
                console.debug("Loja Cadastrada")
                window.location.href = "/loja"
            }
        } catch (error) {
            console.debug(error)
        }
    }

    return (
        <div className='box'>

            <div className='back-title-create-loja'>
                <h1 className='title-create-loja'>Cadastro de Loja</h1>
            </div>

            <form onSubmit={CadastrarLoja}>
            
                <input className='input-nome-loja' type="text" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)} />
                
                <input className='input-contato-loja' type="text" placeholder='contato' value={contato} onChange={e => setContato(e.target.value)} /><br />
                
                <input className='input-email-loja' type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                
                <input className='input-bairro-loja' type="text" placeholder='bairro' value={bairro} onChange={e => setBairro(e.target.value)} />
                
                <input className='input-numero-loja' type="text" placeholder='numero' value={numero} onChange={e => setNumero(e.target.value)} /><br />
                
                <input className='input-rua-loja' type="text" placeholder='rua' value={rua} onChange={e => setRua(e.target.value)} />
                
                <input className='input-complemento-loja' type="text" placeholder='complemento' value={complemento} onChange={e => setComplemento(e.target.value)} /><br />

                <a href="/loja"><input className='button-cancelar-loja' type="button" value="Cancelar" /></a>
                
                <button className='button-cadastrar-loja' type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateLoja