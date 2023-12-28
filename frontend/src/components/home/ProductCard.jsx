import React from 'react';
import './productCard.css'

function ProductCard({ product }) {
  const { title, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
