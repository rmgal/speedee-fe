import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get("https://speedee.onrender.com/api/products").then((res) => {
      setProducts(res.data);
      const initialQuantities = {};
      res.data.forEach((product) => {
        initialQuantities[product._id] = 1;
      });
      setQuantities(initialQuantities);
    });
  }, []);

  // Calculate total quantity in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: Number(value) });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-4 p-10">
        {products.map((product) => (
          <div key={product._id} className="p-5 border rounded">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} className="h-auto w-full object-cover" />
              <h3 className="font-semibold">{product.name}</h3>
              {/* <p className="text-sm text-gray-600 truncate">{product.description}</p> */}
              <p className="font-bold mt-1 text-blue-500">${product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product, quantities[product._id])}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Floating Button with Badge */}
      <Link
        to="/cart"
        className="fixed right-6 bottom-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition flex items-center gap-2"
      >
        Go to Cart
        {cartCount > 0 && (
          <span className="bg-white text-green-700 text-xs font-bold px-2 py-1 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Products;