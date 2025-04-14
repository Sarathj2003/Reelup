import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Logo from '../assets/reelupLogo.svg'
import SecondaryButton from "../components/ui/SecondaryButton";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-600 flex flex-col justify-center items-center relative px-4 text-center">
      <div className="flex flex-col items-center text-center max-w-2xl px-4">
        <div className="flex gap-2 sm:gap-4 md:gap-8 items-center mb-2">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-white">
            Reelup
          </h1>
          <img
            src={Logo}
            alt="Logo"
            className="h-[80px] sm:h-[100px] md:h-[130px] -ml-2 sm:-ml-4 md:-ml-6"
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 mt-3">
          Book. Watch. Repeat.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <SecondaryButton className="w-full" onClick={() => navigate("/login")}>
          Login / Signup
        </SecondaryButton>

        <button
          className="w-full sm:w-auto bg-red-900 hover:bg-red-800 transition duration-300 ease-in-out text-white px-4 py-3 rounded-xl font-medium flex items-center gap-2 transform hover:translate-x-1 text-sm sm:text-base"
          onClick={() => navigate("/home")}
        >
          Explore
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
