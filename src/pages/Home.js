import googleFonts from "google-fonts";
import 'font-awesome/css/font-awesome.min.css';
import chef1 from "../assets/chef1.png";
import greeksalad from "../assets/greeksalad.png"
import bruschetta from "../assets/bruschetta.png"
import lemondesert from "../assets/lemondesert.png"
import people1 from "../assets/people(1).png"
import people2 from "../assets/people(2).png"
import people3 from "../assets/people(3).png"
import people4 from "../assets/people(4).png"
import MA from "../assets/MA.png"
import MA2 from "../assets/MA(2).png"
import bike from "../assets/bike.png"
import { Link } from 'react-router-dom';
import "../Components/Compo.css";

import Main from "../Components/Main";
function Home(){
  return(
    <>
      <section className="mainSection"  >
        <article style={{marginLeft:"5pc"}}>
          <h1 className="little-lemon">Little Lemon</h1>
          <h2 className="location">Chicago</h2>
          <p>We are a family owned<br/> Mediterranean restraunt,<br/> 
            focused on traditional recipes <br/>served with a modern twist
          </p>
          <Link to="/Reservation">
            <button className="reserveBtn">
              Reserve a table
            </button>
          </Link>

        </article>
        <aside>
          <img src={chef1} alt=""/>
        </aside>
      </section>
      <div className="specials">
        <div>
            <h2>This week's specials!</h2>
        </div>
      </div>
      <section className="mainSectionTwo">
        <article>
          <img src={greeksalad} alt="img"/>
          <h4>Greek salad <span>$12.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
        <article>
          <img src={bruschetta} alt="img"/>
          <h4>Bruschetta <span>$9.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
        <article>
          <img src={lemondesert} alt="img"/>
          <h4>Lemon desert <span>$5.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
      </section>

      <div className="mainSectionThree">
        <section>
          <div>
            <article>
              <h1>WANT TO BOOK A TABLE?</h1>
              <p>We'd love to host you</p>
              <Link to="/Reservation">
                <button>
                  INQUIRE NOW
                </button>
              </Link>
            </article>

          </div>
        </section>
      </div>

      <section className="mainSectionFour">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned<br/> Mediterranean restraunt,<br/> 
            focused on traditional recipes <br/>served with a modern twist</p>
        </article>
        <div>
          <img src={MA} className="MA" alt="img"/>
          <img src={MA2} className="MA-two" alt="img"/>
        </div>
      </section>
    </>
  )
}
export default Home;