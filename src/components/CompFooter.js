// src/components/CompFooter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CompFooter = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Dirección: Calle Falsa 123, Ciudad XYZ</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: contacto@minegocio.com</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Redes Sociales</h5>
            <a href="https://facebook.com" className="text-white me-3">Facebook</a>
            <a href="https://instagram.com" className="text-white me-3">Instagram</a>
            <a href="https://twitter.com" className="text-white">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CompFooter;
