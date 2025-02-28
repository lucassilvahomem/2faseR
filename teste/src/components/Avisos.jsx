import React from 'react'
import { useState } from 'react'

function Avisos() {
    const [Avisar, SetAvisar] = useState(true)

    function toggleAviso(){
        SetAvisar(!Avisar)
        console.log(Avisar);
    }
  return (
    <div>
        {Avisar && <p>
        Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA
        </p>}
        <button onClick={toggleAviso}>Aviso</button>
        
    </div>
  )
}

export default Avisos