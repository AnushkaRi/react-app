import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library-react/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { ABQuestion } from "./components/ABQuestions";

function App() {
  const handleButtonAClick = () => console.log("Clicked A");
  const handleButtonBClick = () => console.log("Clicked B");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App</h1>
        <p>You unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink />
        <RandomValue />
        <ABQuestion onButtonAClick={handleButtonAClick} onButtonBClick={handleButtonBClick} />
      </header>
    </div>
  );
}

export default App;
