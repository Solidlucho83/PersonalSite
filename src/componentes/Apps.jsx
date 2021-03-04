import React from 'react'
import Image2 from '../img/adicionalesApp.png'
import Image3 from '../img/peluqueriaApp.png'
import Card from './Card'

const card = [
    {
        id: 1,
        image: Image2,
        title: 'Adicionales PSF',
        descripcion : "Herramienta de agenda y calculo, del servicio de Adicionales de la Policia de Santa Fe.",
        link : 'https://play.google.com/store/apps/details?id=com.solidlucho.adicionalessf2' 
    },
    {
        id: 2,
        image: Image3,
        title: 'Control de Clientes para Peluqueria',
        descripcion : "Herramienta para llevar un registro y agenda de trabajos de Peluqueria.",
        link : 'https://play.google.com/store/apps/details?id=com.solidlucho.migestionpeluqueria' 
    }
]


const Cards = () => {
    
    return (
    
                  <div className="row aling-items-center justify-content-md-center">
                      {
                          card.map(card => (
                            <div className="col-md-3 mt-3" key={card.id}>
                                       <Card title={card.title} imageSource={card.image} descripcion={card.descripcion} link={card.link} />
                                       </div>
                                                                ))
                      }              
     
            </div>
            
            
       
       
       
   

    )
}

export default Cards
