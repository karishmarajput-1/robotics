import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./services.css";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const robotImages = [
  "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
  "https://t4.ftcdn.net/jpg/02/09/43/31/240_F_209433187_GRcMU0TvrSrCDbRY37LXcCvZZX5WU0xa.jpg",
  "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
  "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
  "https://images.unsplash.com/photo-1581090700227-1e8a4c1c6d9d",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://as2.ftcdn.net/v2/jpg/05/99/01/27/1000_F_599012797_nAUTiVIm2VfISUhJlXJd6yX8jhnzxEm6.jpg",
  "https://as2.ftcdn.net/v2/jpg/07/38/45/31/1000_F_738453177_mayK5Y2v6AtCQXU8fL4wCe1hfBJM2foc.jpg"
];

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

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

      {/* GRID */}
      <section className="services-grid">
        {services.map((item, i) => (
          <motion.div
            key={item.id}
            className="service-card"
            onClick={() => navigate(`/service/${item.id}`)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURE */}
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

      <section className="scroll-section">
        <div className="scroll-track">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={robotImages[i % robotImages.length]}
              alt="robot"
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;