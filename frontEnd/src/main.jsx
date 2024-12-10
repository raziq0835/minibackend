import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Path from './pages/path/path.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home/Home.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Page Not Found</div>,
    children: [
      {
        index: true, // Makes it the default child route
        element: <App />,
      },
      {
        path: 'home',
        element: <App />,
      },
      {
        path: 'path',
        element: <Path/>,
        errorElement: <div>404 Page Not Found</div>,
      },
    ],
  }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode> 
)
