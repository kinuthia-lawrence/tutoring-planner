import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full px-4 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">Dashboard</h1>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-700 mb-2">Welcome back!</h2>
          <p className="text-gray-700">Track your study time, mastery, and upcoming sessions here.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-blue-700 mb-1">Study Time</h3>
            <p className="text-gray-700">12 hrs this week</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-blue-700 mb-1">Mastery</h3>
            <p className="text-gray-700">Algebra: 80% | Physics: 65%</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-blue-700 mb-1">Upcoming Sessions</h3>
            <p className="text-gray-700">Math with Bob - Oct 20, 10:00 AM</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
