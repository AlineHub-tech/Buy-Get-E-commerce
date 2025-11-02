import React, { useState } from 'react';
import '../style.css';
import LaptopImg from '../assets/images/images6.jpeg';
import ShoesImg from '../assets/images/12.png';
import WatchImg from '../assets/images/ekuter3.jpg';
import SofaImg from '../assets/images/shoo6.jpeg';
const initialDeals = [
  { img: LaptopImg, name: 'High-end Laptop', price: 1200, oldPrice: 1500 },
  { img: ShoesImg, name: 'Stylish Shoes', price: 80, oldPrice: 100 },
  { img: WatchImg, name: 'Luxury Watch', price: 250, oldPrice: 300 },
  { img: SofaImg, name: 'Comfortable Sofa', price: 500, oldPrice: 600 },
];

const Deals = () => {
  const [deals, setDeals] = useState(initialDeals);

  const removeDeal = (index) => {
    setDeals(deals.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="section-title">Hot Deals</h2>
      <section className="products">
        {deals.map((deal, i) => (
          <div key={i} className="product">
            <img src={deal.img} alt={deal.name} />
            <h3>{deal.name}</h3>
            <p><del>${deal.oldPrice}</del> ${deal.price}</p>
            <button className="btn" onClick={() => removeDeal(i)}>Remove</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Deals;
