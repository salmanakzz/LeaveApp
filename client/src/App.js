import "./App.css";
import {
  DashboardPage,
  HomePage,
  LoginPage,
  SignupPage,
  AdminDashPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/admin" element={<AdminDashPage />} />
      </Routes>
    </Router>
  );
}

export default App;
