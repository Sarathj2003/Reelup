import { useState, useEffect, useRef } from "react";
import { FiUser } from "react-icons/fi";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white dark:text-black p-2 bg-red-600 rounded-full hover:bg-red-700"
      >
        <FiUser size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md rounded-lg z-10">
          <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Login</div>
          <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Signup</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
