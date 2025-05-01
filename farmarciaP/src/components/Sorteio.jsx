import { useState } from 'react'
import './Sorteio.css'
import { useEffect } from 'react'

function Sorteio() {
    const[inputNome, setinputNome] = useState ('')
    const[nomes, setNomes] = useState ([])
    
    useEffect(() => console.log(nomes),[nomes])

    function cadastrarNome(){
        setNomes([inputNome, ...nomes])
    }

  return (
    <div className='container-sorteio'>
        <h2>Sorteio</h2>
        <p>Inscreva-se aqui para o sorteio de uma linda camiseta</p>
        <label htmlFor=""> Nome </label>
        <input type="text" 
        value={inputNome}
        onChange={(event) => setinputNome(event.target.value)}/>
        <button onClick={cadastrarNome}>Cadastrar</button>
        <button >Sorteio</button>
    </div>
  )
}

export default Sorteio