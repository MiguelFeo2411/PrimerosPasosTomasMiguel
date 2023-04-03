function CourseList() {
  const[cursos, setCursos] =useState([
  {
    id:5100,
    nombre: "Arte y geometria"
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
  const agregarCurso = (event) => {
    event.preventDefault();
    if (!nuevoCurso.trim()) {
      return;
    }
  
  const [nuevoCurso, setNuevoCurso]=useState(" ");
    const [idNuevo, setNuevoId]=useState(" ");
    const cursoNuevo = {
      texto: nuevoCurso,
    };
    const nuevoId={
      id: idNuevo
    }
    setCursos([...cursos, cursoNuevo]);
    setIdNuevo([...cursos, nuevoId])
    setNuevoCurso("");
    setNuevoId("");
  }

}
