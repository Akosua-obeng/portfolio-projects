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
import "./Compo.css";

function Main(){
  return(
    <main>
      <section className="mainSection"  >
        <article style={{marginLeft:"5pc"}}>
          <h1 className="little-lemon">Little Lemon</h1>
          <h2 className="location">Chicago</h2>
          <p>We are a family owned<br/> Mediterranean restraunt,<br/> 
            focused on traditional recipes <br/>served with a modern twist</p>
          <button className="reserveBtn">Reserve a table</button>
        </article>
        <aside>
          <img src={chef1}/>
        </aside>
      </section>
      <div className="specials">
        <div>
            <h2>This week's specials!</h2>
            <button className="reserveBtn">Online menu</button>
        </div>
      </div>
      <section className="mainSectionTwo">
        <article>
          <img src={greeksalad}/>
          <h4>Greek salad <span>$12.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
        <article>
          <img src={bruschetta}/>
          <h4>Bruschetta <span>$9.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
        <article>
          <img src={lemondesert}/>
          <h4>Lemon desert <span>$5.99</span></h4>
          <p>The famous greek salad of crispy <br/>
          lettuce, pepper, olives and our <br/>
          Chicago style feta cheese, <br/>
          garnished with crunchy garlic <br/>
          and rosemary croutons. <span><i className="fa fa-motorcycle"></i></span></p>
        </article>
      </section>
      <div className="mainSectionThree">
        <h4>TESTIMONIALS</h4>
        <section >
          <article>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <div>
              <img src={people1}/>
              <p>Name</p>
            </div>
            <p>Review</p>
          </article>
          <article>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <div>
              <img src={people2}/>
              <p>Name</p>
            </div>
            <p>Review</p>
          </article>
          <article>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <div>
              <img src={people3}/>
              <p>Name</p>
            </div>
            <p>Review</p>
          </article>
          <article>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <i className="fa fa-star gold-star"></i>
            <div>
              <img src={people4}/>
              <p>Name</p>
            </div>
            <p>Review</p>
          </article>
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
          <img src={MA} className="MA"/>
          <img src={MA2} className="MA-two"/>
        </div>
      </section>
    </main>
  )
}

export default Main;