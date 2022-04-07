import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [emojisdata, setEmojisdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetching data
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisdata(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  console.log("loading ?", loading);
  console.log("error ?", error);
  console.log("emojisData ?", emojisdata);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
