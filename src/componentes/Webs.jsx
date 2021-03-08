import React from 'react'
import Image2 from '../img/codMonitorSistemas.png'
import Image3 from '../img/Cod.png'
import Web from './Web'

const web = [
    {
        id: 1,
        image: Image2,
        title: 'Mapeo de Red Credifiar S.A',
        descripcion : "Network Monitoring Tool en formato web de red interna de Credifiar. En caso de error, genera un alerta.",
      
    },
    {
        id: 2,
        image: Image3,
        title: 'Sistema Interno Credifiar S.A',
        descripcion : "Sistema interno para sección sistemas. Con diversidad de Gestiones.",
        
    }
]


const Webs = () => {
    return (
        <div className="row aling-items-center justify-content-md-center">
        {
            web.map(web => (
              <div className="col-md-8 mt-3" key={web.id}>
                         <Web title={web.title} imageSource={web.image} descripcion={web.descripcion} />
                         </div>
                                                  ))
        }   
        </div>
    )
}

export default Webs
