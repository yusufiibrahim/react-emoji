import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [emojisdata, setEmojisdata] = useState([]);

  useEffect(() => {
    // fetching data
    async function fetchEmojis() {
      const res = await axios.get(
        "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
      );
      console.log(res);
    }

    fetchEmojis();
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
