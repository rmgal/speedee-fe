// frontend/src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://speedee.onrender.com/api/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded" />
        {/* Replace with slider if multiple images later */}
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-semibold mb-2">${product.price}</p>
        <p className="mb-4 text-gray-700">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
