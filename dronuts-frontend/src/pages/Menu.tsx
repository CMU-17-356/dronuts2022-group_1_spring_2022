/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { Typography } from "@mui/material";
import Menu from "../assets/menu";
import "./Menu.css";

function App() {
  const [cart, setCart] = useState([]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="menuGrid">
          <Typography variant="h4" className="menuHeader">
            Classic Donuts
          </Typography>
          {Object.keys(Menu).map((key) => {
            const item = Menu[key];
            if (item.classic) {
              return (
                <MenuItem
                  name={item.name}
                  price={item.price}
                  image={item.pic}
                  cart={cart}
                  setCart={setCart}
                  key={item.name}
                />
              );
            }
          })}
          <Typography variant="h4" className="menuHeader">
            Specialty Donuts
          </Typography>
          {Object.keys(Menu).map((key) => {
            const item = Menu[key];
            if (!item.classic) {
              return (
                <MenuItem
                  name={item.name}
                  price={item.price}
                  image={item.pic}
                  cart={cart}
                  setCart={setCart}
                  key={item.name}
                />
              );
            }
          })}
        </div>
        <div className="sidebar">
          <div>
            <Typography variant="h5">Shopping Cart</Typography>
            <div className="cartContainer">
              {Object.keys(cart).map((key, i) => {
                const quantity = Object.values(cart)[i];
                if (quantity > 0)
                  return (
                    <div className="cartRow" key={key}>
                      <Typography variant="body1">{key}</Typography>
                      <div className="dash" />
                      <Typography variant="body1">
                        {quantity} x {formatter.format(Menu[key].price)}
                      </Typography>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="cartFooter">
            {cart.length > 0 && (
              <div className="cartRow">
                <Typography variant="body1">Total</Typography>
                <div className="dash" />
                <Typography variant="body1">$6.00</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
