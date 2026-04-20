import { color } from "framer-motion";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./serviceDetails.css";

const services = [
  {
    title: "Industrial Automation",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    desc: "Automate manufacturing with precision robotics systems.",
    more: "Industrial automation uses robotics to improve efficiency, reduce human effort, and increase production speed."
  },
  {
    title: "AI Robotics",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    desc: "Smart robots powered by AI & machine learning.",
    more: "AI robots can learn from data, adapt to new environments, and perform complex decision-making tasks."
  },
  {
    title: "Autonomous Systems",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    desc: "Self-driving robots with advanced navigation.",
    more: "Autonomous systems use sensors, GPS, and AI to move and operate without human control."
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
  // 👉 baaki services bhi yaha same add kar dena
];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services[id];

  if (!service) {
    return <h2 style={{ color: "white" }}>Service Not Found</h2>;
  }

  return (
    <div className="service-details">
  <div className="details-container">

    <button className="back-btn" onClick={() => navigate(-1)}>
      ⬅ Back
    </button>

    <h1>{service.title}</h1>

    <img src={service.img} alt="" className="details-img" />

    <p className="details-desc">{service.desc}</p>
    <p className="details-more">{service.more}</p>

    {/* 🔥 extra images */}
    <div className="extra-images">
      <img src="https://as1.ftcdn.net/v2/jpg/18/22/07/74/1000_F_1822077417_uJqy8GynuLaw1no7lQxghZT8VTxgaAEk.jpg" alt="" />
      <img src="https://as2.ftcdn.net/v2/jpg/07/28/70/51/1000_F_728705125_dbUiQtHIRape9IPVOR5cYNJdHe5aO4DS.jpg" alt="" />
      <img src="https://as2.ftcdn.net/v2/jpg/06/18/84/13/1000_F_618841391_8JfnZG0Umpd8Q4jmbV3iFjXAcUPdO2hW.jpg" alt="" />
    </div>

  </div>
</div>
  );
};

export default ServiceDetails;