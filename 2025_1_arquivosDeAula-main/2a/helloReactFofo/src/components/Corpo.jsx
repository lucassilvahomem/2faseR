import './Corpo.css'

function Corpo(){
    function Alertarousuario(){
        alert("cuidado")
    }
    return(
        <div className="container-corpo">
            <h1> testando o react </h1>
            <p> vamos começar a nossa aventura </p>
            <button onClick={Alertarousuario}> alertar </button>
            <img className='imagem' src="godzilla.png" onClick={Alertarousuario} alt="" />
            {648-33}
        </div>
    )
}

export default Corpo