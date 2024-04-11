import {NavLink} from "react-router-dom";
import googleFonts from "google-fonts";
import "./Compo.css";

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
        <li><NavLink to="/" className="link">HOME</NavLink></li>
        <li><NavLink to="/About" className="link">ABOUT</NavLink></li>
        <li><NavLink to="/Menu" className="link">MENU</NavLink></li>
        {/* <li><NavLink to="/Reservation" className="link">RESERVATION</NavLink></li>
        <li><NavLink to="/Online Order" className="link">ONLINE ORDER</NavLink></li>
        <li><NavLink to="Login" className="link">LOGIN</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default Nav;