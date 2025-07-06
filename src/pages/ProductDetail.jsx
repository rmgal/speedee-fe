import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import  DOMPurify  from "dompurify";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cart } = useCart();
//   const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get(`https://speedee.onrender.com/api/products/${id}`).then((res) => {
      setProduct(res.data);
      const cartItem = cart.find((item) => item._id === res.data._id);
      setQuantities(cartItem ? cartItem.quantity : 1);
    });
  }, [id, cart]);

  if (!product) return <div className="p-10">Loading...</div>;

  // Calculate total quantity in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   const handleQuantityChange = (productId, value) => {
//     setQuantities({ ...quantities, [productId]: Number(value) });
//   };

    const handleChange = (e) => {
        const val = Math.max(1, Number(e.target.value));
        setQuantities(val);
    };

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded" />
        {/* Replace with slider if multiple images later */}
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-semibold mb-2">${product.price}</p>
        <p className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />

        {/* <input
            type="number"
            min="1"
            value={quantities[product._id] || 1}
            onChange={(e) => handleQuantityChange(product._id, e.target.value)}
            className="w-16 border rounded px-2 mr-2"
        /> */}
        <input
          type="number"
          min="1"
          value={quantities}
          onChange={handleChange}
          className="w-20 border rounded px-3 py-1 mr-3"
        />
        <button
            onClick={() => addToCart(product, quantities)}
            // onClick={() => addToCart({ ...product, quantities: quantities[product._id] || 1 })}
            className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>
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

export default ProductDetail;
