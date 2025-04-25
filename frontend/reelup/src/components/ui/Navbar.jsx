// Navbar.jsx
import UserMenu from "./UserMenu";
import ThemeToggle from './ThemeToggle';
import InputField from "../form/InputField";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-red-600 px-4 h-16 flex items-center justify-between">
      {/* STEP 2: Menu button triggers toggle from props */}
      <div className="flex items-center gap-2 text-white dark:text-black font-bold text-xl">
        <button onClick={onToggleSidebar} className="p-2 text-2xl">
          <FiMenu />
        </button>
        Reelup.
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md flex items-center">
          <InputField
            type="text"
            placeholder="Search"
            className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 py-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 text-white">
        <UserMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
