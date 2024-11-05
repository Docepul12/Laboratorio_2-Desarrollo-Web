// src/components/PagContacto.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PagContacto = () => {
  const [validated, setValidated] = useState(false);

  const valForma = (event) => {
    // Previene la acción predeterminada del formulario (recargar la página)
    event.preventDefault();
    // Detiene la propagación del evento
    event.stopPropagation();
    
    const form = event.currentTarget;
    
    // Verifica si el formulario es válido
    if (form.checkValidity() === false) {
      // Si no es válido, mostramos un mensaje en la consola
      console.log("El formulario no es válido");
    } else {
      // Si es válido, obtenemos los valores de los campos y los mostramos en la consola
      console.log("Nombre: " + form.elements.formNombre.value);
      console.log("Email: " + form.elements.formEmail.value);
      console.log("Mensaje: " + form.elements.formMensaje.value);
    }

    // Establecemos el estado de validación del formulario
    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <h2>Contáctanos</h2>
      <Form noValidate validated={validated} onSubmit={valForma}>
        {/* Campo de Nombre */}
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" name="formNombre" required />
          <Form.Control.Feedback type="invalid">Por favor ingresa tu nombre.</Form.Control.Feedback>
        </Form.Group>

        {/* Campo de Email */}
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" name="formEmail" required />
          <Form.Control.Feedback type="invalid">Por favor ingresa un email válido.</Form.Control.Feedback>
        </Form.Group>

        {/* Campo de Mensaje */}
        <Form.Group controlId="formMensaje" className="mt-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" name="formMensaje" required />
          <Form.Control.Feedback type="invalid">Por favor escribe un mensaje.</Form.Control.Feedback>
        </Form.Group>

        {/* Botón para enviar el formulario */}
        <Button variant="primary" type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default PagContacto;

