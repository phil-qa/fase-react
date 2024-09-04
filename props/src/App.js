import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card name="Phil" age="57" role="Instructor" />
      <Card name="Joe" age="21" role="Student" />
      <Card name="Will" age="33" role="Student Advisor" />
    </div>
  );
}

export default App;
