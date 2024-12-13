import ShortestPath from "../../components/shortestPath/ShortestPath.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Path() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/rooms");
        setRooms(response.data);
        console.log(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Unable to fetch the rooms. Please try again.");
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <main className="homepage-main">
        <section className="path-container">
          {error ? <p>{error}</p> : <ShortestPath rooms={rooms} />}
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Path;
