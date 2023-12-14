import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.setState({ products: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  render() {
    return (
      <div>
        <h2>Product List (Class Component)</h2>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
