import React, { useState } from 'react';
import axios from 'axios';
import './shortestPath.css';

const ShortestPath = ({ rooms }) => {
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

  const handleStartChange = (e) => {
    const selectedValue = e.target.value;
    setStart(selectedValue);
  };

  const handleEndChange = (e) => {
    const selectedValue = e.target.value;
    setEnd(selectedValue);
  };

  return (
    <div>
      <h1>Shortest Path Finder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input
            type="text"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
            placeholder="Select or type start location"
          />
          <select value={start} onChange={handleStartChange}>
            <option value="">Select Start Location</option>
            {rooms.map((room) => (
              <option value={room.id} key={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          End:
          <input
            type="text"
            name="end"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
            placeholder="Select or type end location"
          />
          <select value={end} onChange={handleEndChange}>
            <option value="">Select End Location</option>
            {rooms.map((room) => (
              <option value={room.id} key={room.id}>
                {room.name}
              </option>
            ))}
          </select>
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
