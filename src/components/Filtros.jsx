import React from 'react'

function Filtros({filters, changeFilters}) {
    
  return (
   <div >
    <h2 className='mb-5 text-left text-2xl'>Filtrar por</h2>
     <div className='flex gap-5 wY'>
        
        <div className=''>
        <label> Género </label>
        <select className='rounded-xl px-5 py-1 bg-slate-200 hover:bg-slate-100' value={filters.gender} name="gender" onChange={changeFilters}>
             <option value="">
                 Selecciona
             </option>
             <option value="Male"  > Hombre </option>
             <option  value="Female" > Mujer </option>
         </select>
        </div>
         <div>
         <label> Estado </label>
        <select className='rounded-xl px-5 py-1 bg-slate-200 hover:bg-slate-100 transition-colors' value={filters.status} name="status" onChange={changeFilters}>
             <option value="">
                 Selecciona
             </option>
             <option value="Alive"  > Vivo </option>
             <option  value="Dead" > Muerto </option>
         </select>
         </div>
        </div>
   </div>
  )
}

export default Filtros