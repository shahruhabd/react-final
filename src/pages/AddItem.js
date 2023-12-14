import React, { useState } from "react";

import "../css/main.css";

const AddItem = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
    };

    onAddProduct(newProduct);

    setProductName("");
    setProductPrice("");
  };
  
  const handleButtonClick = () => {
    console.log('Кнопка "Добавить товар" была нажата!');
  };

  const handleKeyDown = (e) => {
    console.log(`Клавиша ${e.key} была нажата в поле ввода`);
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
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        Цена товара:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button type="submit" onClick={handleButtonClick}>
        Добавить товар
      </button>
    </form>
  );
};

export default AddItem;
