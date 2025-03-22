import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="app-name">Recipe Muse</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/forgot-password" className="nav-link">Forgot Password</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
