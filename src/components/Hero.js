import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [];
  for (let i = 1; i <= 11; i++) {
    images.push(require(`../photo/kln${i}.png`));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`hero-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      <div className="hero-pattern"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Umut Eli Yardımlaşma Derneği
        </h1>
        <p className="hero-subtitle">
          İhtiyaç sahiplerine ulaşıyor, umutları yeşertiyoruz. Birlikte daha güçlüyüz!
        </p>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/905545373053?text=Merhaba, bağış yapmak istiyorum." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Bağış Yap
          </a>
          <a href="#about" className="btn btn-secondary">
            Hakkımızda
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;