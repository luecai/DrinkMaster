import React from 'react';

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
          <a className="nav-link active" href="#">Drinksmaster
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Locales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>  
        </>
    );
}

export default Secciones;
