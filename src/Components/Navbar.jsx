import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Routes/Home'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch}= useContextGlobal();

  return (
    <nav className={state.theme == 'light' ? "light" : "dark"} style={{display:"flex", justifyContent:"space-between", boxSizing:'border-box', paddingLeft:'40px',paddingRight:'40px'}}>
      <h1>DH ODONTO</h1>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
<div  className="links" style={{marginTop:'20px', display:'flex', justifyContent:'space-around', width:'300px'}}>
      <Link to='/' style={{fontWeight:"bold"}}>Home</Link>
      <Link to='/contact'style={{fontWeight:"bold"}}>Contact</Link>
      <Link to='/favs'style={{fontWeight:"bold"}}>Favs</Link>
</div>


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: "CHANGE-THEME", payload: state.theme== 'light' ? 'dark' : 'light' })} style={{fontSize:'20px' , borderRadius:'10px'}}> 🌞 / 🌚 </button>
    </nav>
  )
}

export default Navbar