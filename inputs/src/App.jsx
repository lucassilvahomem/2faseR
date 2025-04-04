import { useState } from 'react'
import './App.css'

function App() {
  const[inputUsername, setinputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro, setErro] = useState(true)

function efetuarLogin(){
  // alert(inputUsername)
  // alert(inputSenha)
  if(inputUsername == 'lucas' && inputSenha == '69'){
    alert("pode entrar")
    setErro(false)
  }else{
    // alert("não pode entrar")
    setErro(true)
  }
}

  return (
    <div className='container-app'>
      <h1>Inputs controlados</h1>
      <label htmlFor="">Username</label>
      <input type="text"
       value={inputUsername} 
       onChange={(event) => setinputUsername(event.target.value)}/>

       <label htmlFor="">Senha</label>
       <input type="Number"
       value={inputSenha} 
       onChange={(event) => setInputSenha(event.target.value)}/>
       {/* {inputUsername} */}
       {erro && <span className='meg-error'>Credencias invalidas</span>}
       {/* <span className='Men-error'> Credencias invalido </span> */}
       <button onClick={efetuarLogin}>Login</button>
    </div>
  )
}

export default App
