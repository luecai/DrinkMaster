/*     const productos = [
    {
        id:1, nombre: "papa", marca: "Pepita", precio: 230, stock: 20
    },
    {
        id:2, nombre: "Banana", marca: "Perez", precio: 320, stock: 10
    },
    {
        id:3, nombre: "Zapallo", marca: "Juarez", precio: 20, stock: 2
    },
]
    const consultaBDD = (habilitado) => {
        return new Promise((resolve, reject) => {
            if (habilitado) {
                resolve(productos)
            } else {
                reject ("no  habilitado")
            }
        })
    }
    console.log(consultaBDD (true));

    consultaBDD(true).then(data=>console.log(data)) */
import React, {useState} from 'react';

const Home = () => {

    const [dolar, setDolar] = useState({})
    const MostrarDolar = () => {
        fetch ('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then(({blue, ccb, ccl, mep}) => {
           setDolar(Object.entries({blue,ccb,ccl,mep}).map(moneda => <p> Tipo: {moneda[0]} - ${moneda [1]} </p> ))
        })
    }
        
    MostrarDolar()
    return (
        <>
            {dolar}
        </>
    );
}

export default Home;
