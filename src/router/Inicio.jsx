import React from 'react'

const Inicio = () => {

    React.useEffect(() =>{
        document.title = 'Luis Castañeira Dev| Desarrollador Back End ,Videojuegos, Mobile ' 
    })

    return (
        <div class="row">
        <div class="col-sm">
            <h1>Hola Mundo !!!</h1>
            <hr/>
            <p>Mi nombre es Luis Castañeira</p>
            <p>Soy Desarrollador multiplataforma, con experiencia en el desarrollo Web, Videojuegos y Aplicaciones Mobile. </p>
            <p>Apasionado de la Informatica desde pequeño. Comencé en ente mundo orientandome a la Reparación de Pc e Instalación de redes, a lo largo
                de los años fui adquiriendo conocimientos de Programación y Ethical Hacking. </p>
                
            <p>Actualmente posee un portfolio de Videojuegos en Google Play y me desempeño en el area de Sistemas de Credifiar en mi ciudad de Santa Fe. </p>
            <p>Puedes contactarme al Wazap 342-4087289.</p>
            </div>
            <div class="col-sm"></div>

            </div>
    )
}

export default Inicio
