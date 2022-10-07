import React from 'react';
import Secciones from '../layouts/Secciones';


const Footer = () => {
  return (
    <> 


        <div className='footers'>
        <p className="footer__text">Copyright© 2021 DrinkMaster Corporation (o sus filiales o empresas licenciadoras) - Centro Atención al Cliente 91 566 62 37</p>
        <div className="footer__iconos">
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="./Paginas/Contacto.html"><i class="far fa-envelope"></i></a>
        </div>
    </div>
     
</>
  );
}

export default Footer;
