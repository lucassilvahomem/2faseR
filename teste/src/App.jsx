import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Avisos from './components/Avisos'
import Temperatura from './components/Temperatura'
import Anobissexto from './components/Anobissexto'
import ConversãoTempo from './components/ConversãoTempo'
import Trajetopomar from './components/Trajetopomar'

function App() {
  const [usuario, setUsuario] = useState("Bilu")
  const [senha, setSenha] = useState()

  return (
    <>
      <ConversãoTempo />
      <Anobissexto />
      <Avisos />
      <Conversao2 />
      <Conversao />
      <Estados />
      <Temperatura />
      <Trajetopomar />
    </>
  )
}

export default App

