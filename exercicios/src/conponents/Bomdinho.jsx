import React, { useState } from 'react'
import './Bomdinho.css'

function Bomdinho() {
    const[inputAlunos, setinputAlunos] = useState()
    const[inputMonitores, setinputMonitores] = useState()

function Aprovarbondinho() {
    let media = (Number(inputAlunos) + Number(inputMonitores)) 
    if(media <= 50){
        alert("Bondinho liberado")
    }else{
        alert("Bondinho rejeitado")
    }
}
  return (
    <div className='container-bondinho'>
        <h1>Bondinho</h1>
        <label htmlFor="">Quantos alunos vão no bomdinho</label>
        <input type="Number"
        value={inputAlunos}
        onChange={(event) => setinputAlunos(event.target.value)} />
        <label htmlFor="">Quantos monitores vão no bomdinho</label>
        <input type="Number"
        value={inputMonitores}
        onChange={(event) => setinputMonitores(event.target.value)} />
        <button onClick={Aprovarbondinho}>solicitar acesso ao bondinho</button>
    </div>
  )
}

export default Bomdinho