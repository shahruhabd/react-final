import React, { useState } from 'react';
import Header from "../components/Header"
import ContentBlock from '../components/ContentBlock'
import FunctionalComponent from '../components/FunctionalComponent'
import ClassComponent from '../components/ClassComponent';
import ControlledForm from '../components/ControlledForm';
import UncontrolledForm from '../components/UncontrolledForm';
import Search from "../components/Search";
import Filters from "../components/Filters";
import '../css/main.css'
import MyComponent from '../components/MyComponent';
import withLogger from '../withLogger';
import withUpperCase from '../withUpperCase';

const initialProductsData = [
  { id: 1, name: 'Product A', price: 20 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 40 },
];
const EnhancedComponent = withLogger(withUpperCase(MyComponent));
const Main = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredProducts = initialProductsData
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterType === '' || product.price <= 20) // Adjust the filtering logic as needed
      );
    });
  return (
    <div className='wrapper'>
      <Header />
      <ContentBlock />
      <div className='row align-items-center container justify-content-between gap-3' style={{'maxWidth':'70%', 'margin':'0 auto'}}>
        <Search onSearch={handleSearch} />
        <Filters onFilter={handleFilter} />
        <FunctionalComponent message="Hello from props!" />
        <ClassComponent />
        <ControlledForm onAddItem={handleAddItem} />
        <UncontrolledForm onAddItem={handleAddItem} />
        <div className='container'>
          <h3>Added Items</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.text}{' '}
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        {/* <MyComponent someProp="value" /> */}
        {/* <EnhancedComponent someProp="value" /> */}
      </div>
    </div>
  )
}

export default Main