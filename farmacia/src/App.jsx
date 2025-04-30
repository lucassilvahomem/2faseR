import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div>
      <div className='container-topo'>
      <img className='logo' src="/img/farmarcia-logo-pq.PNG.png" alt="" />
      <h2>Fármacia da Márcia</h2>
      <img className='placa' src="/img/farmarcia-placa.PNG.png" alt="" />
      </div>
      <div className='centro-topo'>
        <h1>Camisetas da farmarcia</h1>
        </div>
      <div className='container-centro'>
        <img src="/img/farmarcia-camisetas.PNG.png" alt="" />
        <label htmlFor="">Camisetas tamanho P</label>
        <img src="/img/farmarcia-camisetas.PNG.png" alt="" />
        <label htmlFor="">Camisetas tamanho M</label>
        <img src="/img/farmarcia-camisetas.PNG.png" alt="" />
        <label htmlFor="">Camisetas tamanho G</label>
        <img src="/img/farmarcia-camisetas.PNG.png" alt="" />
        <label htmlFor="">Camisetas tamanho GG</label>
      </div>
      <div className='container-baixo'>
        <h2>Cartões da farmacia</h2>
        <img src="/img/farmarcia-cartoes.PNG.png" alt="" />
      </div>
    </div>
  )
}

export default App
