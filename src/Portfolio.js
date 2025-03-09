import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import Biography from "./Biography";
export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='hero d-flex justify-content-evenly'>
        <motion.section animate={{ y: 100 }}>
          <h2>
            Hi! I'm <em> Coleene Acevedo</em>
          </h2>
          <p>A Junior Front-End Developer based in Lausanne, Switzerland 🇨🇭.</p>
        </motion.section>
        <motion.div whileHover={{ scale: 1.2 }}>
          <img src='/portrait.jpg' alt='img-portrait' className='img-fluid  ' />
        </motion.div>
      </div>
      <Biography />
    </div>
  );
}
