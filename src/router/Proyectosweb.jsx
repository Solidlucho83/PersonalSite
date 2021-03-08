import React from 'react'
import Webs from '../componentes/Webs'

const Proyectosweb = () => {

    React.useEffect(() =>{
        document.title = 'Proyectos Web' 
    })

    return (
        <div class="Container m-5 text-center">
        <h1 class="animate__animated animate__pulse">PROYECTOS WEB</h1>
        <hr/>
              <div className="text-center"> 
             
                   <Webs />
               </div></div>
    )
}

export default Proyectosweb
