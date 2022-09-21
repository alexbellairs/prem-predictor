import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import premlogo from "../images/PremLogo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="pl" src={premlogo} alt="Prem Logo" />
      <Link to="/">Home</Link>
      <img className="pl" src={premlogo} alt="Prem Logo" />
    </div>
  );
};

export default Navbar;
