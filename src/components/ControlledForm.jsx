import { useState } from 'react'

export default function ControlledForm() {

  const [value, setValue] = useState({
    nombre: '',
    descripcion: '',
    select: '',
    diablo: false,
    estado: 'solido'
  })

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value 
    })
  }
  console.log(value)

  return(
    <div className='w-1/3 text-slate-100 bg-slate-950 px-4 py-6 rounded-lg m-5'>
      <div className='flex flex-col'>
        <span>nombre</span>
        <input className='bg-slate-900 rounded-lg px-2 py-1' type='text' name='nombre' value={value.nombre} onChange={handleChange}/>
      </div>
      
      {value.descripcion.length < 5 ? <div className='rounded-lg p-2 border-2 border-red-800 bg-red-700 text-red-950'>se necesitan por lo menos 5 caracteres</div> : null}
      <textarea className='bg-slate-900 rounded-lg px-2 py-1' name='descripcion' onChange={handleChange} value={value.descripcion}></textarea>
      
      <select className='bg-slate-900 rounded-lg px-2 py-1' name='select' value={value.select} onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='algo'>algo</option>
        <option value='otro'>otro</option>
      </select>

      <div>
        <span className='mr-3'>acepto vender mi alma al diablo</span>
        <input type='checkbox' name='diablo' checked={value.diablo} onChange={handleChange}/>
      </div>

      <div>
        <label>tipo de estado</label>
        <div className='flex flex-col' >
          <div>
            <input 
              onChange={handleChange} 
              type='radio' 
              name='estado' 
              value='solido' 
              checked={value.estado === 'solido'}
            /><span>solido</span>
          </div>
          <div>
            <input 
              onChange={handleChange} 
              type='radio' 
              name='estado' 
              value='gaseoso' 
              checked={value.estado === 'gaseoso'} 
            /><span>gaseoso</span>
          </div>
          <div>
            <input 
              onChange={handleChange} 
              type='radio' 
              name='estado' 
              value='liquido' 
              checked={value.estado === 'liquido'} 
            /><span>liquido</span>
          </div>
        </div>
      </div>
    </div>
  )
}