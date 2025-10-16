import React, { useState } from "react";
import {
  FaSearch,
  FaStar,
  FaChalkboardTeacher,
  FaFilter,
} from "react-icons/fa";

const tutors = [
  {
    name: "Mr. Smith",
    subject: "Mathematics",
    rating: 4.9,
    bio: "10+ years experience. Specializes in Algebra and Calculus.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    available: "Thu 4pm, Sat 10am",
  },
  {
    name: "Ms. Dubois",
    subject: "French",
    rating: 4.8,
    bio: "Native French speaker. Fun and interactive lessons!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    available: "Fri 2pm, Sun 11am",
  },
  {
    name: "Dr. Patel",
    subject: "Physics",
    rating: 4.7,
    bio: "PhD in Physics. Loves making science simple.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    available: "Mon 5pm, Wed 3pm",
  },
];

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-6 flex flex-col gap-2 min-h-[180px] transition hover:shadow-xl hover:border-blue-300";

const FindTutor: React.FC = () => {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  const filteredTutors = tutors.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      (subjectFilter === "" || t.subject === subjectFilter)
  );

  return (
    <div className="min-h-[80vh] w-full px-4 py-8 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight drop-shadow-sm flex items-center gap-2">
        <FaChalkboardTeacher className="text-purple-700 text-3xl" /> Find a
        Tutor
      </h1>
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <div className="flex items-center w-full md:w-1/2 bg-white border border-blue-100 rounded-full shadow-sm px-4 py-2">
          <FaSearch className="text-blue-400 mr-2" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-sm"
            placeholder="Search by tutor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FaFilter className="text-purple-400" />
          <select
            className="border border-purple-200 rounded-full px-3 py-1 text-sm bg-white text-purple-700 focus:outline-none"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            title="Filter by subject"
          >
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="French">French</option>
            <option value="Physics">Physics</option>
          </select>
        </div>
      </div>
      {/* Tutor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTutors.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12">
            No tutors found.
          </div>
        ) : (
          filteredTutors.map((tutor) => (
            <div className={cardClass} key={tutor.name}>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-14 h-14 rounded-full border border-blue-100 shadow"
                />
                <div>
                  <div className="font-bold text-lg text-blue-800">
                    {tutor.name}
                  </div>
                  <div className="text-xs text-purple-700 font-semibold">
                    {tutor.subject}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                    <FaStar /> {tutor.rating}
                  </div>
                </div>
              </div>
              <div className="text-gray-700 text-sm mb-2">{tutor.bio}</div>
              <div className="text-xs text-blue-700 font-semibold mb-2">
                Available: {tutor.available}
              </div>
              <button className="mt-auto px-4 py-1 bg-blue-700 text-white rounded-full font-semibold text-xs shadow hover:bg-blue-800 transition">
                Book Session
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindTutor;
