
import React from "react";
import { FaCalendarAlt, FaChartLine, FaBell, FaTasks, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-6 md:p-4 flex flex-col items-start min-h-[120px] transition hover:shadow-xl hover:border-blue-300";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  // Get user name from localStorage (assume user object has a 'name' property)
  let userName = "User";
  try {
    const userStr = localStorage.getItem("tutornova_user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      if (userObj && userObj.name) userName = userObj.name;
    }
  } catch {
    // ignore JSON parse errors
  }

  return (
    <div className="min-h-[80vh] w-full px-4 py-8 max-w-7xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight drop-shadow-sm">
        Welcome back, <span className="text-purple-700">{userName}!</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        {/* Progress Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaChartLine className="text-blue-600 text-2xl" />
            <span className="font-bold text-lg text-blue-700">Progress</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="text-3xl font-extrabold text-blue-900">78%</span>
            <span className="text-xs text-gray-500">Mastery this month</span>
            <div className="w-full h-2 bg-blue-100 rounded-full mt-2">
              <div className="h-2 bg-blue-500 rounded-full w-[78%]"></div>
            </div>
          </div>
          <button
            className="mt-3 px-4 py-1 bg-blue-50 border border-blue-200 border-opacity-50 rounded-full text-blue-700 text-xs font-semibold shadow-sm hover:bg-blue-100 transition"
            onClick={() => navigate("/dashboard/progress")}
          >
            View Progress
          </button>
        </div>
        {/* Study Plan Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaTasks className="text-purple-600 text-2xl" />
            <span className="font-bold text-lg text-purple-700">Study Plan</span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Math: Algebra practice (Today)</li>
            <li>Science: Physics revision (Tomorrow)</li>
            <li>Language: French vocab (Friday)</li>
          </ul>
          <button
            className="mt-3 px-4 py-1 bg-purple-50 border border-purple-200 border-opacity-50 rounded-full text-purple-700 text-xs font-semibold shadow-sm hover:bg-purple-100 transition"
            onClick={() => navigate("/dashboard/study-plans")}
          >
            View Full Plan
          </button>
        </div>
        {/* Upcoming Sessions Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-blue-400 text-2xl" />
            <span className="font-bold text-lg text-blue-600">Upcoming Sessions</span>
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700">Thu 4pm:</span> Math with Mr. Smith
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700">Fri 2pm:</span> French with Ms. Dubois
            </div>
          </div>
          <button
            className="mt-3 px-4 py-1 bg-blue-50 border border-blue-200 border-opacity-50 rounded-full text-blue-700 text-xs font-semibold shadow-sm hover:bg-blue-100 transition"
            onClick={() => navigate("/dashboard/find-tutor")}
          >
            Book New Session
          </button>
        </div>
        {/* Notifications Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaBell className="text-yellow-500 text-2xl" />
            <span className="font-bold text-lg text-yellow-600">Notifications</span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Session confirmed: Math with Mr. Smith</li>
            <li>New message from Ms. Dubois</li>
            <li>Progress badge unlocked!</li>
          </ul>
          <button
            className="mt-3 px-4 py-1 bg-yellow-50 border border-yellow-200 border-opacity-50 rounded-full text-yellow-700 text-xs font-semibold shadow-sm hover:bg-yellow-100 transition"
            onClick={() => navigate("/dashboard/notifications")}
          >
            View All
          </button>
        </div>
      </div>
      {/* Fancy Welcome Card */}
      <div className="mt-8 w-full flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-gradient-to-r from-purple-100 via-blue-50 to-white border border-blue-200 border-opacity-50 rounded-2xl shadow-lg shadow-purple-100/40 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
            <FaUserGraduate className="text-purple-600 text-5xl md:text-6xl drop-shadow" />
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-1">Ready to achieve your goals?</h2>
              <p className="text-gray-700 text-base mb-2">Check your study plan, book a session, or ask Nova for help anytime.</p>
              <div className="flex gap-3 mt-2">
                <button
                  className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
                  onClick={() => navigate("/dashboard/find-tutor")}
                >
                  Find a Tutor
                </button>
                <button
                  className="bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-purple-800 transition"
                  onClick={() => navigate("/dashboard/ai-assistant")}
                >
                  AI Assistance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
