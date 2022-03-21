import React from "react";
import "./Payload.css";
import { Card, CardContent, Typography } from "@mui/material";

interface PayloadProps {
  id: number;
  droneId: number;
  items: {name: string, quantity: number}[];
}

function Payload(props: PayloadProps) {
  const { id, droneId, items } = props;

  return (
    <div className="Payload">
      <Card variant="outlined">
        <CardContent className="cardContent">
          <div className="info">
            <Typography variant="h6">Order #{id}</Typography>
            {items.map((item, index) => {
              return (
                <div className="cartRow" key={index}>
                  <Typography variant="body1">
                    {item.name}
                  </Typography>
                  <div className="dash" />
                  <Typography variant="body1">
                    x {item.quantity}
                  </Typography>
                </div>
              );
            })}
          </div>
          <div className="assignedDrone">
            <Typography variant="body1">Load To</Typography>
            <Typography variant="h3">D{droneId}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Payload;
