import React from 'react'
import './Produto.css'

function Produto(props) {
  return (
    <div className='container-produto'>
        <h2><p>{props.modelo}</p></h2>
        <p>R${props.preco.toFixed(2).replace(".", ",")}</p>
    </div>
  )
}

export default Produto