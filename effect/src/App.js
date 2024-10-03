import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import AddConfetti from "./components/AddConfetti";

function App()
{
  const [isConfettiEnabled, setIsConfettiEnabled] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() =>
  {
    AddConfetti({ text: count.toString() });
  });

  return (
    <main>
      <h1>Confetti Counter</h1>
      <button onClick={() => setIsConfettiEnabled((previous) => !previous)}>
        Confetti:{isConfettiEnabled ? "On" : "Off"}{" "}
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount((previous) => previous + 1)}>+1</button>
    </main>
  );
}

export default App;
