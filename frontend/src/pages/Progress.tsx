import React from "react";
import { FaChartLine, FaMedal, FaClock, FaTrophy } from "react-icons/fa";

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-6 flex flex-col gap-2 min-h-[180px] transition hover:shadow-xl hover:border-blue-300";

const Progress: React.FC = () => {
  return (
    <div className="min-h-[80vh] w-full px-4 py-8 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight drop-shadow-sm flex items-center gap-2">
        <FaChartLine className="text-purple-700 text-3xl" /> Progress
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Study Time Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-blue-600 text-2xl" />
            <span className="font-bold text-lg text-blue-700">Study Time</span>
          </div>
          <div className="text-3xl font-extrabold text-blue-900">12h 30m</div>
          <div className="text-xs text-gray-500">This week</div>
          <div className="w-full h-2 bg-blue-100 rounded-full mt-2">
            <div className="h-2 bg-blue-500 rounded-full w-[70%]"></div>
          </div>
        </div>
        {/* Mastery Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaTrophy className="text-yellow-500 text-2xl" />
            <span className="font-bold text-lg text-yellow-700">Mastery</span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Algebra: <span className="font-bold text-blue-700">80%</span></li>
            <li>Physics: <span className="font-bold text-purple-700">65%</span></li>
            <li>French: <span className="font-bold text-green-700">72%</span></li>
          </ul>
          <div className="w-full h-2 bg-yellow-100 rounded-full mt-2">
            <div className="h-2 bg-yellow-400 rounded-full w-[72%]"></div>
          </div>
        </div>
        {/* Achievements Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaMedal className="text-purple-600 text-2xl" />
            <span className="font-bold text-lg text-purple-700">Achievements</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200"><FaTrophy /> 10-day Streak</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold border border-yellow-200"><FaMedal /> Mastery 70%+</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200"><FaClock /> 10h+ Study</span>
          </div>
        </div>
      </div>
      {/* Mocked Chart Section */}
      <div className="mt-8 w-full bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Weekly Study Progress</h2>
        {/* Placeholder for a chart - replace with a real chart library if needed */}
        <div className="w-full max-w-xl h-40 flex items-end gap-2">
          {/* Mocked bar chart */}
          {(() => {
            const values = [8, 6, 7, 5, 9, 4, 10];
            const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            const heightMap: Record<number, string> = {
              4: "h-[48px]",
              5: "h-[60px]",
              6: "h-[72px]",
              7: "h-[84px]",
              8: "h-[96px]",
              9: "h-[108px]",
              10: "h-[120px]",
            };

            return values.map((v, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className={`w-6 rounded-t-lg bg-blue-400 shadow ${heightMap[v] || "h-24"}`}></div>
                <span className="text-xs text-gray-500 mt-1">{days[i]}</span>
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};

export default Progress;
