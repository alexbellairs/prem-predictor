import { Link } from "react-router-dom";
import "../CSS/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
