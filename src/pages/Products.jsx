import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product, qty) => {
    addToCart(product, qty)
    navigate("/cart");
  };

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

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: Number(value) });
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {products.map((product) => (
        <div key={product._id} className="p-5 border rounded">
          <img src={product.image} alt={product.name} className="h-auto w-full object-cover" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <input
            type="number"
            min="1"
            value={quantities[product._id]}
            onChange={(e) => handleQuantityChange(product._id, e.target.value)}
            className="w-16 border rounded px-2 mr-2"
          />
          <button
            onClick={() => handleAddToCart(product, quantities[product._id])}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;