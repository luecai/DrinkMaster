
import { Link } from 'react-router-dom';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';
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
                  {/* <Form busqueda="Buscar Producto"/> */}
                </div>

                <ul className='navbar-nav me-auto'>
                  <li className='nav-item'>
                    <Link className="nav-link active" to="/carrito"><button className="bi bi-bag-fill"></button> </Link>
                  </li>
                </ul>

              </div>
            </nav>
        </>
    );
}

export default Navbar;
