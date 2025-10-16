import React, { useState } from "react";
import { FaBell, FaCheck, FaTrashAlt, FaFilter } from "react-icons/fa";

type Notification = {
  id: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  type?: "session" | "message" | "system";
};

const initial: Notification[] = [
  { id: "1", title: "Session confirmed", body: "Math with Mr. Smith - Thu 4pm", time: "2h ago", unread: true, type: "session" },
  { id: "2", title: "New message", body: "Ms. Dubois replied to your message.", time: "6h ago", unread: true, type: "message" },
  { id: "3", title: "Badge unlocked", body: "You earned the 10-day streak badge.", time: "2d ago", unread: false, type: "system" },
];

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/30 p-4 flex flex-col gap-3 transition hover:shadow-xl hover:border-blue-300";

const Notifications: React.FC = () => {
  const [items, setItems] = useState<Notification[]>(initial);
  const [filter, setFilter] = useState<string>("all");

  const filtered = items.filter((it) => (filter === "all" ? true : it.type === filter));

  const markRead = (id: string) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, unread: false } : it)));
  const clearAll = () => setItems([]);

  return (
    <div className="min-h-[70vh] w-full px-4 py-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 flex items-center gap-2"><FaBell className="text-yellow-500"/> Notifications</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-3 py-1">
            <FaFilter className="text-blue-400" />
            <select className="bg-transparent outline-none text-sm" value={filter} onChange={(e) => setFilter(e.target.value)} title="Filter notifications">
              <option value="all">All</option>
              <option value="session">Sessions</option>
              <option value="message">Messages</option>
              <option value="system">System</option>
            </select>
          </div>
          <button className="text-sm text-red-600 hover:underline flex items-center gap-2" onClick={clearAll} title="Clear all notifications"><FaTrashAlt/> Clear All</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.length === 0 ? (
          <div className="p-6 bg-white border border-gray-100 rounded-lg text-gray-500 text-center">No notifications</div>
        ) : (
          filtered.map((n) => (
            <div key={n.id} className={cardClass} role="article" {...(n.unread ? { 'aria-live': 'polite' } : {})}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-blue-800">{n.title}</h3>
                    {n.unread && <span className="inline-block bg-purple-700 text-white text-xs px-2 py-0.5 rounded-full">New</span>}
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{n.body}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-gray-400">{n.time}</span>
                  {n.unread ? (
                    <button className="text-xs bg-blue-50 border border-blue-100 px-2 py-1 rounded-full text-blue-700" onClick={() => markRead(n.id)} aria-label={`Mark ${n.title} as read`}><FaCheck/></button>
                  ) : (
                    <span className="text-xs text-green-600">Read</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
