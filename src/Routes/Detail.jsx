import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dent, setDent] = useState({})
  const params = useParams()
  console.log(params)

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
    axios(url)
    .then(res => setDent(res.data))
  },[])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div style={{justifyContent:'center', display:'flex',justifyContent:'space-between', border:'1px black solid', margin:'10px', padding:'20px'}}>
        <div>
        <h2 >Name</h2>
      <h3>{dent.name}</h3>
        </div>
        <div>
      <h2>Email</h2>
      <h3>{dent.email}</h3>
        </div>
        <div>
      <h2>Phone</h2>
      <h3>{dent.phone}</h3>
        </div>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail