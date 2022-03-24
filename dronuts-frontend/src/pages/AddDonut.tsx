import Header from "../components/Header";
import "./AddDonut.css";
import NewDonutForm from '../components/NewDonutForm';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <div className="payloadList">
          <NewDonutForm />
        </div>
      </div>
    </div>
  );
}

export default App;
