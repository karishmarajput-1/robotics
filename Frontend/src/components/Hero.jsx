import React from 'react'
import "./hero.css";
import Mosaic from './Mosaic/Mosaic.jsx';
import Robotics from './robo/Robotics.jsx';
import { useNavigate } from 'react-router-dom';
// import Mosaic from './Mosaic/Mosaic';


export default function Hero() {
  const navigate = useNavigate();


  return (
    <div>
      <section className='page1'>
        <video autoPlay muted playsInline loop src="https://www.shutterstock.com/shutterstock/videos/1071439510/preview/stock-footage-artificial-intelligence-ai-machine-learning-and-modern-computer-technologies-concepts-business.mp4"></video>
        <h1>Innovating the future with <br /> Robotics & AI</h1>
        <p>We build intelligent robotic solutions for industries, automation & smart systems</p>
        <button className="button" onClick={() => navigate("/explore")}>Explore Solution</button>
      </section>
      <Mosaic/>
      <Robotics/>
    </div>
  )
}
