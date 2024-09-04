import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card name="Phil" age="57" role="Instructor" isVerified={true} />
      <Card name="Joe" age="21" role="Student" isVerified={false} />
      <Card name="Will" age="33" role="Student Advisor" isVerified={true} />
    </div>
  );
}

export default App;
