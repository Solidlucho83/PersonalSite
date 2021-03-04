import React from 'react'
import logo from '../img/banner.gif' 

const Header = () => {

    //const w3schools = "https://www.w3schools.com"
    return (
        <>        
   <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> <img src={logo} height="84" width="164"></img> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-4">      
      
        <a class="nav-link active" aria-current="page" href="/videojuegos"> VIDEOJUEGOS</a>
        <a class="nav-link active" aria-current="page" href="/aplicaciones"> APP's </a>
        <a class="nav-link active" aria-current="page" href="/proyectosweb"> PROYECTOS WEB</a>
        <a class="nav-link active" aria-current="page"  href="/contacto"> CONTACTO </a>
        
      </div>
    </div>
  </div>
  
</nav>  
        </>
    )
}

export default Header
