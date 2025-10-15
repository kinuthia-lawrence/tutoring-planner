import { FaBars, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({ isOpen, toggleSidebar }: HeaderProps) => {
  // Placeholder user data
  const userData = {
    name: "Student",
    email: "student@example.com",
    role: "student",
  };
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 h-16 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-lg relative z-30">
      {/* Left: Sidebar toggle and brand */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <FaBars className="w-5 h-5" />
        </button>
        <div className="ml-4 flex items-center">
          <span className="text-sm sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
            Tutor
          </span>
          <span className="text-sm sm:text-2xl font-extrabold text-gray-700 dark:text-white">
            Nova
          </span>
          <span className="hidden lg:block ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-md">
            Platform
          </span>
        </div>
      </div>
      {/* Right: User and role */}
      <div className="flex items-center space-x-3">
        {/* Role indicator */}
        <span className="hidden sm:flex items-center px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-lg border border-blue-200/50 dark:border-gray-700">
          <span className="mr-1.5 w-2 h-2 rounded-full bg-blue-400"></span>
          {userData.role.toUpperCase()}
        </span>
        {/* User profile menu */}
        <div className="relative group">
          <button
            className="flex items-center focus:outline-none bg-gray-100 dark:bg-gray-800 p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
            onClick={() => setProfileMenuOpen((v) => !v)}
            aria-label="Open profile menu"
          >
            <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
              <FaUserCircle className="w-5 h-5" />
            </div>
          </button>
          {profileMenuOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-1 z-50 border border-gray-100 dark:border-gray-700"
            >
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {userData.email}
                </p>
              </div>
              <div className="p-2">
                <button
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  <FaUserCircle className="w-4 h-4 mr-3 text-blue-500 dark:text-blue-400" />
                  Your Profile
                </button>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 p-2">
                <button
                  type="button"
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg"
                  onClick={() => setProfileMenuOpen(false)}
                  disabled
                >
                  {/* Replace with sign out icon if needed */}
                  <span className="w-4 h-4 mr-3 text-red-500 dark:text-red-400">⎋</span>
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
