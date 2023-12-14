import React, { useState } from 'react';
import AddItem from './AddItem';
import '../css/main.css'

const Catalog = () => {
  const initialProducts = [
    { id: 1, name: 'Ноутбук', price: 1000 },
    { id: 2, name: 'Смартфон', price: 500 },
    { id: 3, name: 'Планшет', price: 300 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  products.forEach((product) => {
    console.log(`Товар: ${product.name}, Цена: ${product.price} руб.`);
  });

  const productNames = products.map((product) => product.name);

  const expensiveProducts = products.filter((product) => product.price > 500);

  const totalCost = products.reduce((acc, product) => acc + product.price, 0);

return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} руб.
          </li>
        ))}
      </ul>

      <AddItem onAddProduct={addProduct} />

      <div>
        <h3>Дополнительная информация:</h3>
        <p>Названия товаров: {productNames.join(', ')}</p>
        <p>Дорогие товары: {expensiveProducts.map((product) => product.name).join(', ')}</p>
        <p>Общая стоимость товаров: {totalCost} руб.</p>
      </div>
    </div>
  );
};

export default Catalog