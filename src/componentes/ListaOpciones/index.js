import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    // Metodo map -> arreglo.map( (equipo, index) => {
    //      
    //} )

    const manejarCambio = (event) => {
        props.setValor(event.target.value)

    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option
                value=""
                disabled
                defaultValue=""
                hidden >Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index}  valor={props.equipo} >{equipo}  </option>)}
        </select>
    </div>
}

export default ListaOpciones