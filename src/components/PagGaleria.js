// src/components/PagGaleria.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CompProductCard from './CompProductCard';
import { getProducts } from '../services/productService';

const PagGaleria = () => {
  const [products, setProducts] = useState([]);

  // Cargar los productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Galería de Productos</h2>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <CompProductCard product={product} />
            </Col>
          ))
        ) : (
          <p className="text-center">Cargando productos...</p>
        )}
      </Row>
    </Container>
  );
};

export default PagGaleria;
