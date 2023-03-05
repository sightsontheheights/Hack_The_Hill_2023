import Menu from "./components/Menu/Menu";
import Input from "./components/Input/Input";
import "./App.css";
import { useState } from "react";

function App() {
  const [updated, setUpdated] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <main>
          <Input
            updated={updated}
            setUpdated={setUpdated}
            message={message}
            setMessage={setMessage}
          />
        </main>

        <Menu setMessage={setMessage} setUpdated={setUpdated} />
        <br></br>
      </div>
    </div>
  );
}

export default App;
