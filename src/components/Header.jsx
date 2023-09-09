import React from 'react'
import Filtros from './Filtros'

function Header({filters,setFilters}) {
    const changeFilters =(e)=>{
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className='py-10'>
        <h1 className='text-center text-4xl'> Ricky y morty</h1>
      <Filtros filters={filters} changeFilters={changeFilters}/>
    </div>
  )
}

export default Header