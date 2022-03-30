import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library-react/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App</h1>
        <p>You unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink />
        <RandomValue />
      </header>
    </div>
  );
}

export default App;
