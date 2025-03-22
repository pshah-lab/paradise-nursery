import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price} x {item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;