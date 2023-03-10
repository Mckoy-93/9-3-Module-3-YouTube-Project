import { Link } from "react-router-dom";
import "../Videos/style/navbar.css";

const NavBar = () => {
  return (
    <header className="nav">
      <strong id="youtube">YouTube</strong>

      <strong id="home">
        <Link to="/Home">Home</Link>
      </strong>

      <strong id="about">
        <Link to="/about">About</Link>
      </strong>
    </header>
  );
};

export default NavBar;