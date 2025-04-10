import React, { useState } from 'react'
import './Aprovadooureprovado.css'

function Aprovadooureprovado() {
    const[inputNota1, setinputNota1] = useState()
    const[inputNota2, setinputNota2] = useState()

function Calcularnotafinal(){
    let media = (inputNota1 + inputNota2) / 2
    if(media >= 7){
        alert("voce passou")
    }else if(media < 7 && media >= 4){
        alert("voce está em recuperação")
    }else{
        alert("voce reprovou")
    }
}

  return (
    <div className='container-prova'>
        <h1>Aprovado ou reprovado</h1>
        <label htmlFor="">Digite suas notas</label>
        <input type="Number" 
        value={inputNota1}
        onChange={(event) => setinputNota1(event.target.value)}/>
        <input type="Number" 
        value={inputNota2}
        onChange={(event) => setinputNota2(event.target.value)}/>

        <button onClick={Calcularnotafinal}>Nota final</button>
    </div>
  )
}

export default Aprovadooureprovado