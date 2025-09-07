import React, { useState, useEffect } from "react";
import "./workshops.css";

import ws1 from "../assets/workshop/1.jpg";
import ws2 from "../assets/workshop/2.jpg";
import ws3 from "../assets/workshop/3.jpg";
import ws4 from "../assets/workshop/4.jpg";
import ws5 from "../assets/workshop/5.png";
import ws6 from "../assets/workshop/6.png";
import ws7 from "../assets/workshop/7.png";
import ws8 from "../assets/workshop/8.jpg";
import ws9 from "../assets/workshop/9.png";
import ws10 from "../assets/workshop/10.png";
import ws11 from "../assets/workshop/11.png";
import ws12 from "../assets/workshop/12.png";
import ws13 from "../assets/workshop/13.png";
import ws14 from "../assets/workshop/14.png";

import logo from "../assets/profile.png"; // make sure to place your logo image here

const images = [ws1, ws2, ws3, ws4, ws5, ws6, ws7, ws8, ws9, ws10, ws11, ws12, ws13, ws14];

export default function WorkShops() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [revealed, setRevealed] = useState([]);

  const visibleImages = viewAll ? images : images.slice(0, 6);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".gallery-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [viewAll]);

  return (
    <div className={`workshops-gallery ${darkMode ? "dark" : "light"}`}>
      
      <a href="/"><img src={logo} alt="Logo" className="top-left-logo" /></a>
      <div className="gallery-header">
        <h1 className="gallery-heading">Workshops</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="gallery-grid">
        {visibleImages.map((img, index) => (
          <div
            className={`gallery-card ${revealed.includes(index.toString()) ? "fade-in" : "hidden"}`}
            key={index}
            data-index={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Workshop ${index + 1}`} />
          </div>
        ))}
      </div>

      {!viewAll && (
        <div className="view-all-wrapper">
          <button className="view-all-btn" onClick={() => setViewAll(true)}>
            View All
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Large View" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
