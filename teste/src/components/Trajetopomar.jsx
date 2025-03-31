import React from 'react'
import './Trajetopomar.css'
import { useState } from 'react'

function Trajetopomar() {
    const [resultado, setResultado] = useState(0)
    const precoMaça = 1.50;
    const precoLaranja = 2;
    const precoBergamota = 1;
    const precoBanana = 1.20;
    const precoPera = 0.50;
    
    function Compra(){
      const  quantidadeMaça = Number(prompt("digite o quanto de maçãs voce quer comprar"));
      const  quantidadeLaranja = Number(prompt("digite o quanto de laranjas voce quer comprar"));
      const  quantidadeBergamota = Number(prompt("digite o quanto de bergamotas voce quer comprar"));
      const  quantidadeBanana = Number(prompt("digite o quanto de bananas voce quer comprar"));
      const  quantidadePera = Number(prompt("digite o quanto de peras voce quer comprar"));

      const total = (quantidadeMaça * precoMaça) + (quantidadeLaranja * precoLaranja) + (quantidadeBergamota * precoBergamota) + (quantidadeBanana * precoBanana) + (quantidadePera * precoPera);

      setResultado(total);  
    }
        
    return (
      <div className='container-trajetopomar'>
      <h2>Trajeto Pomar</h2>
      <button onClick={Compra}>Comprar</button>
      <p>Total da compra: R${resultado.toFixed(2)}</p>
      </div>
  );
}

export default Trajetopomar
