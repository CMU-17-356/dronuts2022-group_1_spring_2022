import Header from "../components/Header";
import { Typography } from "@mui/material";
import "./Employee.css";
import Payload from "../components/Payload";

function App() {
  const testPayloads = [
      {
        id: 14,
        droneId: 3,
        items: [
            {
                name: "Glazed",
                quantity: 3
            },
        ]
      },
      {
        id: 22,
        droneId: 5,
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
        id: 23,
        droneId: 4,
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
      },
      {
        id: 1,
        droneId: 2,
        items: [
            {
                name: "Glazed",
                quantity: 3
            },
        ]
      },
      {
        id: 27,
        droneId: 6,
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
        id: 30,
        droneId: 1,
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
        <div className="payloadList">
          <Typography variant="h4" className="payloadHeader">
            Payloads
          </Typography>
          {testPayloads.map((object) => {
            return (
              <Payload
                id={object.id}
                droneId={object.droneId}
                items={object.items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
