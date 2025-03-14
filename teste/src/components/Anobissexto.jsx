import { useState } from 'react'
import './Anobissexto.css'

function Anobissexto() {
    const[resultado, setResultado] = useState('resultado não calculado')

    function lerAno(){
        let ano = Number(prompt("digite o ano"))
        if(ano % 4 == 0){
            setResultado("é ano bissexto")
        }else{
            setResultado("não é bissexto")
        }
    }

  return (
    <div className='container-anobissexto'>
        <h2>anobissexto</h2>

        <button onClick={lerAno}>informar ano</button>
        <p>
        {resultado}
        </p>
    </div>
  )
}

export default Anobissexto