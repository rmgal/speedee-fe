import { useCart } from "../context/CartContext";
import CheckoutButton from "../components/CheckoutButton";

const Cart = () => {
  const { cart } = useCart();
  console.log("Cart items:", cart);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} - ${item.price} × {item.quantity}
            </div>
          ))}
          <CheckoutButton />
        </>
      )}
    </div>
  );
};

export default Cart;
