import React from 'react'
import Titulo from './Titulo'
import '../assets/localizacao.scss'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const tituloR =[
  {
    titulo:"Rua",
    resposta:"Avenida Vinte e Tres de Maio."
  },
  {
    titulo:"Bairro",
    resposta:"Vila Mariana"
  },
  {
    titulo:"Numero",
    resposta:"999"
  },
  {
    titulo:"Cep",
    resposta:"99999-999"
  },
  {
    titulo:"E-mail",
    resposta:"pizzaria@novaitalia.com"
  },
]
const Chegar = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBW__rAE3MlbVUIWmtQDLIRaMGRfriqZ2E"
  })
  const position = {
    lat:-23.561591,
    lng: -46.639881
  }
  return (
    <section className='container'>
      <Titulo text='Localização'/>

    <div className='containerLocation'>
     <div className='map'>
          { isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%', height:'100%'}}
        center={position}
        zoom={15}
      >
        <Marker position={position} options={{
          label:{
            text: "Pizzaria Nova Itália",
            className: 'map-marker'
          }
        }}/>
      </GoogleMap>
  ) : <></>
  }
      </div>

      <div className='locationEx'>
          {tituloR.map(({titulo, resposta}) =>
          (<div key={titulo}>
            <strong>{titulo}:</strong><span> {resposta}</span>
          </div>)
          )}
      </div>
     </div>
    </section>
  )
}

export default Chegar