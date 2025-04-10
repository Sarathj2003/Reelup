import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Logo from '../assets/reelupLogo.svg'

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-600 flex flex-col justify-center items-center relative px-4 text-center">
        <button
            className="absolute top-4 right-4 bg-white text-black font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out text-sm sm:text-base"
            onClick={() => navigate("/login")}
        >
            Login / Signup
        </button>

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

        <button
            className="bg-red-900 hover:bg-red-800 transition duration-300 ease-in-out text-white px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-medium flex items-center gap-2 transform hover:translate-x-1 text-sm sm:text-base"
            onClick={() => navigate("/home")}
        >
            Explore
            <ArrowRightIcon className="h-5 w-5" />
        </button>
    </div>
  );
};

export default Landing;
