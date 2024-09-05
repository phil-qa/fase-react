import logo from "./logo.svg";
import "./App.css";
import addConfetti from "./components/AddConfetti";

function App() {
  return (
    <div className="App">
      <h1>The confetti button</h1>
      <button onClick={addConfetti}>Confetti Time</button>
    </div>
  );
}

export default App;
