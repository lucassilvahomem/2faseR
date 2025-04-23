import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[inputModelo, setinputModelo] = useState('')
  const[inputPreco, setinputPreco] = useState('')
  const[produtos, setProdutos] = useState([
    {id: Date.now()+0, modelo: "melancia", preco: 22},
    {id: Date.now()+1, modelo: "pneu", preco: 230},
    {id: Date.now()+2, modelo: "garrafa", preco: 2},
    {id: Date.now()+3, modelo: "notebook", preco: 6000},
    {id: Date.now()+4, modelo: "desktop", preco: 600},
  ])

  function Cadastrar(){
    let produto = {
      id:Date.now(), 
      modelo: inputModelo, 
      preco: Number(inputPreco)
    }
  setProdutos([produto, ...produtos])
  }

  useEffect(() =>
    console.log(produtos)
    ,[produtos])

  function testar(){
    
    let produto = {
      id:Date.now(), 
      modelo:"produto secreto", 
      preco:10
    }

    setProdutos([...produtos,produto])
    // console.log(produtos);
  }

  return (
    <div className='container-app'>
      <div className='inputs'>
        <label htmlFor=""> Modelo </label>
        <input type="text"
        value={inputModelo}
        onChange={(event) => setinputModelo(event.target.value)} />
        <label htmlFor=""> Preço </label>
        <input type="Number"
        value={inputPreco}
        onChange={(event) => setinputPreco(event.target.value)} />
        <button onClick={Cadastrar}> cadastrar produtos</button>
      </div>
      {/* <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/> */}

      <button onClick={testar}>Testar</button>

      {/* {produtos.map((p, index) => (
        <Produto modelo={p.modelo} preco={p.preco}/>
      ))} */}
      <div className='cards'>
      {produtos.map((p) => (
        <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id}/>
      ))}
      </div>
      

    </div>
  )
}
export default App
