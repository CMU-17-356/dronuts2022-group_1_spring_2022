import Header from "../components/Header";
import { Typography } from "@mui/material";
import "./Employee.css";
import Payload from "../components/Payload";
import menuList from "../assets/menuList";
import { useEffect, useState } from "react";

interface Order {
  id: number, 
  customerId: number, 
  items: {itemId: number, quantity: number}[],
  address: string,
}

function App() {

  const [orders, setOrders] = useState<Array<Order>>([]);

  async function fetchOrders() {
    try {
      const response = await fetch('/order').then((res) => (res.json()));
      setOrders(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  function getItems(ids: {itemId: number, quantity: number}[]) {
    return ids.map((object) => {
      return (
        {
          name: menuList[object.itemId].name,
          quantity: object.quantity
        }
      )
    })
  }

  const droneCount = 6

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
                id={object.id}
                droneId={index % droneCount + 1}
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
