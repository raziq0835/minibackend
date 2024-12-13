// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import down from '../../assets/dir/down.png'
// import up from '../../assets/dir/up.svg'
// import right from '../../assets/dir/right.svg'
// import left from '../../assets/dir/left.svg'
// import './shortestPath.css';


// const ShortestPath = ({ rooms }) => {
//   const [start, setStart] = useState('');
//   const [end, setEnd] = useState('');
//   const [path, setPath] = useState(null);
//   const [error, setError] = useState(null);
//   const [imgUrl ,setImgUrl] = useState('');
//   const [dir,setDir] = useState([]);
//   const [currDir,setCurrDir] = useState(null);
//   const [i,setI] = useState(0);


//   const fetchShortestPath = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/', {
//         params: { start, end },
//       });
//       setPath(response.data.instructions);
//       console.log(path)
      
//       setDir(response.data.directions);
//       console.log(dir)
//       setError(null);
      

      
      
    

      
      
//     } catch (err) {
//       console.error('Error fetching shortest path:', err);
//       setError('Unable to fetch the shortest path. Please try again.');
//     }
//   };

//   const initialset = () => {
//     setCurrDir(path[i]);
//     handelUrlChange();
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchShortestPath();
//   };

//   const handleStartChange = (e) => {
//     const selectedValue = e.target.value;
//     setStart(selectedValue);
//   };

//   const handleEndChange = (e) => {
//     const selectedValue = e.target.value;
//     setEnd(selectedValue);
//   };

//   const handelUrlChange = () => {
//     if(dir[i] === 1)
//       setImgUrl(up);
//     else if(dir[i] === 2)
//       setImgUrl(right);
//     else
//       setImgUrl(left);

//   }

//   // const handelUrlChange = () => {
//   //   if (dir[i] === 1) setImgUrl(up);
//   //   else if (dir[i] === 2) setImgUrl(right);
//   //   else setImgUrl(left);
//   // };

//   const handelBack = () => {
//     if (i > 0) {  
//       setI(i-1);
//       handelUrlChange(); 
//       let d = path[i];
//       setCurrDir(d);  
//     }
//   };

//   const handelEnd = () => {
//     setPath(null);  
//     setDir(null);  
//     setCurrDir(null);  
//     setImgUrl('');
//     setI(0);  
//   };

//   const handelNext = () => {
//     if (i < path.length) {  
//       setI(i+1);
//       handelUrlChange();  
//       let d = path[i];
//       setCurrDir(d);  
//     }
//   };

//   return (
//   <>
    
//     <div className='path-navigator'>
//       <h1>Shortest Path Finder</h1>

      

//       <form onSubmit={handleSubmit}>
//         <label>
//           Start:
//           <input
//             type="text"
//             name="start"
//             value={start}
//             onChange={(e) => setStart(e.target.key)}
//             required
//             placeholder="Select or type start location"
//           />
//           <select value={start} onChange={handleStartChange}>
//             <option value="">Select Start Location</option>
//             {rooms.map((room) => (
//               <option value={room.id} key={room.name}>
//                 {room.name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           End:
//           <input
//             type="text"
//             name="end"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             required
//             placeholder="Select or type end location"
//           />
//           <select value={end} onChange={handleEndChange}>
//             <option value="">Select End Location</option>
//             {rooms.map((room) => (
//               <option value={room.name} key={room.id}>
//                 {room.name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button type="submit">Find Path</button>
//       </form> 

//       {path && (
//         <div className="path-text">
//           <h2>Shortest Path:</h2>
//           {/* <p>{path.join(' -> ')}</p> */}
//           <p>`The Shortest path betwieen  ${start} and ${end} is ${}`</p>
//         </div>
//       )}

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
















//       {path && 
//       (
//         <div className='path-navigator'>
//         <h1>Shortest Path Finder</h1>

//         <img src={imgUrl} alt='direction'/>

