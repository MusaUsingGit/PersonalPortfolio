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
import SecretPage from "./Pages/SecretPage";

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
  },{
    path:"/secretPage",
    element:<SecretPage />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
