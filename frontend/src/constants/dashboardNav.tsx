import { FaTachometerAlt, FaBookOpen, FaUserFriends, FaBell, FaChartLine, FaRobot, FaUniversalAccess } from "react-icons/fa";

export const navItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
  {
    label: "Study Plans",
    icon: <FaBookOpen />,
    path: "/dashboard/study-plans",
  },
  {
    label: "Find Tutor",
    icon: <FaUserFriends />,
    path: "/dashboard/find-tutor",
  },
  {
    label: "Notifications",
    icon: <FaBell />,
    path: "/dashboard/notifications",
  },
  {
    label: "Progress",
    icon: <FaChartLine />,
    path: "/dashboard/progress",
  },
  {
    label: "AI Assistant",
    icon: <FaRobot />,
    path: "/dashboard/ai-assistant",
  },
  {
    label: "Accessibility",
    icon: <FaUniversalAccess />,
    path: "/dashboard/accessibility",
  },
];
