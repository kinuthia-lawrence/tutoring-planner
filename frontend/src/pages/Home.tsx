import React from "react";
import { FaRobot, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

const subjects = [
  {
    title: "Mathematics",
    body: "High-quality 1:1 tutoring and practice sets.",
    color: "bg-blue-100 text-blue-900",
  },
  {
    title: "Science",
    body: "Explore physics, chemistry, biology, and more.",
    color: "bg-purple-100 text-purple-900",
  },
  {
    title: "Coding",
    body: "Learn programming with hands-on projects.",
    color: "bg-purple-200 text-purple-900",
  },
  {
    title: "Languages",
    body: "Master new languages with expert tutors.",
    color: "bg-blue-50 text-blue-900 border border-blue-200",
  },
];

const features = [
  {
    title: "Live 1:1 Sessions",
    body: "Book trusted tutors for real-time video sessions and collaborative whiteboards.",
    color: "bg-blue-50",
    icon: <FaChalkboardTeacher className="text-blue-700 text-2xl mb-2" />,
  },
  {
    title: "AI Study Coach",
    body: "Get instant explanations, practice questions and study plans 24/7.",
    color: "bg-purple-50",
    icon: <MdOutlineSmartToy className="text-purple-700 text-2xl mb-2" />,
  },
  {
    title: "Progress Dashboard",
    body: "See your study time, mastery and upcoming sessions in one place.",
    color: "bg-blue-100 text-blue-900",
    icon: <FaChartLine className="text-blue-700 text-2xl mb-2" />,
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between bg-white">
        {/* Start */}
        <div className="flex items-center justify-between md:w-1/3">
          <span className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <FaRobot className="text-purple-700 text-2xl" /> TutorNova
          </span>
          <button className="md:hidden p-2 focus:outline-none" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Center */}
        <div className="hidden md:flex md:w-1/3 justify-center gap-6">
          <a href="#" className="text-black font-medium hover:text-blue-700">Home</a>
          <a href="#dashboard" className="text-black font-medium hover:text-blue-700">Dashboard</a>
        </div>
        {/* End */}
        <div className="hidden md:flex md:w-1/3 justify-end gap-4">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold">Book Session</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold">Sign In</button>
        </div>
        {/* Mobile nav buttons */}
        <div className="flex flex-col gap-2 mt-2 md:hidden">
          <a href="#" className="text-black font-medium hover:text-blue-700">Home</a>
          <a href="#dashboard" className="text-black font-medium hover:text-blue-700">Dashboard</a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold">Book Session</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold">Sign In</button>
        </div>
      </nav>

      {/* Body */}

      <main className="flex-1 w-full px-4 py-6 md:py-2 max-w-7xl mx-auto">
        {/* Section 1 */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-4 items-center mb-10 md:mb-4 min-h-[60vh] md:min-h-[50vh]">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-4 md:gap-2 max-w-xl">
            <h1 className="text-3xl md:text-2xl font-extrabold text-black">
              Personalized online tutoring that adapts to you
            </h1>
            <p className="text-lg md:text-base text-gray-700">
              Find expert tutors, chat with our AI study coach, and track progress with a beautiful dashboard. Learn math, science, languages and more.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Find a Tutor</button>
              <button className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800">Sign In / Sign Up</button>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            {subjects.map((subj) => (
              <div
                key={subj.title}
                className={`rounded-lg shadow p-4 ${subj.color} min-h-[100px] md:min-h-[80px] flex flex-col justify-between`}
              >
                <h2 className="font-bold text-lg md:text-base mb-2">{subj.title}</h2>
                <p className="text-sm md:text-xs">{subj.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 mb-12 md:mb-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-lg shadow p-6 md:p-3 ${feature.color} min-h-[120px] md:min-h-[80px] flex flex-col justify-between items-start`}
            >
              {feature.icon}
              <h3 className="font-bold text-lg md:text-base mb-2">{feature.title}</h3>
              <p className="text-sm md:text-xs">{feature.body}</p>
            </div>
          ))}
        </section>

        {/* Study with Nova (AI Assistant Button) */}
        <button
          className="fixed bottom-12 right-4 z-50 bg-purple-700 text-white p-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-purple-800 focus:outline-none"
          aria-label="Open AI Assistant"
        >
          <FaRobot className="text-sm" /> Study with Nova
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between bg-white text-black">
        <div className="md:w-1/2 text-sm">&copy; 2025 TutorNova, Inc.</div>
        <div className="md:w-1/2 flex justify-end gap-6 mt-2 md:mt-0">
          <a href="#features" className="hover:text-blue-700">Features</a>
          <a href="#pricing" className="hover:text-blue-700">Pricing</a>
          <a href="#faq" className="hover:text-blue-700">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
