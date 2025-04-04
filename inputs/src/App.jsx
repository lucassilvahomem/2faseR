import { useState } from 'react'
import './App.css'

function App() {
  const[inputUsername, setinputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')

function efetuarLogin(){
  alert(inputUsername)
  alert(inputSenha)
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
       <button onClick={efetuarLogin}>Login</button>
    </div>
  )
}

export default App
