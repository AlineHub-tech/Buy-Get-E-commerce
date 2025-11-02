import React, { useState } from 'react';
import '../style.css';
import LaptopImg from '../assets/images/images6.jpeg';
import ShoesImg from '../assets/images/12.png';
const initialCart = [
  { img: LaptopImg , name: 'High-end Laptop', price: 1200 },
  { img: ShoesImg , name: 'Stylish Shoes', price: 80 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="section-title">Your Cart</h2>
      <section className="products">
        {cartItems.map((item, i) => (
          <div key={i} className="product">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button className="btn" onClick={() => removeItem(i)}>Remove</button>
          </div>
        ))}
      </section>
      {cartItems.length > 0 && (
        <div style={{textAlign:'center', margin:'20px'}}>
          <button className="btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
