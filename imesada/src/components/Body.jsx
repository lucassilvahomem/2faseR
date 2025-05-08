import React, { useEffect, useState } from 'react'
import './Body.css'

function Body() {
    const[inputValor, setinputValor] = useState('')
    const[valortotal, setValortotal] = useState(15)
    const[inputObjeto, setinputObjeto] = useState('')
    const[objeto, setObjeto] = useState([])

    useEffect(() => console.log(valortotal), [valortotal])

    function Credito() {
      let total = Number(valortotal)
      let valor = Number(inputValor)
      setValortotal([total + valor])
      setinputValor('')
    }

    function Dedito() {
      let total = Number(valortotal)
      let valor = Number(inputValor)
      setValortotal([total - valor])
      setinputValor('')
    }

  return (
    <div className='container-body'>
      <h2 className='h2'>Controlinho financeiro</h2>
      <p>Saldo: {valortotal}</p>
      <input type="text" 
      value={inputObjeto}
      onChange={(event) => setinputObjeto(event.target.value)}/>
      <input type="Number"
      value={inputValor}
      onChange={(event) => setinputValor(event.target.value)} />
      <button onClick={Credito}>Crédito</button>
      <button onClick={Dedito}>Debito</button>
    </div>
  )
}

export default Body