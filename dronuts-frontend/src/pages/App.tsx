import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link to="/menu">Menu</Link>
        </p>
        <p>
          <Link to="/cart">Cart</Link>
        </p>
        <p>
          <Link to="/order">Order</Link>
        </p>
        <p>
          <Link to="/employee">Employee</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
