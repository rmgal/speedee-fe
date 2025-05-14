import { useCart } from "../context/CartContext";
import CheckoutButton from "../components/CheckoutButton";

const Cart = () => {
  const { cart } = useCart();
  console.log("Cart items:", cart);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="mb-2">
          {item.name} - ${item.price} × {item.quantity}
        </div>
      ))}
      <CheckoutButton />
    </div>
  );
};

export default Cart;
