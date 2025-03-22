import React, { useState } from "react";

const ProductCard = ({ plant, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...plant, quantity: 1 });
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="price">${plant.price}</p>
        <div className="features">
          {plant.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;