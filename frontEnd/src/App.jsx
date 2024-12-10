import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { createContext } from 'react';
import './index.css'
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import ShortestPath from './components/shortestPath/ShortestPath.jsx';
// import ShortestPath from './components/shortestPath/ShortestPath';

 

const App = () => {
    return (
        <>
        <Outlet/>
        </>
    );
};

export default App;
