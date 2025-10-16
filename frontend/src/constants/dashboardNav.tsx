import { FaBookOpen, FaChartLine, FaRobot, FaTachometerAlt, FaUniversalAccess, FaUserFriends } from "react-icons/fa";

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
