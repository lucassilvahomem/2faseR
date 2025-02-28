import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Avisos from './components/Avisos'
import Temperatura from './components/Temperatura'

function App() {
  const [usuario, setUsuario] = useState("Bilu")
  const [senha, setSenha] = useState()

  return (
    <>
      <Avisos />
      <Conversao2 />
      <Conversao />
      <Estados />
      <Temperatura />
    </>
  )
}

export default App

