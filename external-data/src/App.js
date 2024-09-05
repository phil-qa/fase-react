import "./App.css";
import data from "./developmentData/itemsData.json";
import ItemCard from "./components/Items";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Unicode Characters</h1>
        <div className="items-grid">
          {data.map((item) => (
            <ItemCard
              key={item.id}
              symbol={item.symbol}
              name={item.name}
              unicodeVal={item.unicodeVal}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
