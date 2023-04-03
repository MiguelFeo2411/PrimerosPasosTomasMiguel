import { useState } from 'react';
import PropTypes from 'prop-types';

function CourseList() {
  const[cursos, setCursos] =useState([
  {
    id:5100,
    nombre: "Calculo Integral"
  },
  {
    id:5101,
    nombre: 'Calculo Vectorial'
  },
  {
    id:1470,
    nombre: 'Introduccion a React'
  },
  {
    id:3745,
    nombre: 'Logica Digital'
  }
  ]);
  const [nuevoCurso, setNuevoCurso]=useState(" ");
  const [idNuevo, setNuevoId]=useState(" ");
  const cursoNuevo = {
    id: Math.round(Math.random()*10000),
    texto: nuevoCurso,
  };
  setCursos([...cursos, cursoNuevo]);
  setIdNuevo([...cursos, idNuevo])
  setNuevoCurso("");
  setNuevoId("");



  return(
      <div> 
      <h1>Lista de cursos</h1>
        <input type='text' value={nuevoCurso}/>
        <input type='text' value={idNuevo}/>
    </div>
    );
};

export default CourseList;