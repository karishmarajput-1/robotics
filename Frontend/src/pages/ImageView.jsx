import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./serviceDetails.css"; // same CSS reuse

const defaultImages = [
  "https://as1.ftcdn.net/v2/jpg/18/22/07/74/1000_F_1822077417_uJqy8GynuLaw1no7lQxghZT8VTxgaAEk.jpg",
  "https://as2.ftcdn.net/v2/jpg/07/28/70/51/1000_F_728705125_dbUiQtHIRape9IPVOR5cYNJdHe5aO4DS.jpg",
  "https://as2.ftcdn.net/v2/jpg/06/18/84/13/1000_F_618841391_8JfnZG0Umpd8Q4jmbV3iFjXAcUPdO2hW.jpg"
];

const ImageView = () => {
  const { id, imgIndex } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!service) return <h2 style={{ color: "white" }}>Loading...</h2>;

  const images =
    service.extraImages && service.extraImages.length > 0
      ? service.extraImages
      : defaultImages;

  const selectedImage = images[imgIndex];

  return (
    <div className="service-details">
      <div className="details-container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>

        <h1>{service.title}</h1>

        {/* 🔥 BIG IMAGE */}
        <img src={selectedImage} alt="" className="details-img" />

        <p className="details-desc">{service.desc}</p>

        <p className="details-more">
          {service.more || "Advanced robotics solutions with AI and automation."}
        </p>

      </div>
    </div>
  );
};

export default ImageView;