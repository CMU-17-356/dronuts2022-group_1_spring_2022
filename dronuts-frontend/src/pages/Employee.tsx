import React, { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { Typography } from "@mui/material";
import "./Employee.css";
import Payload from "../components/Payload";

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

  const testPayloads = [
      {
          id: 1,
          items: [
              {
                  name: "Glazed",
                  quantity: 3
              },
          ]
      },
      {
          id: 2,
          items: [
              {
                  name: "Glazed",
                  quantity: 4,
              },
              {
                  name: "Sprinkles",
                  quantity: 1,
              },
              {
                  name: "Apple Fritter",
                  quantity: 10
              },
          ]
      },
      {
          id: 3,
          items: [
            {
                name: "Sprinkles",
                quantity: 1,
            },
            {
                name: "Apple Fritter",
                quantity: 10
            },
          ]
      }
  ]

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="menuGrid">
          <Typography variant="h4" className="menuHeader">
            Employee
          </Typography>
          {testPayloads.map((object) => {
            return (
              <Payload
                id={object.id}
                items={object.items}
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