//       <button  onClick={ handelBack}>Back</button>
//       <button onClick={ handelEnd}>End</button>
//       <button onClick={ handelNext}>Next</button>
//          {/* <form onSubmit={handleSubmit}>
//           <label>
//             Start:
//             <input
//               type="text"
//               name="start"
//               value={start}
//               onChange={(e) => setStart(e.target.key)}
//               required
//               placeholder="Select or type start location"
//             />
//             <select value={start} onChange={handleStartChange}>
//               <option value="">Select Start Location</option>
//               {rooms.map((room) => (
//                 <option value={room.name} key={room.id}>
//                   {room.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             End:
//             <input
//               type="text"
//               name="end"
//               value={end}
//               onChange={(e) => setEnd(e.target.value)}
//               required
//               placeholder="Select or type end location"
//             />
//             <select value={end} onChange={handleEndChange}>
//               <option value="">Select End Location</option>
//               {rooms.map((room) => (
//                 <option value={room.name} key={room.id}>
//                   {room.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <button type="submit">Find Path</button>
//         </form> */}
  
//         <div className="path-text">
//           <h2>Shortest Path:</h2>
//           <p>{currDir}</p>
//         </div>
  
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//       )}


    
//     </>

    
      
        
//   );
// };

// export default ShortestPath;



import React, { useState } from 'react';
import axios from 'axios';
import up from '../../assets/dir/up.svg';
import right from '../../assets/dir/right.svg';
import left from '../../assets/dir/left.svg';
import './shortestPath.css';

const ShortestPath = ({ rooms }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [path, setPath] = useState(null);
  const [error, setError] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [dir, setDir] = useState([]);
  const [currDir, setCurrDir] = useState(null);
  const [i, setI] = useState(0);

  const fetchShortestPath = async () => {
    try {
      const response = await axios.get('http://localhost:5000/', {
        params: { start, end },
      });
      const { instructions, directions } = response.data;
      setPath(instructions);
      setDir(directions);
      setError(null);
      setI(0); // Reset index
      setCurrDir(instructions[0] || ''); // Initialize current direction
      updateImgUrl(directions[0]);
    } catch (err) {
      console.error('Error fetching shortest path:', err);
      setError('Unable to fetch the shortest path. Please try again.');
    }
  };

  const updateImgUrl = (direction) => {
    switch (direction) {
      case 1:
        setImgUrl(up);
        break;
      case 2:
        setImgUrl(right);
        break;
      case 3:
        setImgUrl(left);
        break;
      default:
        setImgUrl('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShortestPath();
  };

  const handleNext = () => {
    if (i < path.length - 1) {
      const nextIndex = i + 1;
      setI(nextIndex);
      setCurrDir(path[nextIndex]);
      updateImgUrl(dir[nextIndex]);
    }
  };

  const handleBack = () => {
    if (i > 0) {
      const prevIndex = i - 1;
      setI(prevIndex);
      setCurrDir(path[prevIndex]);
      updateImgUrl(dir[prevIndex]);
    }
  };

  const handleEnd = () => {
    setPath(null);
    setDir([]);
    setCurrDir(null);
    setImgUrl('');
    setI(0);
  };

  return (
    <>
    <div className="path-navigator">
      <h1>Shortest Path Finder</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <select value={start} onChange={(e) => setStart(e.target.value)} required>
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
          <select value={end} onChange={(e) => setEnd(e.target.value)} required>
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
        <div className="path-display">
          <h2>Shortest Path:</h2>
          <p>The shortest path between {start} and {end} is: {path.join(' -> ')}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      
    </div>


      
        {path && (
        <div className='path-navigator'>
         <h1>Shortest Path Finder</h1>
          <img src={imgUrl} alt="direction" />
          <p>{currDir}</p>
          <div className='nav-buttons'>
            <button onClick={handleBack} disabled={i === 0}>
              Back
            </button>
            <button onClick={handleEnd}>End</button>
            <button onClick={handleNext} disabled={i === path.length - 1}>
              Next
            </button>
          </div>
        </div>
      )}
      
      </>
  );
};

export default ShortestPath;
