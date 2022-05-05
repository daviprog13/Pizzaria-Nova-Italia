import React from 'react'
import Titulo from './Titulo'
import logoAlto from '../assets/img/novo.png'
import talher from '../assets/img/talheres.png'
import vinho1 from '../assets/img/vinho1.png'
import vinho2 from '../assets/img/vinho2.png'
import vinho3 from '../assets/img/vinho3.png'
import pizza1 from '../assets/img/pizza1.png'
import pizza2 from '../assets/img/pizza2.png'
import pizza3 from '../assets/img/pizza3.png'
import arrow_left from '../assets/img/arrow_left.png'
import arrow_right from '../assets/img/arrow_right.png'
import '../assets/cardapio.scss'
const Cardapio = () => {
  return (
    <section>
       <Titulo text= "Cardápio"/>
      <div className='card'>
       <div className='book'>
       <input 
           type='checkbox'
           id='c0'
          />
          <input 
           type='checkbox'
           id='c1'
          />
          <input 
           type='checkbox'
           id='c2'
          />
          <input 
           type='checkbox'
           id='c3'
          />
          <div id='cover_apre'>
            <div><img src={talher}/></div>
          </div>
          <div className='flip-book'>
          <div className='flip' id='p0'>
            <div className='back'>
              <img src={vinho3}/>
              <label className='back-btn' htmlFor='c0'>
                <img src={arrow_left}/>
              </label>
            </div>
            <div className='frontC'>
               <img className='init' src={logoAlto}/>
               <h1>Cardápio</h1>
               <p>Consulte valores Semanais</p>
               <label className='next-btn' htmlFor='c0'><img src={arrow_right}/></label>
             </div>
          </div>
          <div className='flip' id='p1'>
            <div className='back'>
              <img src={vinho1}/>
              <label className='back-btn' htmlFor='c1'>
                <img src={arrow_left}/>
              </label>
            </div>
            <div className='front'>
               <img src={pizza1}/>
               <h2>Pizza mussarela com ovo</h2>
               <p>Molho de tomate fresco, ovo, cobertura de mussarela especial, orégano e azeitonas pretas</p>
               <h4>GRD R$ 95,80</h4>
               <h4>MED R$ 79,90</h4>
               <h4>IND R$ 61,20</h4>
               <label className='next-btn' htmlFor='c1'><img src={arrow_right}/></label>
             </div>
          </div>
          <div className='flip' id='p2'>
            <div className='back'>
              <img src={vinho2}/>
              <label className='back-btn' htmlFor='c2'>
                <img src={arrow_left}/>
              </label>
            </div>
            <div className='front'>
               <img src={pizza2}/>
               <h2>Pizza mussarela com calabresa</h2>
               <p>Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas, cobertura de mussarela especial.</p>
               <h4>GRD R$ 95,80</h4>
               <h4>MED R$ 79,90</h4>
               <h4>IND R$ 61,20</h4>
               <label className='next-btn' htmlFor='c2'><img src={arrow_right}/></label>
             </div>
          </div>
          <div className='flip' id='p3'>
            <div className='back'>
              <img src={vinho3}/>
              <label className='back-btn' htmlFor='c3'>
                <img src={arrow_left}/>
              </label>
            </div>
            <div className='front'>
               <img src={pizza3}/>
               <h2>Pizza mussarela com Peperoni</h2>
               <p>Molho de tomate fresco, peperoni, cobertura de mussarela especial, orégano e azeitonas pretas</p>
               <h4>GRD R$ 95,80</h4>
               <h4>MED R$ 79,90</h4>
               <h4>IND R$ 61,20</h4>
               <label className='next-btn' htmlFor='c3'><img src={arrow_right}/></label>
             </div>
           </div>
          </div>
       </div>
       </div>
    </section>
  )
}

export default Cardapio