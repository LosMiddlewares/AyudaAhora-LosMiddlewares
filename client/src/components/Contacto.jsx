import './Contacto.css'


function Contacto() {
    return(
        <div id="box-Con" className='animate__animated animate__zoomIn'>
            <h2>Tu mensaje no molesta, mandanos tu consulta o propuesta ahora!</h2>
            <div id='box-input'>
                <input type="text" placeholder="Nombre Completo"/>
                <input type="text" placeholder="Email" />
            </div>
            <div id='box-textarea'>
                <textarea name="" id="input-consulta" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Contacto