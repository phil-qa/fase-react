import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(20);
  const [count, setCount] = useState(1);

  function double() {
    setCount(count * 2);
  }

  function increaseTemperature() {
    setTemperature(temperature + 1);
  }
  function decreaseTemperature() {
    setTemperature(temperature - 1);
  }

  return (
    <div className="App">
      <h1>Thermostat</h1>
      <h2>{temperature}&#176;C</h2>
      <div>
        <button className="btn mr-1" onClick={increaseTemperature}>
          +
        </button>
        <button className="btn" onClick={decreaseTemperature}>
          -
        </button>
      </div>
      <div>
        <h1>Powers of 2</h1>
        <h2>{count.toLocaleString()}</h2>
        <button onClick={double}>X2</button>
      </div>
    </div>
  );
}

export default App;
