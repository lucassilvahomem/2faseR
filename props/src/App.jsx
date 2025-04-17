import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[produtos, setProdutos] = useState([
    {
      modelo: "melancia",
      preco: 22
    },
    {
      modelo: "pneu",
      preco: 230
    },
    {
      modelo: "garrafa",
      preco: 2
    },
    {
      modelo: "notebook",
      preco: 6000
    },
    {
      modelo: "desktop",
      preco: 600
    },
  ])

  function testar(){
    // console.log(produtos);
  }

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/>

      <button onClick={testar}>Testar</button>

      {produtos.map((p) => (
        <Produto modelo={p.modelo} preco={p.preco}/>
      ))}

    </div>
  )
}

export default App
