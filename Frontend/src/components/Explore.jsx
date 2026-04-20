import React from "react";
import { motion } from "framer-motion";
// import "./explore.css";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Explore = () => {
  return (
    <div className="explore bg-black text-white min-h-screen">

      {/* BACK BUTTON */}
      <div className="p-4">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition"
        >
          ⬅ Back
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="explore-hero text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Next-Gen Robotics Experience 🚀</h1>
          <p className="text-gray-300">
            Explore intelligent machines, automation, and AI-powered solutions
            shaping the future of innovation.
          </p>
          <div className="hero-buttons mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition">Explore Now</button>
            <button className="px-6 py-2 border border-white/30 rounded-xl hover:bg-white/10 transition">Learn More</button>
          </div>
        </motion.div>
      </section>

      {/* GRID SECTION */}
      <section className="explore-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">

        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="explore-card bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 transition">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
          alt="robotics" 
          className="w-full h-40 object-cover" 
        />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Industrial Automation</h3>
            <p className="text-gray-400 text-sm">High-performance robots transforming manufacturing processes.</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="explore-card bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 transition">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" alt="ai" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">AI Intelligence</h3>
            <p className="text-gray-400 text-sm">Advanced AI systems for smarter decision making.</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="explore-card bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 transition">
<img 
  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f" 
  alt="drone" 
  className="w-full h-40 object-cover" 
/>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Drone Technology</h3>
            <p className="text-gray-400 text-sm">Next-gen drones for surveillance and smart delivery.</p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="explore-card bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 transition">
          <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322" alt="medical" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Healthcare Robotics</h3>
            <p className="text-gray-400 text-sm">Precision robots improving healthcare and surgeries.</p>
          </div>
        </motion.div>

      </section>

      {/* PREMIUM SECTION */}
      <section className="explore-extra py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="extra-box max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Robotics Platform?</h2>
          <p className="text-gray-300">
            We deliver cutting-edge robotics powered by innovation, precision,
            and intelligent systems. Our solutions are designed to boost
            efficiency, reduce human effort, and shape a smarter future.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Explore;