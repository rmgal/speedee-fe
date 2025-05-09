// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart } = useCart();

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? <p>Your cart is empty</p> : cart.map((item, index) => (
//         <div key={index}>
//           {item.name} - ${item.price}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import { useCart } from "../context/CartContext";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "../components/CheckoutButton";

<CheckoutButton />

const stripePromise = loadStripe("pk_test_YourPublicKeyHere");

const CheckoutButton = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await axios.post("http://localhost:5000/api/checkout/create-checkout-session", {
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



