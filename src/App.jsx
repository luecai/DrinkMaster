import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/content/Navbar';
import Carrito from './components/content/Carrito';
import Home from './components/content/Home';
import About from './components/content/About';
import Contacto from './components/content/Contacto'
import Producto from './components/content/Producto';
import Footer from './components/content/Footer';

const App = () => {
  
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producto/:id" element={<Producto/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>

        </>
    );
}

export default App;