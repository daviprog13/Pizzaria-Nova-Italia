import React from 'react'
import '../assets/contato.scss'
import arrow from '../assets/img/icon-arrow.png'
import Titulo from './Titulo'
import jantar from '../assets/img/jantar.png'
const Contato = () => {
  
  const formFields = [
    {
      id:'nome',
      label:'Nome:',
      type:'text'
    },
    {
      id:'email',
      label:'E-mail:',
      type:'email'
    },
    {
      id:'endereço',
      label:'Endereço:',
      type:'text'
    },
    {
      id:'telefone',
      label:'Telefone:',
      type:'text'
    },
  ]

  return (
    <section>
      <Titulo text="Contato"/>
      <div className='container allForm'>
        <div className='styleForm'>
         <Titulo text="Cadastre-se"/>
            <form id='forms'>
             {formFields.map(({id, label, type}) =>(
               <div>
                 <label htmlFor={id}>{label}</label>
                 <input type={type} id={id}/>
               </div>
             ))}
              <button>Enviar <img src={arrow}/></button>
             </form>
         </div>

         <div className='jantar'>
          <img src={jantar}/>
         </div>
      </div>
    </section>
  )
}

export default Contato