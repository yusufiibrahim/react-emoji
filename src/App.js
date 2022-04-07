import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// components
import Navbar from "./components/Navbar/navbar.jsx";
import Container from "./components/Container/container.jsx";

function App() {
  const [emojisData, setEmojisData] = useState([]);
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
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading && <p>Loading ....</p>}
        {error && <p>Oooopppsss... you got an error</p>}
        {emojisData.length > 0 && <p>Emojis Data sukses!</p>}
      </Container>
    </>
  );
}

export default App;
