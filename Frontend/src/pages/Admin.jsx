import React, { useState } from "react";
import { motion } from "framer-motion";
import "./admin.css";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addJob = async () => {
    try {
      const res = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        alert("🚀 Job Added Successfully");
        setTitle("");
        setDescription("");
      } else {
        alert("❌ Error adding job");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="admin-page">

      {/* 🔥 BACKGROUND EFFECT */}
      <div className="glow-bg"></div>

      {/* LEFT PANEL */}
      <motion.div 
        className="admin-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>🤖 Robotics AI Panel</h1>
        <p>Control automation systems, AI jobs & robotic workflows.</p>

        <div className="floating-orb orb1"></div>
        <div className="floating-orb orb2"></div>

        <img
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
          alt="robot"
        />
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        className="admin-right glass"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Add New Robotics Task</h2>

        <input
          type="text"
          placeholder="⚙️ Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="🧠 Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={addJob}>
          🚀 Deploy Task
        </button>
      </motion.div>

    </div>
  );
};

export default Admin;