import "./App.css";
import Games from "./component/Games";
import Title from "./component/Title"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <div className="App-body">
        <Games />
      </div>
    </div>
  );
}

export default App;
