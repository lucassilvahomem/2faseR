import React, { useState } from 'react'
import './Body.css'

function Body() {
    const[inputValor, setinputValor] = useState('')

  return (
    <div className='container-body'>
      <h2>Controlinho financeiro</h2>
      <p>Saldo: {inputValor}</p>
      <input type="Number"
      value={inputValor}
      onChange={(event) => setinputValor(event.target.value)} />
      <button>Crédito</button>
      <button>Debito</button>
    </div>
  )
}

export default Body