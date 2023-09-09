import React from 'react'

function ModalPersonaje({personaje,changeModal}) {
  return (
    <div key={personaje.id} className="p-5 px-10" >
        <div className='flex justify-end'>
        <button className='text-4xl' onClick={()=>changeModal()} > X </button>
        </div>
    <div>
        <p className="text-4xl line-clamp-1 mb-5">{personaje.name}</p>
        <p>Estado: <span className="font-bold"> {personaje.status === "Alive" ? "Vivo" : "Muerto"} </span></p>
        <p>Género:<span className="font-bold"> {personaje.gender === "Male" ? "Hombre " : "Mujer"}</span></p>
    </div>
    <img src={personaje.img} alt={`Imagen del personaje ${personaje.name}`}></img>
</div>
  )
}

export default ModalPersonaje