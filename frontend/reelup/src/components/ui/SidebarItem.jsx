import { Link } from "react-router-dom";



const SidebarItem = ({ icon, label, isExpanded, to }) => {
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 p-1 h-13 w-45 cursor-pointer ${
          isExpanded ? "hover:bg-red-700" : ""
        }`}
      >
        <span className="text-xl rounded-full hover:bg-red-700 p-2">
          {icon}
        </span>
        {isExpanded && <span className="font-medium ">{label}</span>}
      </Link>
    );
  };
  
  export default SidebarItem;
  