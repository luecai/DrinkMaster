import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../utils/funcionesUtiles';
import {Link} from 'react-router-dom'
const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProducto = productos.map(producto => 
                
                <div className='CardD' key={producto.id}>
                    <div className="cardProducto">
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="TituloIndex">{producto.nombre}</h5>
                            <p className="card-Modelo"> Modelo: {producto.modelo}</p>
                            <p className="card-Marca">Marca: {producto.marca}</p>
                            <p className="card-Precio">Precio: {producto.precio}</p>
                            <p className="card-Stock">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);


    return (
        <div className="row">
            {productos}     
        </div>      
        
    );
}

export default Home;
