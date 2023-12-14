import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ renderFunction }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    return () => {
      console.log('Component is unmounting');
    };

  }, []); 

  useEffect(() => {
    console.log('Component has been updated:', products);

  }, [products]);

  const renderProducts = () => {
    if (typeof renderFunction === 'function') {
      return renderFunction(products);
    }
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Product List (Functional Component with useEffect)</h2>
      {renderProducts()}
    </div>
  );
};

const Products = () => {
  const customRenderFunction = (products) => (
    <div>
      <h3>Custom Product Rendering:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <ProductList renderFunction={customRenderFunction} />
      <ProductList />
    </div>
  );
};

export default Products;
