import {useEffect, useState} from 'react'
import './logar.css';

function Logar() {
    const[nome,setNome] = useState("")
    const[senha,setSenha] = useState("")
    
    useEffect(()=>{
        document.title = "Tela Login"
    },[])

    async function efetuarLogin(){
        try{
            const resposta = await fetch("/logar",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({nome, senha})
                }
            )
            if(!resposta.ok){
                alert("Nome ou Senha Invalidos!!!")
                throw new Error("Erro na requisição"+resposta.status)
            }else{
                const dados = await resposta.json()
                localStorage.setItem("id",dados.id)
                window.location.href = "/menu"
            }
        }catch(error){
            console.error("Erro ao fazer login",error)
        }
    }
  
    return (
   
        <div className='fundo'>

        <br />

        <div className='box-login'>

        <h1 className='title-login'>Login</h1> 

        <input className='nome-login' type="text" placeholder='Nome' value={nome} onChange={(e)=>setNome(e.target.value)}/> <br />

        <input className='senha-login' type="password" placeholder='Senha' value={senha}onChange={(e)=>setSenha(e.target.value)}/> <br />

        <button className='btn-login' onClick={efetuarLogin}>Logar</button>
        </div>

        </div>

    
  )
}

export default Logar