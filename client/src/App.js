import "./App.css";
import { DashboardPage, HomePage, LoginPage, SignupPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminDash } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
