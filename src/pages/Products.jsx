import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {products.map((product) => (
        <div key={product._id} className="p-5 border rounded">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;