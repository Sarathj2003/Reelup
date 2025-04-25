// MainLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/ui';

const MainLayout = () => {
  // STEP 1: Sidebar expand state in parent
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Toggle function to pass to Navbar
  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-white dark:bg-black dark:text-black">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className="p-4 bg-white dark:bg-black text-black dark:text-white flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
