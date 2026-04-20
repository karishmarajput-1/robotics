import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { authAPI, setAuthToken } from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate inputs
      if (!form.name.trim()) {
        setError("Name is required");
        setLoading(false);
        return;
      }
      if (!form.email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }
      if (form.password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      // Call API
      const response = await authAPI.register({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone || undefined
      });

      alert("Registration Successful 🚀");
      
      // Try to login automatically
      try {
        const loginRes = await authAPI.login({
          email: form.email,
          password: form.password
        });
        setAuthToken(loginRes.data.token);
        localStorage.setItem("user", JSON.stringify(loginRes.data.user));
        navigate("/login");
      } catch (loginErr) {
        // If auto-login fails, redirect to login page
        navigate("/login");
      }

    } catch (err) {
      console.error("Registration error:", err);
      const errorMessage = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || "Registration Failed ❌";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      {/* 🔥 Left Side Image */}
      <div className="auth-image">
        <img
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
          alt="robotics"
        />
      </div>

      {/* 🔥 Form */}
      <div className="auth-form">
        <h2>Create Account 🤖</h2>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={form.password}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={form.phone}
            onChange={handleChange}
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} style={{ cursor: 'pointer', color: '#007bff' }}>
            Login
          </span>
        </p>
      </div>

    </div>
  );
};

export default Register;