import React, { useState } from 'react'
import './Filmesdavo.css'

function Filmesdavo() {
    const[inputAntigo, setinputAntigo] = useState ()
    const[inputNovo, setinputNovo] = useState ()
    const[resultado, setResultado] = useState ()

function Calcularalmento(){
    let antigo = Number(inputAntigo)
    let novo = Number(inputNovo)
    let diferenca = novo - antigo
    let percentual = (diferenca/antigo)*100

    setResultado(percentual)
}
  return (
    <div className='container-filmes'>
        <label htmlFor="">Valor antigo</label>
        <input type="Number" 
        value={inputAntigo}
        onChange={(event) => setinputAntigo(event.target.value)}/>
        <input type="Number" 
        value={inputNovo}
        onChange={(event) => setinputNovo(event.target.value)}/>
        <button onClick={Calcularalmento}>resultado</button>
        {resultado > 0 && 
        almento {resultado.tofixed(2)
        
        }
    </div>
  )
}

export default Filmesdavo