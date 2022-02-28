/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from "react";
import MenuHeader from "../components/MenuHeader";
import MenuItem from "../components/MenuItem";
import { Typography, Button } from "@mui/material";
import Menu from "../assets/menu";
import { Link } from "react-router-dom";
import "./Menu.css";

function App() {
  const [cart, setCart] = useState([]);

  const [address, setAddress] = useState("");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function calculateTotal() {
    let total = 0;
    Object.keys(cart).map((key, i) => {
      const quantity = Object.values(cart)[i];
      total += quantity * Menu[key].price;
    });
    return total;
  }

  const deliveryTime = 10 + Math.floor(Math.random() * 10);

  return (
    <div className="App">
      <MenuHeader setAddress={setAddress} />
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
            {false && (
              <div className="delivery">
                {address ? (
                  <Typography variant="body1">
                    ETA to {address}: {deliveryTime} Minutes
                  </Typography>
                ) : (
                  <Typography variant="body1">
                    Enter an address for an ETA
                  </Typography>
                )}
              </div>
            )}
            <div className="cartRow">
              <Typography variant="body1">Delivery</Typography>
              <div className="dash" />
              <Typography variant="body1">{formatter.format(1.5)}</Typography>
            </div>
            <div className="cartRow">
              <Typography variant="body1">Total</Typography>
              <div className="dash" />
              <Typography variant="body1">
                {formatter.format(calculateTotal() + 1.5)}
              </Typography>
            </div>
            {Object.keys(cart).length > 0 && (
              <div className="checkout">
                <Link to="/order" state={{ cart: cart, address: address }}>
                  <Button variant="contained">Continue to Checkout</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
