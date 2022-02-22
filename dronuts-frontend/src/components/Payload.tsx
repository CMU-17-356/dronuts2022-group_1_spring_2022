import React, { useState } from "react";
import "./Payload.css";
import { Card, CardContent, IconButton, TextField, Typography } from "@mui/material";
import DonutPic from "../assets/apple_krumb.jpeg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface PayloadProps {
  id: number;
  items: {name: string, quantity: number}[];
}

function Payload(props: PayloadProps) {
  const { id, items } = props;

  return (
    <div className="MenuItem">
      <Card variant="outlined">
        <CardContent className="cardContent">
          <div className="info">
            <Typography variant="body1">Order {id}</Typography>
            {items.map((item) => {
              return (
                <div className="cartRow" key={item.name}>
                  <Typography variant="body1">
                    {item.name}
                  </Typography>
                  <div className="dash" />
                  <Typography variant="body1">
                    {item.quantity} x $1.5
                  </Typography>
                </div>
              );
            })}
            {/* <div className="quantityRow">
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
            </div> */}
          </div>
          {/* <div className="pic">
            <img src={DonutPic} />
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Payload;
