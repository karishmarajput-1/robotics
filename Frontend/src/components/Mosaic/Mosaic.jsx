import React, { useEffect, useState } from "react";
import "./Mosaic.css";


const images = [
  "https://wallpapercat.com/w/full/5/2/8/1143069-1080x1920-samsung-1080p-robot-wallpaper.jpg",
  "https://wallpapercat.com/w/full/5/9/c/1143083-1242x2208-phone-hd-robot-wallpaper-image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqisd2RV0JHU840cLr56J5mqL-H9oRVk2tw&s",
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MDctMTA5Yi1rcnhsdzdraS5qcGc.jpg",
  "https://thumbs.dreamstime.com/b/futuristic-humanoid-robot-ai-processor-digital-neural-network-background-futuristic-humanoid-robot-ai-processor-440640799.jpg",
  "https://i.pinimg.com/736x/d9/29/4e/d9294e204ee40ad7e8f4248e0fee9458.jpg",
];

const Mosaic = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("mosaic");
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.8) {
        setActive(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
     <div id="page4">
            <div className="section">
                <div className="sec-left">
                    <h2>Welcome to the Future of Robotics 🚀</h2>
<p>
Welcome to our Robotics World, where innovation meets technology. We build intelligent robotic solutions that simplify everyday tasks and shape the future. Explore cutting-edge ideas and turn your imagination into reality with robotics.
</p>                </div>
                <div className="sec-right">
                    <img src="https://cdn.prod.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp" alt=""/>
                </div>
            </div>
            </div>
            
    <div id="mosaic" className="mosaic-strip">
      {images.map((img, i) => (
        <div
          key={i}
          className={`mosaic-item ${active ? "active" : ""}`}
          style={{
            transitionDelay: `${i * 0.1}s`,
          }}
        >
          <img src={img} alt="" />
        </div>
      ))}
    </div>
    </>
  );
};

export default Mosaic;