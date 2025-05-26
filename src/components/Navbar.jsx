import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          Speedee
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm md:text-base">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>

      {/* Cart Button */}
      <Link
        to="/cart"
        className="relative bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
      >
        <FaShoppingCart />
        <span>Cart</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-gray-700 ml-4 focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 md:hidden z-40">
          <Link to="/" onClick={toggleMenu} className="py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="py-2 text-gray-700 hover:text-blue-600">Products</Link>
          <Link to="/about" onClick={toggleMenu} className="py-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="py-2 text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
