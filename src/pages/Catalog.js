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
    </div>
  );
};

export default Catalog