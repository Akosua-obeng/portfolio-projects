import BookingForm from "../Components/BookingForm";
import "./bookingPage.css"
import "../Components/Compo.css"
import chef1 from "../assets/chef1.png";

function BookingPage({availableTimes, dispatch}){

  return(
    <>
      <section className="Section"  >
        <article style={{marginLeft:"5pc"}}>
          <h1 className="little-lemon">Little Lemon</h1>
          <h2 className="location">Chicago</h2>
        </article>
        <aside>
          <img src={chef1} alt=""/>
        </aside>
      </section>

      <h2 class="heading">Reservation Details</h2>

      <div class="booking-page">
        <div class="left-col">
          <div>
            <p>
              You will receive a confirmation email once your reservation request has<br></br> 
              been successful. If you do not receive this confirmation email, there may<br></br> 
              have been an error in your reservation.<br></br>  Our
              reservation team will be in touch to coordinate this with you. <br></br>
              Please contact our reservation team on +123 456 7890 or resevations@littlelemon.com <br></br>
              if you have any enquiries.
            </p>
          </div>
        </div>

        <div class="right-col">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  )
}
export default BookingPage;