import React from 'react';
import vino from './Imagenes/vino.jpg';
import Contador from './Contador';
import './Producto.css'
/* style={{width: '18rem'}} */
const Producto = () => {
    return (
        <>
        <div className="card" >
                <img className="img" src={vino} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">LUIGI BOSCA · Cabernet Sauvignon</h5>
                <p className="card-text">Luigi Bosca Cabernet Sauvignon es un tinto de color rojo rubí profundo y brillante.</p>
                <div><a href="#" className="btn btn-primary"><Contador/></a></div>
            </div>
        </div>

        </>
    );
}

export default Producto;
