import { createContext, useState, useContext,useReducer, useEffect } from "react";
import axios from 'axios'

export const initialState = {theme: "light", data: []}



 const ContextGlobal = createContext();

 const localFavs = JSON.parse(localStorage.getItem('favs'))
 const initialFavState = localFavs ?  localFavs : []

const reducer = (state, action) =>{
  switch (action.type){
    case "CHANGE-THEME":
      return{...state, theme: state.theme === "light" ? "dark" : "light"}
  }
}
const Context = ({children}) => {
  const[dentists, setDentists] = useState([])
  const[favs, setFavs] = useState(initialFavState)
  const [state, dispatch] = useReducer (reducer, initialState)
 
 
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(url)
    .then(res => setDentists(res.data))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  },[favs])


  return (
    <ContextGlobal.Provider value={{dentists, favs, setFavs, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default Context

 export const useContextGlobal = () => useContext(ContextGlobal)
