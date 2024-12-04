import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShortestPath from './components/shortestPath/ShortestPath.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Page Not Found</div>,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      
    ],
  },
  {
    path:'/path',
    element: <ShortestPath/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode> 
)
