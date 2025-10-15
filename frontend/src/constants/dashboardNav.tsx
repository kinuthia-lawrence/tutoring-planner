import { FaTachometerAlt, FaUser, FaBookOpen } from "react-icons/fa";

export const navItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
  { label: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  {
    label: "Study Plans",
    icon: <FaBookOpen />,
    path: "/dashboard/study-plans",
  },
];
