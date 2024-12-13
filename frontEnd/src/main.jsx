import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Path from "./pages/path/path.jsx";
import ShortestPath from "./components/shortestPath/ShortestPath.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>, // Use a dedicated ErrorPage
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "path",
        element: <Path />,
      },
      {
        path: "pa",
        element: (
          <ShortestPath
            rooms={[
              { id: 1, name: "Main Gate", floor: 0, x_coord: 0, y_coord: 0 },
              {
                id: 2,
                name: "Main Hall Door",
                floor: 0,
                x_coord: 5,
                y_coord: 5,
              },
              {
                id: 3,
                name: "Dining Hall Door",
                floor: 0,
                x_coord: 10,
                y_coord: 10,
              },
            ]}
          />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
