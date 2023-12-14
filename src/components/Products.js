import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const componentDidCatch = (error, errorInfo) => {
      console.error('Error caught by error boundary:', error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', componentDidCatch);

    return () => {
      window.removeEventListener('error', componentDidCatch);
    };
  }, []);

  return hasError ? (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  ) : (
    <>{children}</>
  );
};

const Products = () => {
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

  return (
    <ErrorBoundary>
      <div>
        <h2>Product List (Functional Component with useEffect)</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </ErrorBoundary>
  );
};

export default Products;
