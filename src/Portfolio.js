import React from "react";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='hero d-flex justify-content-evenly'>
        <section>
          <h2>
            Hi! I'm <em> Coleene Acevedo</em>
          </h2>
          <p>
            I'm a Junior Front-End Developer based in Lausanne, Switzerland.
          </p>
        </section>
        <div>
          <img src='/portrait.jpg' alt='img-portrait' className='img-fluid  ' />
        </div>
      </div>
    </div>
  );
}
