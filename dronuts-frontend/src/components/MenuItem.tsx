import React, { useState } from "react";
import "./MenuItem.css";
import { Card, CardContent, IconButton, TextField } from "@mui/material";
import DonutPic from "../assets/apple_krumb.jpeg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface MenuItemProps {
  name: string;
  description: string;
  setCart: any;
  cart: object;
}

function MenuItem(props: MenuItemProps) {
  const { name, description, cart, setCart } = props;

  const [quantity, setQuantity] = useState(0);

  function handleChange(n: number) {
    setQuantity(Math.max(0, n));
    setCart({
      ...cart,
      [name]: Math.max(0, n)
    });
  }

  return (
    <div className="MenuItem">
      <Card variant="outlined">
        <CardContent className="cardContent">
          <div className="info">
            <div>{name}</div>
            <div>{description}</div>
            <div className="quantityRow">
              <IconButton
                className="iconButton"
                onClick={() => handleChange(quantity + 1)}
              >
                <AddCircleIcon className="icon" />
              </IconButton>
              <IconButton
                className="iconButton"
                onClick={() => handleChange(quantity - 1)}
              >
                <RemoveCircleIcon className="icon" />
              </IconButton>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                className="text"
                value={quantity}
                onChange={(event) => {
                  handleChange(parseInt(event.target.value));
                }}
              />
            </div>
          </div>
          <div className="pic">
            <img src={DonutPic} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MenuItem;
