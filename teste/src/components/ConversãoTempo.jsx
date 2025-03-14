import React, { useState } from 'react'
import './ConversãoTempo.css'

function ConversãoTempo() {
        const [horas, setHoras] = useState(0)
        const [minutos, setMinutos] = useState(0)
        const [segundos, setSegundos] = useState(0)
        function converterHoras(){
            let entrada = Number(prompt("horas:"))
            setHoras(entrada)
            setMinutos(entrada * 60)
            setSegundos(entrada * 3600)
        }
        function converterMinutos(){
            let entrada = Number(prompt("minutos:"))
            setHoras(entrada / 60)
            setMinutos(entrada)
            setSegundos(entrada * 60)
        }
        function converterSegundos(){
            let entrada = Number(prompt("segundos:"))
            setHoras(entrada / 3600)
            setMinutos(entrada / 60)
            setSegundos(entrada)
        }
      return (
        <div className="container-conversao2">
            <h2>horas-minutos-segundos</h2>
            <button onClick={converterHoras}>Converter horas</button>
            <button onClick={converterMinutos}>converter minutos</button>
            <button onClick={converterSegundos}>converter segundos</button>
            <p>
                horas: {horas}
            </p>
            <p>
                minutos: {minutos}
            </p>
            <p>
                segundos: {segundos}
            </p>
    
        </div>
      )
  
}

export default ConversãoTempo