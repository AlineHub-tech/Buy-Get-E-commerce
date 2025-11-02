import React, { useEffect, useState } from 'react';
import '../style.css';

const slidesData = [
  { title: 'Mega Deals!', icon: 'fas fa-bolt', text: 'Up to 70% off on Electronics' },
  { title: 'Fashion Sale', icon: 'fas fa-gift', text: 'Trendy clothes at best prices' },
  { title: 'Fresh Groceries', icon: 'fas fa-apple-alt', text: 'Delivered straight to your door' },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slidesData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slideshow">
      <section className="hero">
        <h1>Welcome to Buy & Get</h1>
        <p>Shop your favorite products at the best prices</p>
        <button className="btn">Shop Now <i className="fas fa-arrow-right"></i></button>
      </section>
      {slidesData.map((slide, i) => (
        <div key={i} className="slides" style={{ display: i === index ? 'block' : 'none' }}>
          <h2><i className={slide.icon}></i> {slide.title}</h2>
          <p>{slide.text}</p>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;