import React from 'react'
import Apps from '../componentes/Apps'
import ImageAndroid from '../img/Logo-android.svg'

const Aplicaciones = () => {

    React.useEffect(() =>{
        document.title = 'Aplicaciones Web' 
    })

    return (
        <div class="Container mt-5 m-5 text-center">
        <h1 class="animate__animated animate__pulse">Aplicaciones Android  <img src={ImageAndroid} height="32" wight="32" /></h1>
        <hr/>
              <div className="text-center"> 
             
                   <Apps />
               </div></div>
    )
}

export default Aplicaciones
