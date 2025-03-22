import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CartItem from "../components/CartItem";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();
  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Header cart={cart} />
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="continue-shopping-btn" onClick={() => navigate("/products")}>
            Continue Shopping →
        </button>
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some beautiful plants to your cart!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total Amount:</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;