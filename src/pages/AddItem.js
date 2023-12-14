import React, { useState } from 'react';

import '../css/main.css'


const AddItem = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id: Date.now(), 
        name: productName,
        price: parseFloat(productPrice),
      };
  
      onAddProduct(newProduct);
  
      setProductName('');
      setProductPrice('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Добавить новый товар</h3>
        <label>
          Название товара:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Цена товара:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <button type="submit">Добавить товар</button>
      </form>
    );
  };

export default AddItem