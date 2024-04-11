import footerlogo from "../assets/footerlogo.png";
import {NavLink} from "react-router-dom";

function Footer(){
  return(
    <footer style={{
      display:"flex"
    }}>
      <img src={footerlogo} alt="footerlogo"/>
      <div>
        <h3>Doormat navigation</h3>
        <ul>
          <li><NavLink to="/" className="link">HOME</NavLink></li>
          <li><NavLink to="/About" className="link">ABOUT</NavLink></li>
          <li><NavLink to="/Menu" className="link">MENU</NavLink></li>
          <li><NavLink to="/Reservation" className="link">RESERVATION</NavLink></li>
          <li><NavLink to="/Online Order" className="link">ONLINE ORDER</NavLink></li>
          <li><NavLink to="Login" className="link">LOGIN</NavLink></li>
        </ul>
      </div>
      <section>
        <article>
          <h3>Contact</h3>
          <p>Chicago</p>
          <p>+123 456 7890</p>
          <p>info@littlelemon.com</p>
        </article>
        <article>
          <h3>Social media links</h3>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-snapchat"></i>
        </article>
      </section>
    </footer>
  )
}

export default Footer;