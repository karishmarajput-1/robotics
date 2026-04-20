import express from "express";
const router = express.Router();

// ✅ FULL DATA WITH IMAGES + MORE
const services = [
  {
    id: 1,
    title: "Industrial Automation",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    desc: "Automate manufacturing with precision robotics systems.",
    more: "Industrial automation uses robotics to improve efficiency, reduce human effort, and increase production speed.",
  },
  {
    id: 2,
    title: "AI Robotics",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    desc: "Smart robots powered by AI & machine learning.",
    more: "AI robots can learn from data, adapt to new environments, and perform complex decision-making tasks.",
  },
  {
    id: 3,
    title: "Autonomous Systems",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    desc: "Self-driving robots with advanced navigation.",
    more: "Autonomous systems use sensors, GPS, and AI to operate without human control.",
  },
  {
    id: 4,
    title: "Healthcare Robotics",
    img: "https://media.istockphoto.com/id/2244704330/photo/robot-and-human-reach-hand-and-point-finger-with-cross-icon-float-salubrious.jpg?s=1024x1024&w=is&k=20&c=BHwPi3h8fSxHihhVlsVWSnG1-6qZ1TQkTBcrE1s-f4E=",
    desc: "Robots assisting doctors and improving patient care.",
    more: "Healthcare robots assist in surgeries, patient care, and diagnostics.",
  },
  {
    id: 5,
    title: "Drone Robotics",
    img: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
    desc: "Advanced drones for surveillance, delivery, and aerial automation.",
    more: "Drones are used in delivery, agriculture, mapping, and surveillance.",
  },
  {
    id: 6,
    title: "Humanoid Robots",
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c",
    desc: "Human-like robots designed for interaction and assistance.",
    more: "Humanoid robots mimic human behavior and help in research and services.",
  },
  {
    id: 7,
    title: "Delivery Robots",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X68SheXk999onbo0rw55k3v9Tvjmki8FhA&s",
    desc: "Autonomous robots delivering goods efficiently.",
    more: "Used in e-commerce, hospitals, and food delivery systems.",
  },
  {
    id: 8,
    title: "Agricultural Robotics",
    img: "https://as2.ftcdn.net/v2/jpg/15/41/05/83/1000_F_1541058376_XipfVJbSUqQdkiDVEc5CDAaTYVlM3HEW.jpg",
    desc: "Smart farming robots for planting and harvesting.",
    more: "Robots improve productivity and reduce manual labor in farming.",
  },
  {
    id: 9,
    title: "Defense Robotics",
    img: "https://t4.ftcdn.net/jpg/17/15/70/47/360_F_1715704788_MuAL9o59h6vc9bQTanGA7Hl0ymCH1vVp.jpg",
    desc: "Robotic systems for surveillance and defense.",
    more: "Used in military operations, bomb disposal, and security.",
  },
  {
    id: 10,
    title: "Service Robots",
    img: "https://t4.ftcdn.net/jpg/07/13/65/51/360_F_713655118_xM5FNGQDuU2xuB3C3yQ5PhFWIsGqvpxq.jpg",
    desc: "Robots for hospitality and customer service.",
    more: "Used in hotels, malls, and public services.",
  },
  {
    id: 11,
    title: "Space Robotics",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    desc: "Robotics used in space exploration.",
    more: "Robots explore planets, repair satellites, and assist astronauts.",
  },
  {
    id: 12,
    title: "Underwater Robotics",
    img: "https://t4.ftcdn.net/jpg/16/16/91/63/360_F_1616916360_E9ar9cSwIds0mRdTgQ3PimJBCXDbitoX.jpg",
    desc: "Robots for deep-sea exploration.",
    more: "Used for ocean research, oil exploration, and rescue missions.",
  }
];

// ✅ ALL SERVICES
router.get("/", (req, res) => {
  res.json(services);
});

// ✅ SINGLE SERVICE
router.get("/:id", (req, res) => {
  const service = services.find(s => s.id == req.params.id);
  res.json(service);
});

export default router;