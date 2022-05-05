import React, { useState } from 'react'
import '../assets/container.scss'
import '../assets/pizza.scss'
import pedaco from '../assets/img/pedaco.png'
import vet from '../assets/img/vet.png';
import salsa from '../assets/img/salsa.png'

const Banner = () => {
 const [offSetY, setOffSetY] = useState(0) ;

 const handleScroll = () => setOffSetY(window.pageYOffset)
  
 React.useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
 },[])
  return (
    <section className='pizza'>
    <div className='container'>
    <img src={vet}/>
        <h1>
          Pizzaria <br/>
          Nova Itália
        </h1>
      <div>
        <div className='posicao'>
          <div>
          <img style={{transform:`translateY(${offSetY * 0.6}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.4}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.6}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.7}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.4}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.4}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.3}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.4}px)`}} src={salsa}/>
          <img style={{transform:`translateY(${offSetY * 0.3}px)`}} src={salsa}/>
          </div>
         <img src={pedaco} />
        </div>
      </div>
    </div>
</section>
    
  
  )
}

export default Banner