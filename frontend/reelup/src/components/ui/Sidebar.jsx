// Sidebar.jsx
import SidebarItem from "./SidebarItem";
import {
  FiHome, FiFilm, FiMapPin, FiCalendar,
  FiGift, FiHeart, FiUser, FiHelpCircle
} from "react-icons/fi";

const Sidebar = ({ isExpanded }) => {
  const items = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiFilm />, label: "Movies" },
    { icon: <FiMapPin />, label: "Cinemas" },
    { icon: <FiCalendar />, label: "My Tickets" },
    { icon: <FiGift />, label: "Offers" },
    { icon: <FiHeart />, label: "Watchlist" },
    { icon: <FiUser />, label: "Profile" },
    { icon: <FiHelpCircle />, label: "Support" },
  ];

  return (
    // STEP 3: Use isExpanded from props
    <div className={`bg-red-600 h-[calc(100vh-4rem)] flex flex-col transition-all duration-300 ${isExpanded ? "w-48" : "w-16"}`}>
      <div className="flex flex-col gap-1 mt-4 ml-3">
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} isExpanded={isExpanded} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
