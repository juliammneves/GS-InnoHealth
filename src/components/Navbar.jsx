import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
   const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

   const [toggle, setToggle] = useState(false);

   const handleLogout = () => {
      sessionStorage.removeItem("usuarioLogado");
      window.location.reload()
      window.location = "/";
   }

   return (
      <header>
         <div className="logo">
            <img src={Logo} alt="Logo da InnoHealth" />
            <p>{userLogado != null ? `Olá, ${userLogado.nome}` : "InnoHealth"}</p>
         </div>

         <div className="logado" style={userLogado == null ? { display: "none" } : {}}>
            <p>{userLogado != null ? `${userLogado.email}` : ""}</p>
            <button onClick={handleLogout}>Logout</button>
         </div>

         <div className="menu_mobile" style={userLogado == null ? { display: "none" } : {}}>
            <FontAwesomeIcon icon={toggle ? faXmark : faBarsStaggered} alt="menu" className='icon' onClick={() => setToggle((prev) => !prev)} />
            <div className={`menu1 ${toggle ? 'open' : ''}`}>
               <ul>
                  <li><Link to='Home'>Home</Link></li>
                  <li><Link to='Mais'>Mais</Link></li>
               </ul>
               <div className="box">
                  <p>{userLogado != null ? `${userLogado.email}` : ""}</p>
                  <button onClick={handleLogout}>Logout</button>
               </div>
            </div>
            <div className={`bg-menu_mobile ${toggle ? 'show' : ''}`}></div>
         </div>
      </header>
   )
}

export default Navbar