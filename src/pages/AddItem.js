import React, { useState } from "react";
import "../css/main.css";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

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
      <InputField
        label="Название товара:"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputField
        label="Цена товара:"
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SubmitButton onClick={handleButtonClick} />
    </form>
  );
};

export default AddItem;