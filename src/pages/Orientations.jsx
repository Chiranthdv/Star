import React, { useState, useEffect } from "react";
import "./orientations.css";
import profilePic from '../assets/profile.png';
import photo1 from '../assets/orientation/1.jpg';
import photo2 from '../assets/orientation/2.jpg';
import photo3 from '../assets/orientation/3.jpg';
import photo4 from '../assets/orientation/4.jpg';
import photo5 from '../assets/orientation/5.jpg';
import photo6 from '../assets/orientation/6.jpg';
import photo7 from '../assets/orientation/7.jpg';
import photo8 from '../assets/orientation/8.jpg';
import photo9 from '../assets/orientation/9.jpg';
import photo10 from '../assets/orientation/10.jpg';
import photo11 from '../assets/orientation/11.jpg';
import photo12 from '../assets/orientation/12.jpg';

import video1 from '../assets/orientation/video1.mov';
//import video2 from '../assets/orientation/video2.MOV';
import video3 from '../assets/orientation/video3.MOV';
import video4 from '../assets/orientation/video4.MOV';
import video5 from '../assets/orientation/video5.MOV';
import video6 from '../assets/orientation/video6.MOV';
import video7 from '../assets/orientation/video7.MOV';
import video8 from '../assets/orientation/video8.MOV';

// Media array
const media = [
  { type: "image", src: photo1 },
  { type: "image", src: photo2 },
  { type: "image", src: photo3 },
  { type: "image", src: photo4 },
  { type: "image", src: photo5 },
  { type: "image", src: photo6 },
  { type: "image", src: photo7 },
  { type: "image", src: photo8 },
  { type: "image", src: photo9 },
  { type: "image", src: photo10 },
  { type: "image", src: photo11 },
  { type: "image", src: photo12 },
  { type: "video", src: video1 },
  //{ type: "video", src: video2 },
  { type: "video", src: video3 },
  { type: "video", src: video4 },
  { type: "video", src: video5 },
  { type: "video", src: video6 },
  { type: "video", src: video7 },
  { type: "video", src: video8 },
];

export default function Orientations() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [revealed, setRevealed] = useState([]);
  const [filter, setFilter] = useState("all");
  const [carouselIndex, setCarouselIndex] = useState(media.findIndex(m => m.src === video1));

  const visible = viewAll ? media : media.slice(0, 6);
  const filteredMedia = filter === "all" ? visible : visible.filter((m) => m.type === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealed((prev) => [...new Set([...prev, entry.target.dataset.index])]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".orientation-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [viewAll, filter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nextCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const handleKey = (e) => {
    if (e.key === "Escape") setSelectedMedia(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={`orientations-gallery ${darkMode ? "dark" : "light"}`}>
      <div className="orientations-header">
        <a href="/">
          <img src={profilePic} alt="Logo" className="top-left-logo" />
        </a>
        <h1 className="orientations-title fancy-text">O R I E N T A T I O N S</h1>
        <div className="header-controls">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="media-select">
            <option value="all">All</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
          <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={prevCarousel}>❮</button>
        <div className="carousel-item" onClick={() => setSelectedMedia(media[carouselIndex])}>
          {media[carouselIndex].type === "image" ? (
            <img src={media[carouselIndex].src} alt="Featured" />
          ) : (
            <video src={media[carouselIndex].src} muted autoPlay loop />
          )}
        </div>
        <button className="carousel-btn" onClick={nextCarousel}>❯</button>
      </div>

      {/* Grid of Media */}
      <div className="orientation-grid">
        {filteredMedia.map((item, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`orientation-card ${revealed.includes(idx.toString()) ? "fade-in" : "hidden"}`}
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`Orientation ${idx}`} />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                onMouseEnter={e => e.target.play()}
                onMouseLeave={e => e.target.pause()}
              />
            )}
          </div>
        ))}
      </div>

      {!viewAll && (
        <div className="view-all-wrapper">
          <button className="view-all-btn" onClick={() => setViewAll(true)}>View All</button>
        </div>
      )}

      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="Expanded view" />
            ) : (
              <video src={selectedMedia.src} controls autoPlay />
            )}
            <button className="close-btn" onClick={() => setSelectedMedia(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
}
