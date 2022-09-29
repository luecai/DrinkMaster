import React from 'react';
import Contador from './Contador';
import Carrito from './Carrito';

const Form = ({busqueda}) => {
    return (
        <>
          <form className="d-flex">
            
            <Carrito/>
            <input className="form-control me-sm-2" type="text" placeholder={busqueda} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>  
        </>
    );
}

export default Form;
