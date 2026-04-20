import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { contactAPI } from "../services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const robotImages = [
  "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
  "https://t4.ftcdn.net/jpg/02/09/43/31/240_F_209433187_GRcMU0TvrSrCDbRY37LXcCvZZX5WU0xa.jpg",
  "https://as2.ftcdn.net/v2/jpg/07/28/70/51/1000_F_728705125_dbUiQtHIRape9IPVOR5cYNJdHe5aO4DS.jpg",
  "https://t4.ftcdn.net/jpg/02/27/78/79/240_F_227787913_4CMTKEURI72eNP3rKHrALgV6uNlQFYg9.jpg",
  "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
  "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
  "https://images.unsplash.com/photo-1581090700227-1e8a4c1c6d9d",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://as2.ftcdn.net/v2/jpg/05/99/01/27/1000_F_599012797_nAUTiVIm2VfISUhJlXJd6yX8jhnzxEm6.jpg",
  "https://as2.ftcdn.net/v2/jpg/07/38/45/31/1000_F_738453177_mayK5Y2v6AtCQXU8fL4wCe1hfBJM2foc.jpg"
];


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      // Validate form
      if (!formData.name.trim()) {
        setError("Name is required");
        setLoading(false);
        return;
      }
      if (!formData.email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }
      if (!formData.subject.trim()) {
        setError("Subject is required");
        setLoading(false);
        return;
      }
      if (!formData.message.trim()) {
        setError("Message is required");
        setLoading(false);
        return;
      }

      // Send to API
      await contactAPI.submit({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      // Success
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("✅ Message sent successfully! We'll get back to you soon.");

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error("Contact error:", err);
      const errorMsg = err.response?.data?.message || "Failed to send message. Please try again.";
      setError(errorMsg);
      alert("❌ " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      {/* <section className="contact-hero">
        <motion.h1 initial="hidden" whileInView="show" variants={fadeUp}>
          🤖 Contact Our Robotics Team
        </motion.h1>
        <motion.p initial="hidden" whileInView="show" variants={fadeUp}>
          Let’s build intelligent solutions together
        </motion.p>
      </section>  */}

      {/* MAIN SECTION */}
      <section className="contact-container">

        {/* LEFT SIDE - FORM */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>📬 Get in Touch</h2>

          {error && <div style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '5px' }}>⚠️ {error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '15px', padding: '10px', backgroundColor: '#e6ffe6', borderRadius: '5px' }}>✅ Message sent successfully!</div>}

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name"  
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={loading}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={loading}
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              disabled={loading}
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              rows="5"
              disabled={loading}
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://media.istockphoto.com/id/1250661643/vector/robot-or-humanoid-cyborg-working-with-abstract-tech-hologram-interface-futuristic-ai-in.jpg?s=1024x1024&w=is&k=20&c=zttr8F31HTA_Af8NJuGnTQqiJnZMcMsWjBi2i55KhFU="
            alt="robotics"
          />
        </motion.div>

      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-info">

        {[
          { title: "📍 Location", desc: "New Delhi, India" },
          { title: "📧 Email", desc: "robotics@email.com" },
          { title: "📞 Phone", desc: "+91 98765 43210" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="info-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* AUTO SCROLL ROBOT IMAGES */}
      <section className="scroll-section">
        <div className="scroll-track">
          {[...Array(10)].map((_, i) => (
            <img src={robotImages[i % robotImages.length]} alt="" />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;