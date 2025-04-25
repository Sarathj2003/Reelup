// Sidebar.jsx
import SidebarItem from "./SidebarItem";
import {
  FiHome, FiFilm, FiMapPin, FiCalendar,
  FiGift, FiHeart, FiUser, FiHelpCircle
} from "react-icons/fi";

const Sidebar = ({ isExpanded }) => {
  const items = [
    { icon: <FiHome />, label: "Home", to: '/home' },
    { icon: <FiFilm />, label: "Movies", to: '/movies' },
    { icon: <FiMapPin />, label: "Cinemas", to: '/cinemas' },
    { icon: <FiCalendar />, label: "My Tickets", to: '/my_tickets' },
    { icon: <FiGift />, label: "Offers", to: '/offers' },
    { icon: <FiHeart />, label: "Watchlist", to: '/watchlist' },
    { icon: <FiUser />, label: "Profile", to: '/profile' },
    { icon: <FiHelpCircle />, label: "Support", to: '/support' },
  ];

  return (
    // STEP 3: Use isExpanded from props
    <div className={`bg-red-600 h-[calc(100vh-4rem)] flex flex-col  ${isExpanded ? "w-48" : "w-16"}`}>
      <div className="flex flex-col gap-1 mt-4 ml-3 ">
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} isExpanded={isExpanded} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
