import { Route, Routes,} from "react-router-dom";
import {Link} from "react-router-dom";
import googleFonts from "google-fonts";

function Nav(){

  const linkStyle = {
    textDecoration: "none",
    margin: "20px",
    color:"black",
    listStyle:"none"
  }
  

  return(
    <nav>
      <ul>
        <li><Link to="/" className="link">HOME</Link></li>
        <li><Link to="/About" className="link">ABOUT</Link></li>
        <li><Link to="/Menu" className="link">MENU</Link></li>
        <li><Link to="/Reservation" className="link">RESERVATION</Link></li>
        <li><Link to="/Online Order" className="link">ONLINE ORDER</Link></li>
        <li><Link to="Login" className="link">LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;