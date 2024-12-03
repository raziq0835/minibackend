import React, { useState } from 'react';
import axios from 'axios';
import './shortestPath.css';


const ShortestPath = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [path, setPath] = useState(null);
  const [error, setError] = useState(null);

  const fetchShortestPath = async () => {
    try {
      const response = await axios.get('http://localhost:5000/', {
        params: { start, end },
      });
      setPath(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching shortest path:', err);
      setError('Unable to fetch the shortest path. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShortestPath();
  };

  return (
    <div>
      <h1>Shortest Path Finder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input
            type="text" name="fromthis"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
          />
          <select for="fromthis">
            <option>3</option>
            <option>5</option>
            <option>4</option>
            {

            }
          </select>
        </label>
        <label>
          End:
          <input
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
          />
        </label>
        <button type="submit">Find Path</button>
      </form>

      {path && (
        <div>
          <h2>Shortest Path:</h2>
          <p>{path.join(' -> ')}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ShortestPath;
