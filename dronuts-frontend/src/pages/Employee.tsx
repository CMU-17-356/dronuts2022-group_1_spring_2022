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

interface OrderStatus {
  orderId: number;
  drontId: number;
  status: string;
}

function App() {
  const [orders, setOrders] = useState<Array<Order>>([]);

  const [menu, setMenu] = useState<Array<MenuItem>>([]);

  const [statuses, setStatuses] = useState<Array<OrderStatus>>([]);

  async function fetchMenu() {
    try {
      const response = await fetch("https://dronuts-backend-344601.ue.r.appspot.com/donuts").then((res) => res.json());
      setMenu(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchOrders() {
    try {
      const response = await fetch('https://dronuts-backend-344601.ue.r.appspot.com/order').then((res) => (res.json()));
      setOrders(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchStatuses() {
    try {
      const response = await fetch("https://dronuts-backend-344601.ue.r.appspot.com/orderstatuses").then((res) => res.json());
      setStatuses(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchMenu();
    fetchOrders();
    fetchStatuses();
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

  function getStatus(orderId: number) {
    const status = statuses.filter((item) => item.orderId == orderId)[0];
    if (status) {
      return status.status;
    } else {
      return "Pending"
    }
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
            const status = getStatus(object.id);
            return (
              <Payload
                key={index}
                id={object.id}
                status={status}
                droneId={(index % droneCount) + 1}
                items={getItems(object.items)}
                statuses={statuses}
                setStatuses={setStatuses}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
