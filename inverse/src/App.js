import { useState } from "react";
import "./App.css";
import ResetButton from "./components/ResetButton";
import IncrementButton from "./components/IncrementButton";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previous) => previous + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main>
      <CounterDisplay count={count} />
      <IncrementButton increment={handleIncrement} />
      <ResetButton reset={handleReset} />
    </main>
  );
}

export default App;
