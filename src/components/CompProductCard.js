// src/components/CompProductCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const CompProductCard = ({ product }) => {
  const [rating, setRating] = useState(0);

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.imagenes} alt={product.nombre} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${product.precio}
        </Card.Text>
        <div className="mb-2">
          <strong>Calificación:</strong>
          <div>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={20}
                  color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  onClick={() => setRating(ratingValue)}
                  style={{ cursor: "pointer" }}
                />
              );
            })}
          </div>
        </div>
        <Button variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default CompProductCard;

