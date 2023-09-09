
import { useEffect, useState } from 'react'
import './App.css'
import Modal from 'react-modal';
import ListadoPersonajes from './components/ListadoPersonajes';
import Header from './components/Header';
import ModalPersonaje from './components/ModalPersonaje';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};

Modal.setAppElement('#root');


const personajesMapeados = (personajes,filtros) =>{
  return personajes.map(personaje=>{
   return {
      id:personaje.id,
      img:personaje.image,
      name:personaje.name,
      status:personaje.status,
      gender:personaje.gender
    }
  }).filter(personaje=>{
    return (personaje.status === filtros.status || filtros.status === "") && (
      personaje.gender === filtros.gender || filtros.gender ===""
    )
  })
}
function App() {
  const [personajes,setPersonajes] = useState([])
  const [filters,setFilters] = useState({
    gender:"",
    status:""
  })
  const [page,setPage] = useState(1);
  const [modal,setModal] = useState(false);
  const [personaje,setPersonaje] = useState({});
  const changeModal=()=>{
    setModal(!modal);
  }
  useEffect(()=>{
    const getPersonajes = async()=>{
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      setPersonajes(data.results)
    }
    getPersonajes();
  },[page])
  
const personajesMap = personajesMapeados(personajes,filters);
  return (
    <>
    <Header setFilters={setFilters} filters = {filters}/>
    <div className="flex justify-between mb-10">
    <button className={ `${page <= 1 ? "cursor-not-allowed": ""} bg-blue-600 rounded-lg p-3 uppercase font-bold text-white hover:bg-blue-500`} onClick={()=>{if(page <= 1) return; else setPage(page-1)}}> Anterior </button>
    <p className='text-4xl'>Pagina: {page} </p>
    <button className={`${page > 41 ? "cursor-not-allowed": "" } bg-blue-600 rounded-lg p-3 uppercase font-bold text-white hover:bg-blue-500`} onClick={()=>{if(page >= 42) return; else setPage(page+1)}}> Siguiente </button>
    </div>
    <main>
    <ListadoPersonajes personajes ={personajesMap} changeModal={changeModal} setPersonaje={setPersonaje}/>
     {modal && <Modal isOpen={modal} style={customStyles}><ModalPersonaje changeModal={changeModal} personaje={personaje}/></Modal> }
    </main>
    </>
  )
}

export default App
