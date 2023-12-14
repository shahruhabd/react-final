import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ApiService.getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.formattedPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;