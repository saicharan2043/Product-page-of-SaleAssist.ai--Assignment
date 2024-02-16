import { FaSearch } from "react-icons/fa";
import { FaRegUser, FaRegBookmark } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TANN TRIM</h1>
      <div className="icons-container">
        <FaSearch className="icons" />
        <FaRegUser className="icons" />
        <FaRegBookmark className="icons" />
        <HiOutlineShoppingBag className="icons" />
      </div>
    </nav>
  );
}

export default Navbar;
