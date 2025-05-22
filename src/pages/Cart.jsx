// import { useCart } from "../context/CartContext";
// import CheckoutButton from "../components/CheckoutButton";

// const Cart = () => {
//   const { cart } = useCart();
//   console.log("Cart items:", cart);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item, index) => (
//             <div key={index}>
//               {item.name} - ${item.price} × {item.quantity}
//             </div>
//           ))}
//           <CheckoutButton />
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
// frontend/src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, setCart } = useCart();

  const handleQuantityChange = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
    );
  };

  const handleRemove = (productId) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center gap-4 border p-4 rounded">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item._id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl pt-6">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

