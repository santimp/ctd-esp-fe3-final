import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [userName, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  if(userName.length > 5 && userEmail.length > 3 && userEmail.includes('@')  ) {
    setShow(true)
    setErr(false)
  } else{
    setErr(true)
    setShow(false)
  }
}

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Fullname' onChange={(e)=> setUsername(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=> setUserEmail(e.target.value)} />
        <button>Send</button>

        {err && <h5>Por favor verifique su información nuevamente</h5> }

        {show ? <>

          <h4>Gracias {userName}! nos contactaremos cuanto antes via email</h4>
        </> 
            : null}
        
      </form>
    </div>
  )
}

export default Contact