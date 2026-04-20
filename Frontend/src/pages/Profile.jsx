import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI, setAuthToken } from "../services/api";
import "./about.css"; // Reusing the same style as about page for now

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    // Try to get fresh profile from API
    const fetchProfile = async () => {
      try {
        const response = await authAPI.getProfile();
        setUser(response.data);
        // Update stored user
        localStorage.setItem("user", JSON.stringify(response.data));
      } catch (err) {
        console.error("Error fetching profile:", err);
        // Use stored user if API fails
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setError("Failed to load profile");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", padding: "50px", color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ minHeight: "100vh", padding: "50px 20px", backgroundColor: "#7ed1f1" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#3e4ccc", borderRadius: "10px", padding: "40px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        
        <h1 style={{ textAlign: "center", marginBottom: "30px",color:"white" }}>👤 My Profile</h1>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Name:</label>
          <p style={{ fontSize: "18px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px", color:"black" }}>
            {user?.name || "N/A"}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Email:</label>
          <p style={{ fontSize: "18px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px", color:"black"}}>
            {user?.email || "N/A"}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Phone:</label>
          <p style={{ fontSize: "18px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px", color:"black" }}>
            {user?.phone || "Not provided"}
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Role:</label>
          <p style={{ fontSize: "18px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
            <span style={{ textTransform: "capitalize", backgroundColor: user?.role === 'admin' ? '#f85555' : '#1eb437', color: 'white', padding: '5px 10px', borderRadius: '3px' }}>
              {user?.role || "user"}
            </span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
