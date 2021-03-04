import React from 'react'
import Foto from '../img/fotoperfil.gif' 


const Inicio = () => {

    

    React.useEffect(() =>{
        document.title = 'Luis Castañeira Dev| Desarrollador Back End ,Videojuegos, Mobile ' 
    })

    return (
        <div class="row">
        <div class="col-sm-6">
        <h3 class="animate__animated animate__pulse">Hola Mundo!!!</h3>
            <hr/>
            <p>Mi nombre es LUIS CASTAÑEIRA</p>
            <p>Soy Desarrollador multiplataforma, con experiencia en el desarrollo Web, Videojuegos y Aplicaciones Mobile. </p>
            <p>Apasionado de la Informatica desde pequeño. Comencé en ente mundo orientandome a la Reparación de Pc e Instalación de redes, a lo largo
                de los años fui adquiriendo conocimientos de Programación y Ethical Hacking. </p>
            <p><h3><i>Que Puedo Hacer?</i></h3></p>
            <ul>
                <li>#Desarrollo de Sitios Web.</li>
                <li>#Api Rest Full Web Services.</li>
                <li>#Desarollo de Aplicaciones Android.</li>
                <li>#Desarollo de Aplicaciones de Escritorio Windows.</li>
                <li>#Desarrollo de Videojuegos con Unity.</li>
                </ul>
 
                <div class="col-sm-3">
            <p><b><i>Skills</i></b></p>
            <ul>
                <li>#PHP.</li>
                <li>#C#.</li>
                <li>#JavaScript.</li>
                <li>#Python.</li>
                <li>#NodeJs.</li>
                <li>SQL,MONGODB,Firebase.</li>    </ul>
                <p><b><i>FrameWorks:</i></b></p>
                <ul><li>#Laravel.</li><li>#ReactJs.</li><li>#Unity.</li><li>#Android Studio.</li></ul>
                </div>
            </div>
            <div name="fotoperfil" class="col-sm-1"></div>
            <img src={Foto} height="450" width="400"></img> 
            </div>
    )
}

export default Inicio
