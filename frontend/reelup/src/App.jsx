import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"; // Removed Router import
import "./App.css";
import { Landing, Home } from "./pages/index";
import { Movies, Cinemas, My_tickets, Offers, Watchlist, Profile, Support } from "./features";
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
          <Route path="/movies" element={<Movies />} />
          <Route path="/cinemas" element={<Cinemas />} />
          <Route path="/my_tickets" element={<My_tickets />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Route>

      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
