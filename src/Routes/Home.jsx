import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentists}= useContextGlobal()

  return (
    <main className="" >

      <div className='card-grid'>
       {dentists.map (dentist => (
        <Card dentist={dentist} key={dentist.id} />
       ))}

      </div>
    </main>
  )
}


export default Home