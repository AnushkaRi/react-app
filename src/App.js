import logo from "./logo.svg";
import "./App.css";
import { idHelpers, arrayHelpers } from "./library-react/helpers";

console.log(arrayHelpers.getRandomElement([1, 2, 3]));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App</h1>
        <p>You unique ID is: {idHelpers.generateId()}</p>
        <a className="App-link" href="https://github.com/AnushkaRi/react-app" target="_blank" rel="noopener noreferrer">
          Github Repository
        </a>
      </header>
    </div>
  );
}

export default App;
