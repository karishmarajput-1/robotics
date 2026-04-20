import React from "react";
import "./Robotics.css";
import "../Mosaic/Mosaic.css"

const icons = [
  { id: 1, img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" }, // robot
  { id: 2, img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png" }, // chip
  { id: 3, img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" }, // arm
  { id: 4, img: "https://cdn-icons-png.flaticon.com/512/4149/4149675.png" }, // AI
];

const Robotics = () => {
  return (
    <>
    <div className="hero">
      {/* Center Image */}
      <div className="center-box">
        <img
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
          alt="robotics"
        />
      </div>

      {/* Floating Icons */}
      {icons.map((item, i) => (
        <div key={item.id} className={`icon icon-${i}`}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
    <div id="page4">
         <div className="section">
                <div className="sec-left">
                    <h2>Innovate. Build. Automate. 🤖</h2>
                    <p >Explore the world of robotics and create smart solutions with ease. Learn, build, and turn your ideas into reality with modern technology.</p>
                </div>
                <div className="sec-right">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-robot-white-cute-robot-blue-light-background-image_2199825.jpg" alt=""/>
                </div>
            </div>
    </div>
    </>
  );
};

export default Robotics;