import React from 'react'
import './Projetopomar.css'

function Trajetopomar() {
    const [maça, setMaças] = useState(0)
    const [laranja, setLaraja] = useState(0)
    const [bergamota, setBergamota] = useState(0)
    const [banana, setBanana] = useState(0)
    const [pera, setPera] = useState(0)
    const [resultado, setResultado] = useState('resultado não calculado')
    
    function Compra(){
        maça = Number(prompt("digite o quanto de maçãs voce quer comprar"))
        laranja = Number(prompt("digite o quanto de laranjas voce quer comprar"))
        bergamota = Number(prompt("digite o quanto de bergamotas voce quer comprar"))
        banana = Number(prompt("digite o quanto de bananas voce quer comprar"))
        pera = Number(prompt("digite o quanto de peras voce quer comprar"))
        maça = 1,50
        laranja = 2
        bergamota = 1
        banana = 1,20
        pera = 0,50
        resultado = maça + laranja + bergamota + banana + pera
    }
        
    return (
      <div className='container-trajetopomar'>
        <h2>Trajeto pomar</h2>

        <button onClick={Compra}>comprar</button>
        <p>
        {resultado}
        </p>
    </div>
  )
}

export default Trajetopomar
