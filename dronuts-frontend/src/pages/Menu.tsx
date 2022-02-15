import React, { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { Typography } from "@mui/material";
import "./Menu.css";

function App() {
  const [cart, setCart] = useState([]);

  const testMenu = [
    {
      name: "Glazed",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "Sprinkles",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "Apple Fritter",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "Cinamon Roll",
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
      name: "glazed8",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed9",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed10",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
    {
      name: "glazed11",
      description: "A classic glazed donut with sprinkles",
      cost: 1.5,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="menuGrid">
          <Typography variant="h4" className="menuHeader">
            Classic Donuts
          </Typography>
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
          <div>
            <Typography variant="h5">
              Shopping Cart
            </Typography>
            <div className="cartContainer">
              {Object.keys(cart).map((key, i) => {
                const quantity = Object.values(cart)[i];
                if (quantity > 0)
                  return (
                    <div className="cartRow" key={key}>
                      <Typography variant="body1">
                        {key}
                      </Typography>
                      <div className="dash" />
                      <Typography variant="body1">
                        {quantity} x $1.5
                      </Typography>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="cartFooter">
            {cart.length > 0 && (
              <div className="cartRow">
                <Typography variant="body1">
                  Total
                </Typography>
                <div className="dash" />
                <Typography variant="body1">
                  $6.00
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
