import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Industrial Automation",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    desc: "Automate manufacturing with precision robotics systems."
  },
  {
    title: "AI Robotics",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    desc: "Smart robots powered by AI & machine learning."
  },
  {
    title: "Autonomous Systems",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    desc: "Self-driving robots with advanced navigation."
  },
  {
    title: "Healthcare Robotics",
    img: "https://media.istockphoto.com/id/2244704330/photo/robot-and-human-reach-hand-and-point-finger-with-cross-icon-float-salubrious.jpg?s=1024x1024&w=is&k=20&c=BHwPi3h8fSxHihhVlsVWSnG1-6qZ1TQkTBcrE1s-f4E=",
    desc: "Robots assisting doctors and improving patient care."
  },
   {
    title: "Drone Robotics",
  img: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  desc: "Advanced drones for surveillance, delivery, and aerial automation."
  },
   {
    title: "Humanoid Robots",
  img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c",
  desc: "Human-like robots designed for interaction, assistance, and research."
  },
  {
    title: "Delivery Robots",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
    desc: "Autonomous robots delivering goods efficiently in urban areas."
  },
  {
    title: "Agricultural Robotics",
    img: "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
    desc: "Smart farming robots for planting, harvesting, and monitoring crops."
  },
  {
    title: "Defense Robotics",
    img: "https://t4.ftcdn.net/jpg/17/15/70/47/360_F_1715704788_MuAL9o59h6vc9bQTanGA7Hl0ymCH1vVp.jpg",
    desc: "Advanced robotic systems for surveillance and defense operations."
  },
  {
    title: "Service Robots",
    img: "https://t4.ftcdn.net/jpg/07/13/65/51/360_F_713655118_xM5FNGQDuU2xuB3C3yQ5PhFWIsGqvpxq.jpg",
    desc: "Robots designed for hospitality, cleaning, and customer service."
  },
  {
    title: "Space Robotics",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    desc: "Robotics technology used in space exploration and research."
  },
  {
    title: "Underwater Robotics",
    img: "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
    desc: "Robots designed for deep-sea exploration and marine research."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const robotImages = [
  "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
  "https://t4.ftcdn.net/jpg/02/09/43/31/240_F_209433187_GRcMU0TvrSrCDbRY37LXcCvZZX5WU0xa.jpg",
  "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
  "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
  "https://images.unsplash.com/photo-1581090700227-1e8a4c1c6d9d",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://as2.ftcdn.net/v2/jpg/05/99/01/27/1000_F_599012797_nAUTiVIm2VfISUhJlXJd6yX8jhnzxEm6.jpg",
  "https://as2.ftcdn.net/v2/jpg/07/38/45/31/1000_F_738453177_mayK5Y2v6AtCQXU8fL4wCe1hfBJM2foc.jpg"
];

const Services = () => {
  
const navigate = useNavigate();


  return (
    <div className="services">

      {/* HERO */}
      <section className="services-hero">
        <motion.h1 initial="hidden" whileInView="show" variants={fadeUp}>
          🤖 Our Robotics Services
        </motion.h1>
        <motion.p initial="hidden" whileInView="show" variants={fadeUp}>
          Smart Solutions. Intelligent Machines. Future Ready.
        </motion.p>
      </section>

      {/* SERVICES CARDS */}
      <section className="services-grid">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="service-card"
            onClick={() => navigate(`/service/${i}`)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} alt="" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURE SECTION */}
      <section className="feature-section">
        <motion.div
          className="feature-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>🚀 Next Gen Robotics</h2>
          <p>
            Our robots are designed with cutting-edge AI, real-time data
            processing, and high precision systems to transform industries.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
          alt=""
          className="feature-img"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
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

export default Services;
