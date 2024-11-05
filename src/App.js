// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagPrincipal from './components/PagPrincipal';
import PagGaleria from './components/PagGaleria';
import PagProductos from './components/PagProductos';
import PagContacto from './components/PagContacto';
import CompNavbar from './components/CompNavbar';
import CompFooter from './components/CompFooter';


function App() {
  return (
    <Router>
      <div>
        <CompNavbar />
        <Routes>
          <Route path="/" element={<PagPrincipal />} />
          <Route path="/galeria" element={<PagGaleria />} />
          <Route path="/productos" element={<PagProductos />} />
          <Route path="/contacto" element={<PagContacto />} /> {/* Nueva ruta */}
          {/* Agregar más rutas según las páginas creadas */}
        </Routes>
        <CompFooter />
      </div>
    </Router>
  );
}

export default App;



