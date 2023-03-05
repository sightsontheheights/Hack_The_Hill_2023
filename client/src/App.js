import Result from "./components/Result/Result";
import Menu from "./components/Menu/Menu";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <main>
          <Input />
          <Result />
        </main>

        <Menu />
        </div>
      </header>
    </div>
  );
}

export default App;
