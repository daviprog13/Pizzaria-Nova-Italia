import React from 'react'
import '../assets/paralax.scss'
const PictureParalax = () => {
  const [offSetY, setOffSetY] = React.useState(0)

  const handleScroll = () => setOffSetY(window.pageYOffset)
  React.useEffect(() =>{
    window.addEventListener( 'scroll', handleScroll)
    return () => window.removeEventListener( 'scroll', handleScroll)
  },[])
  return (
    <section className='imgParalax'>
       <h3 style={{transform:`translatey(${offSetY * -0.6}px)`}}>Seja Bem Vindo</h3>
    </section>
  )
}
export default PictureParalax