import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import StudyPlans from "./pages/StudyPlans";
import FindTutor from "./pages/FindTutor";
import Notifications from "./pages/Notifications";
import Progress from "./pages/Progress";
import AIAssistant from "./pages/AIAssistant";
import Accessibility from "./pages/Accessibility";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="study-plans" element={<StudyPlans />} />
          <Route path="find-tutor" element={<FindTutor />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="progress" element={<Progress />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="accessibility" element={<Accessibility />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
