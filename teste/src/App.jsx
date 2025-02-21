import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState()
  const [nome,setNome] = useState()

  function lerNome(){
    let nome = prompt("digite o nome")
    setNome(nome)
  }
  function lerUsuario(){
    let resposta = prompt("digite o novo usuario")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>ESTADOS</h1>
      nome: {nome}
      <div></div>
      Usuario: {usuario}
      <div>
      <button onClick={lerNome}>trocar nome</button>
      <button onClick={lerUsuario}>trocar ususario</button>
      </div>
    </>
  )
}

export default App
