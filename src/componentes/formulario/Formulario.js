import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './Formulario.css'
import Campo from '../CampoTexto/Campo.js';
import ListaOpciones from '../ListaOpciones'
import Boton from '../boton'


const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")
    const {registrarColaborador, crearEquip} = props

    const manejsarEnvio = (event) => {
        event.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            fav: false,
            id: uuid(),
        }    
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            colorPrimario: color,
        }
        crearEquip(datosAEnviar)
    }

    

    return <section className='formulario'>
        <form onSubmit={manejsarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingrese nombre"
                required
                valor={nombre}
                setValor={setNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingrese puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingrese enlace de foto"
                required={true}
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
            />
        <Boton>
            Crear
        </Boton>
    </form>
    <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingrese titulo"
                required
                valor={titulo}
                setValor={setTitulo}
            />

            <Campo
                titulo="Color"
                placeholder="Ingrese el color en hexa"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton>
            Crear
            </Boton>
    </form>
    </section >
}

export default Formulario