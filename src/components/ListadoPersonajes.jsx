

function ListadoPersonajes({personajes,changeModal,setPersonaje}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {personajes ? personajes.map(personaje=>(
            <div key={personaje.id} className="bg-blue-300 p-5 hover:cursor-pointer hover:bg-blue-200" onClick={()=>{changeModal(); setPersonaje(personaje)}}>
                <div>
                    <p className="text-4xl line-clamp-1 mb-5">{personaje.name}</p>
                    <p>Estado: <span className="font-bold"> {personaje.status === "Alive" ? "Vivo" : "Muerto"} </span></p>
                    <p>Género:<span className="font-bold"> {personaje.gender === "Male" ? "Hombre " : "Mujer"}</span></p>
                </div>
                <img src={personaje.img} alt={`Imagen del personaje ${personaje.name}`}></img>
            </div>
        ))
    :
    <p>No hay resultados</p>}
    </div>
  )
}

export default ListadoPersonajes