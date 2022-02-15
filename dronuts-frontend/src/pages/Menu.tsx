import React, { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import "./Menu.css";

function App() {
  const [cart, setCart] = useState([]);

  const testMenu = [
    {
      name: "glazed1",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed2",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed3",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed4",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed5",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed6",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed7",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed7",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed7",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed7",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed7",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="menuGrid">
          {testMenu.map((object) => {
            return (
              <MenuItem
                name={object.name}
                description={object.description}
                cart={cart}
                setCart={setCart}
                key={object.name}
              />
            );
          })}
        </div>
        <div className="sidebar">
          <div>Shopping Cart</div>
          {Object.keys(cart).map((key, i) => {
            const quantity = Object.values(cart)[i];
            if (quantity > 0)
              return (
                <div key={key}>
                  {key} {quantity}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
