import React from 'react'
import logo from '../assets/img/logo.png'
import pizza from '../assets/img/pizza_2.png'
import '../assets/container.scss'
import '../assets/header.scss'
const Header = () => { 
  return (
    <header className='top'>
     <div className='container'>
     <img src={pizza} alt="pizza1"/>
       <a href='index.html'>
        <img src={logo} alt=""/>
       </a>
       <ul>
         <li>
            <a href='/quem_somos'>
              Quem Somos
            </a>
         </li>
         <li>
            <a href='/cardapio'>
              Cardápio
            </a>
         </li>
         <li>
            <a href='local'>
              Localização
            </a>
         </li>
         <li>
            <a href='/contato'>
              Contato
            </a>
         </li>
       </ul>
       <img src={pizza} alt="pizza2"/>
     </div>
    </header>
  )
}

export default Header