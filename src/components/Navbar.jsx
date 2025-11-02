import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import LogoImg from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={LogoImg} alt="Logo" />
      <div className="logo"><i className="fas fa-shopping-bag"></i> Buy&Get</div> 
      <div className="search">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search"></i>
      </div>
      <nav>
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/categories"><i className="fas fa-th-large"></i> Categories</Link></li>
          <li><Link to="/deals"><i className="fas fa-tag"></i> Deals</Link></li>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
          <li><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
          <li><Link to="/settings"><i className="fas fa-cog"></i> Setting</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
