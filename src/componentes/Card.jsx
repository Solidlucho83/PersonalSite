import React from 'react'


const Card = ({title, imageSource, descripcion, link } ) => {
   
    return (
        
          <div className="card text-center ">              
          <img src={imageSource} alt={title} height="130" ></img>
              <div className="cardbody justify-content-center"><br/>
              
         <h4 className="card-title">{title}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Disponible en Google Play</h6>
                 <p className="card-text mb-2 ">{descripcion}<br />
</p>
<a href={link} target="_blank" class="btn btn-success text-center">Descargar</a><br/><br />
              </div>
          </div>

        
    )
}

export default Card