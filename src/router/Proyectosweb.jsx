import React from 'react'
import Webs from '../componentes/Webs'
import Imageweb from '../img/logoweb.png'

const Proyectosweb = () => {

    React.useEffect(() =>{
        document.title = 'Proyectos Web' 
    })

    return (
        <div class="Container m-5 text-center">
        <h1 class="animate__animated animate__pulse">Proyectos Web <img src={Imageweb} height="32" wight="32" /></h1>
        <hr/>
              <div className="text-center"> 
             
                   <Webs />
               </div></div>
    )
}

export default Proyectosweb
