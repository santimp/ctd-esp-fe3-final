import React from 'react'
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state, dispatch } = useContextGlobal();
  return (
    <footer className={state.theme == 'light' ? "light" : "dark"} style={{ display:'flex', justifyContent:'space-between',boxSizing:'border-box'}}>
        <p>Powered by Digital House</p>
        <img src="./DH.ico" alt='DH-logo' />
        <div>
        <img src="./images/ico-facebook.png" alt="" style={{width:'40px', marginLeft:'20px'}}/>
        <img src="./images/ico-instagram.png" alt="" style={{width:'40px', marginLeft:'20px'}}/>
        <img src="./images/ico-tiktok.png" alt="" style={{width:'40px', marginLeft:'20px'}}/>
        <img src="./images/ico-whatsapp.png" alt="" style={{width:'40px', marginLeft:'20px'}}/>
        </div>
    </footer>
  )
}

export default Footer
