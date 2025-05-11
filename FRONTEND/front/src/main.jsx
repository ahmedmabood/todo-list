import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext"; // import it

// Define the router with nested routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} />
    <Route path="/todo" element={<Todo />} />
    </>

  )
);

// Get the root element
const root = document.getElementById("root");

// Render the router
ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <TodoProvider> 
    <RouterProvider router={router} />
  </TodoProvider>
</React.StrictMode>
);
