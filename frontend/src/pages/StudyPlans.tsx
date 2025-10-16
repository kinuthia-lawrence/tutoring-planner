import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaPlus,
  FaRegClock,
} from "react-icons/fa";

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-6 md:p-4 flex flex-col min-h-[120px] transition hover:shadow-xl hover:border-purple-300";

const StudyPlans: React.FC = () => {
  return (
    <div className="min-h-[80vh] w-full px-4 py-8 max-w-5xl mx-auto bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-2 tracking-tight drop-shadow-sm">
        Study Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {/* Calendar Card */}
        <div className={cardClass + " md:col-span-2"}>
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-blue-600 text-2xl" />
            <span className="font-bold text-lg text-blue-700">Calendar</span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-blue-50 border border-blue-100 border-opacity-50 rounded-lg p-4 flex flex-col gap-2 shadow-sm">
              <span className="font-semibold text-blue-700">
                Today: Thursday, Oct 16
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold border border-purple-200">
                  Math: Algebra (4:00pm)
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200">
                  Science: Physics (6:00pm)
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="bg-blue-700 text-white px-4 py-1 rounded-full font-semibold shadow hover:bg-blue-800 transition text-xs flex items-center gap-1">
                <FaPlus /> Add Task
              </button>
              <button className="bg-purple-700 text-white px-4 py-1 rounded-full font-semibold shadow hover:bg-purple-800 transition text-xs flex items-center gap-1">
                <FaCalendarAlt /> View Full Calendar
              </button>
            </div>
          </div>
        </div>
        {/* Today's Tasks Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <span className="font-bold text-lg text-green-700">
              Today's Tasks
            </span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Complete Algebra practice set</li>
            <li>Review Physics notes</li>
            <li>French vocab flashcards</li>
          </ul>
          <button className="mt-3 px-4 py-1 bg-green-50 border border-green-200 border-opacity-50 rounded-full text-green-700 text-xs font-semibold shadow-sm hover:bg-green-100 transition">
            Mark All Done
          </button>
        </div>
        {/* Upcoming Goals Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaRegClock className="text-yellow-500 text-2xl" />
            <span className="font-bold text-lg text-yellow-700">
              Upcoming Goals
            </span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Finish Science project (Due: Oct 20)</li>
            <li>Book session with French tutor</li>
            <li>Reach 10-day study streak</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPlans;
