import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import { ThemeProvider } from './context/ThemeContext'; 

const Navigation = () => {
  return (
    <nav>
      <ul className='d-flex gap-3'>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <ThemeProvider>
        <Router>
          <div>
            <h1>Shah Shop App</h1>
            <Navigation />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
