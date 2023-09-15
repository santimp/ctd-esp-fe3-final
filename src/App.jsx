
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const {state, dispatch}= useContextGlobal();
  return (
      <div className={state.theme == 'light' ? "light" : "dark"}>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
       </Routes>

    <Footer/>
      </div>
  );
}

export default App;
