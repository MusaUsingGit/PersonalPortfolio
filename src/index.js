import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/contact",
    element: <Contact />
  },{
    path: "/about",
    element: <About />
  },{
    path: "/projects",
    element: <Projects />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
