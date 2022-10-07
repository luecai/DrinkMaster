import {Link} from 'react-router-dom';

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to="/">Drinksmaster</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/about"> About</Link>
        </li>
        
        </>
    );
}

export default Secciones;
