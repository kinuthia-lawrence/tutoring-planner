import React, { useState } from "react";
import {
  FaRobot,
  FaChalkboardTeacher,
  FaChartLine,
  FaTimes,
} from "react-icons/fa";
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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");
  const handleOpenModal = (tab: "signin" | "signup") => {
    setAuthTab(tab);
    setShowAuthModal(true);
  };
  const handleCloseModal = () => setShowAuthModal(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between bg-white">
        {/* Start */}
        <div className="flex items-center justify-between md:w-1/3">
          <span className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <FaRobot className="text-purple-700 text-2xl" /> TutorNova
          </span>
          <button
            className="md:hidden p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Center */}
        <div className="hidden md:flex md:w-1/3 justify-center gap-6">
          <a href="/" className="text-black font-medium hover:text-blue-700">
            Home
          </a>
          <a
            href="/dashboard"
            className="text-black font-medium hover:text-blue-700"
          >
            Dashboard
          </a>
        </div>
        {/* End: Book Session and Sign In */}
        <div className="hidden md:flex md:w-1/3 justify-end gap-4">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold">
            Book Session
          </button>
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold"
            onClick={() => handleOpenModal("signin")}
          >
            Sign In
          </button>
        </div>
        {/* Mobile nav buttons (none except Home/Dashboard) */}
        <div className="flex flex-col gap-2 mt-2 md:hidden">
          <a href="/" className="text-black font-medium hover:text-blue-700">
            Home
          </a>
          <a
            href="/dashboard"
            className="text-black font-medium hover:text-blue-700"
          >
            Dashboard
          </a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold">
            Book Session
          </button>
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold"
            onClick={() => handleOpenModal("signin")}
          >
            Sign In
          </button>
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
              Find expert tutors, chat with our AI study coach, and track
              progress with a beautiful dashboard. Learn math, science,
              languages and more.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">
                Find a Tutor
              </button>
              <button
                className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800"
                onClick={() => handleOpenModal("signin")}
              >
                Sign In / Sign Up
              </button>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            {subjects.map((subj) => (
              <div
                key={subj.title}
                className={`rounded-lg shadow p-4 ${subj.color} min-h-[100px] md:min-h-[80px] flex flex-col justify-between`}
              >
                <h2 className="font-bold text-lg md:text-base mb-2">
                  {subj.title}
                </h2>
                <p className="text-sm md:text-xs">{subj.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section (merged with section two) */}
        <section id="features" className="mb-12 md:mb-4">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-lg shadow p-6 md:p-3 ${feature.color} min-h-[120px] md:min-h-[80px] flex flex-col justify-between items-start`}
              >
                {feature.icon}
                <h3 className="font-bold text-lg md:text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-xs">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Study with Nova (AI Assistant Button) */}
        <button
          className="fixed bottom-12 right-4 z-50 bg-purple-700 text-white p-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-purple-800 focus:outline-none"
          aria-label="Open AI Assistant"
        >
          <FaRobot className="text-sm" /> Study with Nova
        </button>
        {/* Auth Modal */}
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative p-8 border-2 border-blue-100">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-700 transition"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <FaTimes className="text-2xl" />
              </button>
              <div className="mb-6 text-center">
                <div className="font-extrabold text-2xl text-blue-700 mb-1 tracking-tight flex items-center justify-center gap-2">
                  <FaRobot className="text-purple-700 text-xl" /> Welcome to
                  TutorNova
                </div>
                <div className="text-gray-600 text-base mb-4">
                  Sign in to continue or create a new account.
                </div>
                <div className="inline-flex rounded-lg overflow-hidden shadow mb-4 border border-gray-200">
                  <button
                    className={`px-6 py-2 font-semibold transition ${
                      authTab === "signin"
                        ? "bg-blue-700 text-white"
                        : "bg-gray-50 text-blue-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setAuthTab("signin")}
                  >
                    Sign In
                  </button>
                  <button
                    className={`px-6 py-2 font-semibold transition ${
                      authTab === "signup"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-50 text-purple-700 hover:bg-purple-50"
                    }`}
                    onClick={() => setAuthTab("signup")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              {authTab === "signin" ? (
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 shadow transition"
                  >
                    Sign In
                  </button>
                </form>
              ) : (
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:outline-none transition"
                      placeholder="Create a password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:outline-none transition"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value="student"
                      readOnly
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 shadow transition"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Features, Pricing, FAQ Sections (scrollable) */}
      <section id="pricing" className="w-full px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="rounded-lg shadow p-6 md:p-4 bg-blue-50 flex flex-col items-center border-[0.5px] border-blue-200 hover:shadow-xl transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-3">
              <FaRobot className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Free</h3>
            <p className="text-gray-700 mb-2 text-center">
              Access to AI Study Coach and progress dashboard.
            </p>
            <span className="text-3xl font-extrabold text-blue-900 mb-1">
              $0
            </span>
            <span className="text-xs text-gray-500 mb-3">per month</span>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
              Best for Starters
            </span>
          </div>
          {/* Standard Plan */}
          <div className="rounded-lg shadow p-6 md:p-4 bg-purple-50 flex flex-col items-center border border-purple-700 hover:shadow-xl transition scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-3">
              <FaChalkboardTeacher className="text-purple-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-2">Standard</h3>
            <p className="text-gray-700 mb-2 text-center">
              Book live 1:1 sessions and unlock all features.
            </p>
            <span className="text-3xl font-extrabold text-purple-900 mb-1">
              $19
            </span>
            <span className="text-xs text-gray-500 mb-3">per month</span>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
              Most Popular
            </span>
          </div>
          {/* Premium Plan */}
          <div className="rounded-lg shadow p-6 md:p-4 bg-blue-100 flex flex-col items-center border-[0.5px] border-blue-300 hover:shadow-xl transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-3">
              <FaChartLine className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Premium</h3>
            <p className="text-gray-700 mb-2 text-center">
              Priority tutor matching and unlimited sessions.
            </p>
            <span className="text-3xl font-extrabold text-blue-900 mb-1">
              $39
            </span>
            <span className="text-xs text-gray-500 mb-3">per month</span>
            <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-xs font-semibold border border-blue-300">
              Power Users
            </span>
          </div>
        </div>
      </section>
      <section id="faq" className="w-full px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaRobot className="text-purple-700 text-2xl" />
          Frequently Asked Questions
        </h2>
        <ul className="space-y-6">
          {[
            {
              question: "How do I book a tutoring session?",
              answer:
                "Sign in, find a tutor, and click 'Book Session' to schedule a time that works for you.",
            },
            {
              question: "What is the AI Study Coach?",
              answer:
                "The AI Study Coach provides instant explanations, practice questions, and personalized study plans any time you need help.",
            },
            {
              question: "Can I use TutorNova for free?",
              answer:
                "Yes! You can use the AI Study Coach and dashboard for free. Live sessions require a paid plan.",
            },
            {
              question: "How do I track my progress?",
              answer:
                "Your dashboard shows study time, mastery, and upcoming sessions in one place.",
            },
          ].map((faq, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-purple-200 bg-purple-50 p-5 shadow-sm hover:shadow-lg transition group"
            >
              <h3 className="text-lg font-bold text-purple-700 mb-1 flex items-center gap-2 group-hover:underline">
                <FaRobot className="text-purple-400 text-base" />
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sticky Footer */}
      <footer className="w-full border-t border-gray-200 px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between bg-white text-black sticky bottom-0 left-0 z-40">
        <div className="text-sm">&copy; 2025 TutorNova, Inc.</div>
        <div className="hidden md:flex md:w-1/2 justify-end gap-6 mt-2 md:mt-0">
          <a href="#features" className="hover:text-blue-700">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-700">
            Pricing
          </a>
          <a href="#faq" className="hover:text-blue-700">
            FAQ
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
