import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { useState } from "react";
import "./App.css";
import { Landing, Home, Login, Signup } from "./pages/index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
