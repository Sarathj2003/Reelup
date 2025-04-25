const SidebarItem = ({ icon, label, isExpanded }) => {
    return (
      <div className="flex items-center gap-3 p-3 h-13 w-35 hover:bg-white/10 cursor-pointer ">
        <span className="text-xl">{icon}</span>
        {isExpanded && <span className="font-medium ">{label}</span>}
      </div>
    );
  };
  
  export default SidebarItem;
  