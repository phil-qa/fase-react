import { useState, useEffect } from "react";
import "./App.css";
const apiUrl = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((Response) => Response.json())
      .then((data) => setImageUrl(data.message));
  }, []);

  return (
    <main>
      <h1>Go Fetch</h1>
      <img width="300" src={imageUrl} alt="doggy" />
    </main>
  );
}

export default App;
