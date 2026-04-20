import React, { useState } from "react";
import { motion } from "framer-motion";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { authAPI, setAuthToken } from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate inputs
      if (!email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }
      if (!password) {
        setError("Password is required");
        setLoading(false);
        return;
      }

      // Call API
      const response = await authAPI.login({
        email: email,
        password: password
      });

      // Save token and user
      setAuthToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Success 🚀");
      navigate("/");

    } catch (err) {
      console.error("Login error:", err);
      const errorMessage = err.response?.data?.message || "Invalid Credentials ❌";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🤖 Robotics Control
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Access AI-powered robotics systems and control intelligent machines.
        </motion.p>

        <img
          src="https://media.istockphoto.com/id/1398627331/photo/ai-robot-process-automation-rpa-document-management-system-dms-for-company-digital.jpg?s=1024x1024&w=is&k=20&c=2MFteYILlja_uzhz7nO8ZZTANIeoG5cryjRe5RWqy0g="
          alt="robot"
        />
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="login-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2>Login</h2>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="extra">
          New user? <span onClick={() => navigate("/register")} style={{ cursor: 'pointer', color: '#007bff' }}>Register</span>
        </p>
      </motion.div>

    </div>
  );
};

export default Login;