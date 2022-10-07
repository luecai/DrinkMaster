import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
/* import Contador from '../layouts/Contador'; */
import DetalleProducto from './DetalleProducto';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)
        })
    }, [])

    return (
        <>
        <div className="card" >
            <img className="img" src={`../img/${producto.img}`} alt="Card image cap"/> 
            <DetalleProducto producto={producto}/>
        </div> 
        </>
    );
}

export default Producto;
