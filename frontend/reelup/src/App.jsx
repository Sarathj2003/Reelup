import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"; // Removed Router import
import "./App.css";
import { Landing, Home } from "./pages/index";
import { Login, Signup } from "./features/authentication/pages/index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
