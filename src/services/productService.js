// src/services/productService.js
import axios from 'axios';

const API_URL = 'https://6722660c2108960b9cc4461d.mockapi.io/api/v1/Producto'; 

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};

