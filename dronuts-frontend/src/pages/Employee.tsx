import Header from "../components/Header";
import { Typography } from "@mui/material";
import "./Employee.css";
import Payload from "../components/Payload";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  customerId: number;
  items: { itemId: number; quantity: number }[];
  address: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  classic: boolean;
}

function App() {
  const [orders, setOrders] = useState<Array<Order>>([]);

  const [menu, setMenu] = useState<Array<MenuItem>>([]);

  async function fetchMenu() {
    try {
      const response = await fetch("/donuts").then((res) => res.json());
      setMenu(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchOrders() {
    try {
      const response = await fetch("/order").then((res) => res.json());
      setOrders(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchMenu();
    fetchOrders();
  }, []);

  function getName(itemId: number) {
    const item = menu.filter((item) => item.id == itemId)[0];
    if (item) {
      return item.name;
    } else {
      return "";
    }
  }

  function getItems(ids: { itemId: number; quantity: number }[]) {
    return ids.map((object) => {
      return {
        name: getName(object.itemId),
        quantity: object.quantity,
      };
    });
  }

  const droneCount = 6;

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="payloadList">
          <Typography variant="h4" className="payloadHeader">
            Payloads
          </Typography>
          {orders.map((object, index) => {
            return (
              <Payload
                key={index}
                id={object.id}
                droneId={(index % droneCount) + 1}
                items={getItems(object.items)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
