import React from 'react'
import Image2 from '../img/icono1.gif'
import Image3 from '../img/icono2.gif'
import Card from './Card'

const card = [
    {
        id: 1,
        image: Image2,
        title: 'LordQuest',
        descripcion : "A Dragon has invaded the Island where you live, enter the caves, destroy enemies,reach the Dragon.",
        link : 'https://shorturl.at/lFJ27' 
    },
    {
        id: 2,
        image: Image3,
        title: 'Gun And Desert',
        descripcion : "Juegos de Disparos Retro al estilo Gun Smoke, Graficos Pixel Art. Cinco Niveles de pura acción.",
        link : 'https://play.google.com/store/apps/details?id=com.SolidLuchoGames.GunAndDesert&hl=es_AR&gl=US' 
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
