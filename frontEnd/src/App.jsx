import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import './index.css'
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx'
import Path from './pages/path/path.jsx';
// import ShortestPath from './components/shortestPath/ShortestPath';

 

const App = () => {
    const [rooms, setRooms] = useState([]); // Correct usage of useState
    const [error, setError] = useState(null); // Optional: Manage errors
  



    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0";
        document.head.appendChild(meta);
      }, []);


    useEffect(() => {
      const fetchRooms = async () => {
        try {
          const response = await axios.get('http://localhost:5000/rooms/');
          setRooms(response.data); // Update state with the fetched data
          console.log(response.data);
          setError(null); // Clear errors on success
        } catch (err) {
          console.error('Error fetching rooms:', err);
          setError('Unable to fetch the rooms. Please try again.');
        }
      };
  
      fetchRooms(); // Call the async function
    }, []); 
  

 

    return (
        <>
        <Home/>
        </>
    );
};

export default App;
