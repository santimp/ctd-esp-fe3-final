import React from "react";
import { Link } from 'react-router-dom'
import Favs from "../Routes/Favs";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
   
  }
  const {favs, setFavs} = useContextGlobal()
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + dentist.id}> 
        <img src="./images/doctor.jpg" alt="img dentist" style={{width:'120px', margin:'35px'}}/>
         <h3> {dentist.name}</h3>
         <h4> {dentist.username}</h4>
        </Link>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => setFavs([...favs, dentist])} className="favButton" style={{margin:'10px', fontSize:'20px'}}> ⭐️  </button>
    </div>
  );
};

export default Card;
