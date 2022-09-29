import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Secciones from './Secciones';
const Navbar = () => {
  const listDrowdon = ["Vinos", "Champagne", "Cerveza", "TODOS"]
  
    return (
        <> 

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor04">
                  <ul className="navbar-nav me-auto">
                    <Secciones/>
                    <Dropdow lista={listDrowdon}/>
                  </ul>
                  <Form busqueda="Buscar Producto"/>
                </div>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
