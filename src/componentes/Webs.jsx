import React from 'react'
import Image2 from '../img/codMonitorSistemas.png'
import Image3 from '../img/Cod.png'
import Card from './Card'

const card = [
    {
        id: 1,
        image: Image2,
        title: 'Mapeo de Red Credifiar S.A',
        descripcion : "Network Monitoring Tool en formato web de red interna de Credifiar. En caso de error, genera un alerta.",
        link : 'https://shorturl.at/lFJ27' 
    },
    {
        id: 2,
        image: Image3,
        title: 'Sistema Interno Credifiar S.A',
        descripcion : "Sistema interno para sección sistemas. Con diversidad de Gestiones.",
        link : 'https://play.google.com/store/apps/details?id=com.SolidLuchoGames.GunAndDesert&hl=es_AR&gl=US' 
    }
]


const Webs = () => {
    return (
        <div className="row aling-items-center justify-content-md-center">
        {
            card.map(card => (
              <div className="col-md-8 mt-3" key={card.id}>
                         <Card title={card.title} imageSource={card.image} descripcion={card.descripcion} link={card.link} />
                         </div>
                                                  ))
        }   
        </div>
    )
}

export default Webs
