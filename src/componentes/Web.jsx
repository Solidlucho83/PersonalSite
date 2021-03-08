import React from 'react'

const Web = ({title, imageSource, descripcion, link } ) => {
    return (
        <div className="card text-center ">              
          <img src={imageSource} alt={title} height="400px"  ></img>
              <div className="cardbody justify-content-center"><br/>
              
         <h4 className="card-title">{title}</h4>
                 
                 <p className="card-text mb-2 ">{descripcion}<br />
</p>

              </div>
          </div>
    )
}

export default Web
