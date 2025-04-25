import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"; // Removed Router import
import "./App.css";
import { Landing, Home } from "./pages/index";
import { Login, Signup, ForgotPassword, OtpSubmit } from "./features/authentication/pages";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        {/* Authentication section */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OtpSubmit />} />

        {/* Main section */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          {/* Add more routes that require the main layout */}
          {/* <Route path="/booking" element={<Booking />} /> */}
        </Route>

      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
