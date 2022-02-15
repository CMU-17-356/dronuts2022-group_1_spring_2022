import React, { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import "./Menu.css";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="menuGrid">
          <MenuItem
            name="donut"
            description="A clasic glazed donut"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
          <MenuItem
            name="sprinkles"
            description="A classic glazed donut with sprinkles"
            setCart={setCart}
          />
        </div>
        <div className="sidebar">
          <div>
            Shopping Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
