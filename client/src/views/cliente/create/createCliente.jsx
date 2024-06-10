import { useState } from 'react'

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
        <div className='container'>
            <h1>Adicionar Cliente</h1>
            <form onSubmit={CadastrarCliente}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} /><br />
                <label>Contato:</label>
                <input type="text" value={contato} onChange={e => setContato(e.target.value)} /><br />
                <label>Email:</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label>Bairro:</label>
                <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} /><br />
                <label>Número:</label>
                <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br />
                <label>Rua:</label>
                <input type="text" value={rua} onChange={e => setRua(e.target.value)} /><br />
                <label>complemento:</label>
                <input type="text" value={complemento} onChange={e => setComplemento(e.target.value)} /><br />


                <a href="/cliente">Cancelar</a>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateCliente