import React from 'react';
import CompNavbar from '../components/CompNavbar';
import CompFooter from '../components/CompFooter';

const PagPrincipal = () => {
  return (
    <div>
      <CompNavbar />
      <div className="container">
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descripción del negocio...</p>
      </div>
      <CompFooter />
    </div>
  );
};

export default PagPrincipal;
