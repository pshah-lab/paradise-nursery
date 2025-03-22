import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { plantCategories } from "../data";

const ProductPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const categories = Object.keys(plantCategories);
  const allPlants = Object.values(plantCategories).flat();

  const displayPlants = selectedCategory === "all" 
    ? allPlants 
    : plantCategories[selectedCategory];

  return (
    <div className="product-page">
      <Header cart={cart} />
      <div className="category-filters">
        <button 
          className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          All Plants
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <h2>{selectedCategory === "all" ? "All Plants" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Plants`}</h2>
      <div className="product-list">
        {displayPlants.map((plant) => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;