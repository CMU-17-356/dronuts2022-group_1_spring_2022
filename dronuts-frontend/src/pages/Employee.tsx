import Header from "../components/Header";
import { Typography } from "@mui/material";
import "./Employee.css";
import Payload from "../components/Payload";
import menuList from "../assets/menuList";

function App() {
  const testPayloads = [
    {
      id: 1, 
      customerId: 12, 
      items: [
        {itemId: 1, count: 3},
        {itemId: 2, count: 1},
        {itemId: 3, count: 1},
        {itemId: 4, count: 1}
      ],
      address: "5000 Forbes Ave."
    },
    {
      id: 2,
      customerId: 14,
      items: [
        {itemId: 1, count: 1},
        {itemId: 3, count: 1},
        {itemId: 5, count: 1},
      ],
      address: "1 infinite loop."
    },
    {
      id: 3, 
      customerId: 20, 
      items: [
        {itemId: 1, count: 2},
        {itemId: 8, count: 1},
        {itemId: 9, count: 2},
      ],
      address: "1000 Morewood Ave."
    }
  ]

  function getItems(ids: {itemId: number, count: number}[]) {
    return ids.map((object) => {
      return (
        {
          name: menuList[object.itemId].name,
          quantity: object.count
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
          {testPayloads.map((object, index) => {
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
