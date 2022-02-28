/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from "react";
import Checkout from "../components/Checkout";
import "./Order.css";
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  const { cart, address } = location.state;
  console.log(cart);
  console.log(address);
  return <Checkout />;
}

export default App;
