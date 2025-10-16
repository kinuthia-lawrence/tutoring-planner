import React, { useState } from "react";
import { FaAdjust, FaFont, FaInfoCircle, FaUniversalAccess } from "react-icons/fa";

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-blue-100/40 p-6 flex flex-col gap-2 min-h-[120px] transition hover:shadow-xl hover:border-blue-300";

const Accessibility: React.FC = () => {
  const [fontSize, setFontSize] = useState("text-base");
  const [contrast, setContrast] = useState("bg-white text-black");

  return (
    <div className={`min-h-[80vh] w-full px-4 py-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col gap-8 ${contrast} ${fontSize}`}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight drop-shadow-sm flex items-center gap-2">
        <FaUniversalAccess className="text-purple-700 text-3xl" /> Accessibility Settings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Font Size Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaFont className="text-blue-600 text-2xl" />
            <span className="font-bold text-lg text-blue-700">Font Size</span>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className={`px-4 py-1 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm transition ${fontSize === "text-sm" ? "bg-blue-100" : "bg-white"}`}
              onClick={() => setFontSize("text-sm")}
              aria-label="Small font size"
            >
              Small
            </button>
            <button
              className={`px-4 py-1 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm transition ${fontSize === "text-base" ? "bg-blue-100" : "bg-white"}`}
              onClick={() => setFontSize("text-base")}
              aria-label="Default font size"
            >
              Default
            </button>
            <button
              className={`px-4 py-1 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm transition ${fontSize === "text-lg" ? "bg-blue-100" : "bg-white"}`}
              onClick={() => setFontSize("text-lg")}
              aria-label="Large font size"
            >
              Large
            </button>
          </div>
        </div>
        {/* Color Contrast Card */}
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2">
            <FaAdjust className="text-purple-600 text-2xl" />
            <span className="font-bold text-lg text-purple-700">Color Contrast</span>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className={`px-4 py-1 rounded-full border border-purple-200 text-purple-700 font-semibold text-sm shadow-sm transition ${contrast === "bg-white text-black" ? "bg-purple-100" : "bg-white"}`}
              onClick={() => setContrast("bg-white text-black")}
              aria-label="Default contrast"
            >
              Default
            </button>
            <button
              className={`px-4 py-1 rounded-full border border-purple-200 text-purple-700 font-semibold text-sm shadow-sm transition ${contrast === "bg-black text-white" ? "bg-purple-100" : "bg-white"}`}
              onClick={() => setContrast("bg-black text-white")}
              aria-label="High contrast"
            >
              High Contrast
            </button>
            <button
              className={`px-4 py-1 rounded-full border border-purple-200 text-purple-700 font-semibold text-sm shadow-sm transition ${contrast === "bg-yellow-50 text-black" ? "bg-purple-100" : "bg-white"}`}
              onClick={() => setContrast("bg-yellow-50 text-black")}
              aria-label="Soft contrast"
            >
              Soft
            </button>
          </div>
        </div>
        {/* Accessibility Tips Card */}
        <div className={cardClass + " md:col-span-2"}>
          <div className="flex items-center gap-2 mb-2">
            <FaInfoCircle className="text-yellow-500 text-2xl" />
            <span className="font-bold text-lg text-yellow-700">Accessibility Tips</span>
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-4">
            <li>Use keyboard navigation: <kbd className="px-2 py-1 bg-gray-100 rounded">Tab</kbd> to move, <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> to select.</li>
            <li>Screen reader support is enabled throughout the app.</li>
            <li>Adjust font size and contrast for your comfort.</li>
            <li>Contact support if you need more accessibility options.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
