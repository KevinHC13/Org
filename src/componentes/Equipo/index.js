import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'


const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario, id } = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const estuloTitullo = {
        borderColor: colorPrimario
    }

    return <> {colaboradores.length > 0 && <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario,0.6) }} >
        <input 
        type='color'
        className='input-color' 
        value={colorPrimario}
        onChange={(event) => {
            actualizarColor(event.target.value, id)
        }}
        >

        </input>
        <h3 style={estuloTitullo} >{titulo}</h3>
        <div className="colaboradores" >
            {
                colaboradores.map((colaborador, index) => <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }
        </div>
    </section>
    }
    </>
}

export default Equipo