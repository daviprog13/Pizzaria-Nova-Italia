import React from 'react'
import Banner from './Banner'
import Cardapio from './Cardapio'
import Chegar from './Chegar'
import Contato from './Contato'
import Footer from './Footer'
import PictureParalax from './PictureParalax'
import QuemSomos from './QuemSomos'

const Main = () => {
  return (
    <main>
     <Banner />
     <QuemSomos />
     <PictureParalax />
     <Cardapio />
     <Chegar />
     <Contato />
     <Footer />
    </main>
  )
}

export default Main