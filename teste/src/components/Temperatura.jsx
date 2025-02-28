import React from 'react'
import { useState } from 'react'

function Temperatura() {
    const [Celsius, setCelsius] = useState(0)
    const [Fahrenheit, setFahrenheit] = useState(0)
    const [Kelvin, setKelvin] = useState(0)

    function converterKmParaMilha(){
        let entrada = Number(prompt("Celsius:"))
        setCelsius(entrada)
        setFahrenheit(entrada + 32 )
        setKelvin(entrada + 273,15)
    }

  return (
    <div>
        <h2>Celsius para Fahrenheit ou Kelvin</h2>
        <button onClick={converterKmParaMilha}>Converter</button>
        <p>
            Celsius: {Celsius}
        </p>
        <p>
            Fahrenheit: {Fahrenheit}
        </p>
        <p>
            Kelvin: {Kelvin}
        </p>
    </div>
  )
}

export default Temperatura