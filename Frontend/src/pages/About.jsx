import React from "react";
import { motion } from "framer-motion";
import "./about.css"

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const robotImages = [
  "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
  "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
  "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
  "https://images.unsplash.com/photo-1581090700227-1e8a4c1c6d9d",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
];


const AboutUs = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="hero">
        <motion.h1 initial="hidden" whileInView="show" variants={fadeUp}>
          🤖 Robotics Innovation Hub
        </motion.h1>

        <motion.p initial="hidden" whileInView="show" variants={fadeUp}>
         <br /> <br /><br /><br /> Engineering the Future, One Robot at a Time
        </motion.p>

        <motion.img
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
          alt="robot"
          className="hero-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* WHO WE ARE */}
      <section className="section grid-2">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <h2>🚀 Who We Are</h2>
          <p>
            We build intelligent robotic systems powered by AI, automation, and innovation.
            Our mission is to transform industries and redefine human-machine collaboration.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
          alt="ai"
          className="side-img"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>🧠 What We Do</h2>

        <div className="cards">
          {["Automation", "AI Systems", "Autonomous Robots", "IoT Robotics"].map(
            (item, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                {item}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* IMAGE STRIP (AUTO SCROLL 🔥) */}
      <section className="scroll-section">
        <div className="scroll-track">
          {[...Array(10)].map((_, i) => (
            <img src={robotImages[i % robotImages.length]} alt="" />
          ))}
        </div>
      </section>

      {/* FUTURE */}
      <section className="section dark">
        <motion.h2 initial="hidden" whileInView="show" variants={fadeUp}>
          📈 The Future of Robotics
        </motion.h2>

        <motion.p initial="hidden" whileInView="show" variants={fadeUp}>
          We are shaping the future with smart cities, healthcare robots,
          and next-generation AI-driven systems.
        </motion.p>
      </section>

    </div>
  );
};

export default AboutUs;