import { useRef } from 'react'


export default function UncontrolledReactWayForm() { 

  const inputNombre = useRef()
  const inputArchivo = useRef()

  const submit = () => {
    console.log(inputNombre.current.value)
    console.log(inputArchivo.current.files[0])
  
    const form = new FormData()

    form.append('nombre', inputNombre.current.value)
    form.append('archivo', inputArchivo.current.files[0])

    fetch('/usuario', { 
      method: 'POST', 
      body: form 
    })
  }

  return(
    <div>
      <div>
        <span>nombre</span>
        <input type='text' name='nombre' ref={inputNombre}/>
        <input type='file' ref={inputArchivo}/>
      </div>
      <input type='submit' value='Enviar' onClick={submit}/> 
    </div>
  )
} 