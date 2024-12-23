import React from 'react';

function GoodsCard({ image, name, price }){
  return (
    <div className="goods-card">
        <img src={image} alt={name} style={{ width: '50%', height: 'auto' }} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
    </div>
  );
}

export default GoodsCard;