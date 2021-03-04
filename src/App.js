import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Contacto from './router/Contacto.jsx';
import Videojuegos from './router/Videojuegos.jsx';
import Proyectosweb from './router/Proyectosweb.jsx';
import Aplicaciones from './router/Aplicaciones.jsx';
import Inicio from './router/Inicio.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

 

  return (
    <Router>
    <div className="App">
      
     <Header />
    
  
     <div class="Container m-5">
     <switch>
      <Route path="/contacto"><Contacto /></Route>  
      <Route path="/videojuegos"><Videojuegos /></Route> 
      <Route path="/proyectosweb"><Proyectosweb /></Route>
      <Route path="/aplicaciones"><Aplicaciones /></Route>
      <Route path="/" exact><Inicio/></Route> 
      </switch>
    </div>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
