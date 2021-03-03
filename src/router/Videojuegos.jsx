import React from 'react'
import Cards from '../componentes/Cards'
import ImageAndroid from '../img/Logo-android.svg'

const Videojuegos = () => {

  

    React.useEffect(() =>{
        document.title = 'Videojuegos' 
    })
    return (
        
        <div class="Container mt-5 m-5 text-center">
 <h1 class="animate__animated animate__pulse">VideoJuegos Android  <img src={ImageAndroid} height="32" wight="32" /></h1>
 <hr/>
       <div className="text-center"> 
      
            <Cards />
        </div></div>
    )
}

export default Videojuegos
