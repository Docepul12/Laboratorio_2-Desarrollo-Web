// src/components/PagProductos.js
// src/components/PagProductos.js
import React, { useEffect, useState } from 'react';
import { Table, Container, Pagination, Image } from 'react-bootstrap';
import { getProducts } from '../services/productService';

const PagProductos = () => {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Número de productos por página
  const itemsPerPage = 5;


  // Cargar los productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      // Obtener los productos desde el servicio y actualizar el estado
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Calcular los índices del primer y último producto para la página actual
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  // Obtener los productos actuales para mostrar en la página actual
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    // Verificar que el número de página sea válido
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Crear los elementos de la paginación
  const totalPages = Math.ceil(products.length / itemsPerPage);
  let paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      // Crear un botón de paginación para cada página
      <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Productos Detallados</h2>
      {/* Tabla para mostrar los productos */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad en Stock</th>
            <th>Material</th>
            <th>Descripción</th>
            <th>Fecha de Agregado</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {/* Mostrar los productos actuales o un mensaje de carga si no hay productos */}
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.categoria}</td>
                <td>${product.precio.toFixed(2)}</td>
                <td>{product.cantidad_stock}</td>
                <td>{product.material}</td>
                <td>{product.descripcion}</td>
                <td>{new Date(product.fecha_agregado).toLocaleDateString()}</td>
                <td>
                  <Image src={product.imagen} alt={product.nombre} thumbnail style={{ maxWidth: "100px" }} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                Cargando productos...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {/* Componente de paginación para navegar entre las páginas de productos */}
      <Pagination className="justify-content-center">
        <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {paginationItems}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </Container>
  );
};

export default PagProductos;
