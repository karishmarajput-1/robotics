
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "../services/api";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear token and user data
    setAuthToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setMenuOpen(false);
    
    // Redirect to home
    navigate("/");
    alert("Logged out successfully!");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span className="logo-icon">🤖</span>
        <span className="logo-text">
          Ardhanarishwara <span>Robotics</span>
        </span>
      </div>
      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>
      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        {/* <li><Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li> */}
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        {/* Show these only if NOT logged in */}
        {!user ? (
          <>
            <li className="register">
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </li>
            <li className="login">
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
          </>
        ) : (
          <>
            {/* Show user profile when logged in */}
            <li className="profile">
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                👤 {user.name}
              </Link>
            </li>
            {/* Logout button */}
            <li className="logout">
              <button 
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '0'
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}

        {/* <li className="admin">
          <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;