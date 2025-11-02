import React from 'react';
import HeroSlider from '../components/HeroSlide';
import '../style.css';
import ElectronicsImg from '../assets/images/images7.jpeg';
import FashionImg from '../assets/images/8.png';
import BeautyImg from '../assets/images/11.png';
import HomeImg from '../assets/images/images21.jpeg';
import SportsImg from '../assets/images/shoo2.jpeg';
import BooksImg from '../assets/images/shop2.jpg';
import KidsImg from '../assets/images/shoo7.jpeg';
import JewelryImg from '../assets/images/10.png';
import RemoteImg from '../assets/images/ekuter1.jpg';
import ShoesCatImg from '../assets/images/download5.jpeg';
import LaptopImg from '../assets/images/images6.jpeg';
import ShoesImg from '../assets/images/12.png';
import WatchImg from '../assets/images/ekuter3.jpg';
import SofaImg from '../assets/images/shoo6.jpeg';
const Home = () => {
  return (
    <div>
      <HeroSlider />

      {/* Categories Section */}
      <h2 className="section-title">Shop by Category</h2>
      <section className="categories">
        <div className="category"><img src={ElectronicsImg} alt="Electronics" /><h4>Electronics</h4></div>
        <div className="category"><img src={FashionImg} alt="Fashion" /><h4>Fashion</h4></div>
        <div className="category"><img src={BeautyImg} alt="Beauty" /><h4>Beauty</h4></div>
        <div className="category"><img src={HomeImg} alt="Home" /><h4>Home</h4></div>
        <div className="category"><img src={SportsImg} alt="Sports" /><h4>Sports</h4></div>
        <div className="category"><img src={BooksImg} alt="Books" /><h4>Books</h4></div>
        <div className="category"><img src={KidsImg} alt="Kids" /><h4>Kids</h4></div>
        <div className="category"><img src={JewelryImg} alt="Jewelry" /><h4>Jewelry</h4></div>
        <div className="category"><img src={RemoteImg} alt="Remote" /><h4>Remote</h4></div>
        <div className="category"><img src={ShoesCatImg} alt="Shoes" /><h4>Shoes</h4></div>
      </section>

      {/* Flash Deals */}
      <section className="flash">
        <h2>Flash Deals</h2>
        <div className="countdown" id="countdown">00:00:00</div>
        <p>Hurry up! Limited time offers</p>
      </section>

      {/* Featured Products */}
      <h2 className="section-title">Featured Products</h2>
      <section className="products">
        <div className="product"><img src={LaptopImg} alt="Laptop" /><h3>High-end Laptop</h3><p>$1200</p></div>
        <div className="product"><img src={ShoesImg} alt="Shoes" /><h3>Stylish Shoes</h3><p>$80</p></div>
        <div className="product"><img src={WatchImg} alt="Watch" /><h3>Luxury Watch</h3><p>$250</p></div>
        <div className="product"><img src={SofaImg} alt="Sofa" /><h3>Comfortable Sofa</h3><p>$500</p></div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testi-grid">
          <div className="testi-card">
            <p>"Best online shopping experience ever! Fast delivery and great prices."</p>
            <h4>- Alice</h4>
          </div>
          <div className="testi-card">
            <p>"I got my phone within 24 hours, quality is top-notch."</p>
            <h4>- James</h4>
          </div>
          <div className="testi-card">
            <p>"Love the discounts and categories. Highly recommend Buy&Get."</p>
            <h4>- Sarah</h4>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Subscribe for Latest Deals</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
};

export default Home;