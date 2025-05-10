import { useCart } from "../context/CartContext";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutButton = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await axios.post("https://speedee.onrender.com/api/checkout/create-checkout-session", {
      cartItems: cart,
    });
    window.location.href = res.data.url;
  };

  return (
    <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">
      Checkout
    </button>
  );
};

export default CheckoutButton;
