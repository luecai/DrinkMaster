import React from 'react';
import Navbar from './components/Navbar';
import SpinnerFlex from './components/SpinnerFlex';
import Contador from './components/Contador';
import Producto from './components/Producto';
import './App.css'
import Home from './components/Home';



const App = () => {
  
    return (
        <>
          <Navbar/>
{/*           <SpinnerFlex/> */}
          <Producto/>
{/*           <Home/> */}


        </>
    );
}

export default App;