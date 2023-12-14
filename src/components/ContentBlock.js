import React from "react";
import shopBusket from '../img/main/shop-busket.png'

const ContentBlock = () => {
  return (
    <div className="content">
      <h3 style={{ maxWidth: '800px', margin: '0 auto' }}>
        Merry Moments, Charismatic Prices
      </h3>
      <img
        src={shopBusket}
        alt="Shop Basket"
        width={500}
        style={{ maxWidth: '500px', margin: '0 auto' }}
      />
    </div>
  );
};

export default ContentBlock;
