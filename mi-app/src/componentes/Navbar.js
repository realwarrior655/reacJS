import React from 'react';
import '../Navbar.css';
import Img from './Cartwidget';
function Navbar() {
  return (
    <div>
        <nav>
        <Img/>
            <div>
            <button>Tipo</button>
            <button>Alfabetico</button>
            <button>Legendarios</button>
            <button>Generacion</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar