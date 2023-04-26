import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostarForm, actualizarMostar] = useState(false)
  const [colaboradores, setColaboradores] = useState([])
  
  // Lista de equipos
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Font-end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])


  // Ternario -> Condicion ? seMuestra : noSeMuestra
  const cambiarMostar = () => {
    actualizarMostar(!mostarForm)
  }

  // Registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo", colaborador)
    // Spred operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando" )
    const newColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    setColaboradores(newColaboradores)
  }

  // Actualizar color de equio
  const actualizarColor = (color, id) => {
    const equiposAcutalizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      
      return equipo
    })
    setEquipos(equiposAcutalizados)
  }

  const crearEquip = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const actColaboradores = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(actColaboradores)
  }


  return (
    <div>
      <Header />
      {mostarForm ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} 
      crearEquip={crearEquip}
      /> : <div />}
      {/*mostarForm && <Formulario />*/}
      <MiOrg actualizarMostar={cambiarMostar} />
      {
        equipos.map((equipo) => 
           <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
