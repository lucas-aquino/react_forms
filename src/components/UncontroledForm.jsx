


export default function UncontrolledForm() {

  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))

    console.log(Object.fromEntries(data))
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input name='nombre'/>
          <input name='pass' type='contraseña'/>
        </div>
        <input type='file' name='archivo'/>
        <input type='submit' value='Enviar'/>
      </form>
    </div>
  )
}

