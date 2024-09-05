import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Shop />
    </>
  );
}

export default App;
