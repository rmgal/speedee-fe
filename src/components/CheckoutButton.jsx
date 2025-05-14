import { useCart } from "../context/CartContext";
import axios from "axios";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutButton = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await axios.post("https://speedee.onrender.com/api/checkout/create-checkout-session", {
      cartItems: cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
      }))
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="p-4 border mt-4">
      <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">
        Checkout
      </button>
    </div>

  );
};

export default CheckoutButton;
