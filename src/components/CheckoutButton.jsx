import { useCart } from "../context/CartContext";
import axios from "axios";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutButton = () => {
  const { cart } = useCart();
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    postal_code: "",
    country: "US",
    email: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await axios.post("https://speedee.onrender.com/api/checkout/create-checkout-session", {
      cartItems: cart,
      shipping
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="p-4 border mt-4">
      <h3 className="font-bold mb-2">Shipping Info</h3>
      <input name="name" placeholder="Full Name" onChange={handleChange} className="block border p-2 w-full mb-2" />
      <input name="address" placeholder="Address" onChange={handleChange} className="block border p-2 w-full mb-2" />
      <input name="city" placeholder="City" onChange={handleChange} className="block border p-2 w-full mb-2" />
      <input name="postal_code" placeholder="Postal Code" onChange={handleChange} className="block border p-2 w-full mb-2" />
      <input name="email" placeholder="Email" onChange={handleChange} className="block border p-2 w-full mb-2" />
      <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">
        Checkout
      </button>
    </div>

  );
};

export default CheckoutButton;
