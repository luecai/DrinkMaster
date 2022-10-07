import React from 'react';
import Contador from '../layouts/Contador'
import { useState } from 'react';
import swal from 'sweetalert';

const alertSS=()=>{
    swal("Agregado correctamente!", "Gracias!", "success");
}

/* VA EN CONTENT */
const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const carrito = []
    
    const AgregarAlCarrito = (prod, cant) => {
        let indice = carrito.findIndex(producto => producto.id == prod.id)
        const prodCarrito = {id: prod.id, cantidad: cant}

        if (indice != -1) {
            carrito[indice] = prodCarrito
        } else {
            carrito.push(prodCarrito)
        }
    }

    const cantProducto = (operacion) => {
        if (operacion == "+") {
            if(cantidad < producto.stock) {
                setCantidad(cantidad + 1)
                } 
            } else {
                if (cantidad > 1) {
                    setCantidad(cantidad - 1)
                }
        }
    }

    return (
        <>
            <div className="card-body">
                <h1 className="card-title">{producto.nombre}</h1>
                <div className='DataMayor'>
                <div className='DataVino'>
                <p className="card-text">Bodega: {producto.marca}</p>
                <p className="card-text">Modelo: {producto.modelo}</p>
                <p className="card-text">Precio: ${producto.precio}-.</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <div className='ficha'><p className="card-text">FICHA: {producto.info}</p></div>
                
                </div>
                <div className='OperacionesCarrito'>
                <p className="card-text">Productos Agregados: {cantidad}</p>
                <div className='botonera'>
                {/* <div><a href="#" className="btn btn-primary"><Contador/></a></div> */}
                <button id='AgregarCarrito' className='btn btn-dark' onClick={() => alertSS(AgregarAlCarrito(producto, cantidad))} >Agregar al Carrito</button>
                <button className='btn btn-dark' onClick={() => cantProducto("+")}>+</button>
                <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
                </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;
