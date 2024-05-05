import { useEffect, useState } from "react";
import "./bookingForm.css";
import dinning from "../assets/dinning.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({availableTimes, dispatch}) => {
  // const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [date, setDate] = useState('');
  // const [guests, setGuests] = useState(1);
  // const [occasion, setOccasion] = useState('Birthday');
  // const [availableTime, setAvailableTime] = useState("");

  // function setDispatch(value){
  //   dispatch({selectedDate: value})
  //   setDate(value)
  // }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    
  })


  // const clearForm = () => {
  //   setName('');
  //   setPhoneNumber('');
  //   setEmail('');
  //   setDate('');
  //   setGuests(1);
  //   setOccasion('');
  // }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Your table has been reserved");
  //   clearForm();
  // };

  // useEffect(() =>{
  //   console.log("available times", availableTimes)
  //   dispatch({selectedDate: "20-02-2024"})
  // }, [])

  return(
    <>
      <div data-testid="form-div" class="container">
        
        <div class="right-col">
          <form >
            {/* <div>
              <label>
                Indoor seating
              </label>
              <input type="radio"></input>
              <label>
                Indoor seating
              </label>
              <input type="radio"></input>
            </div> */}
            <div>
              <label hmtlFor="name">
                NAME
              </label>
              <input 
                type="text" 
                id="name"
                // value={value.name}
                // onChange={e => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="phone">
                PHONE NUMBER
              </label>
              <input 
                type="number" 
                id="phone"
                // value={phoneNumber}
                // onChange={e => setPhoneNumber(e.target.value)}
              ></input>
            </div>

            <div>
              <label hmtlFor="email">
                EMAIL
              </label>
              <input 
                type="email" 
                id="email"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" 
              id="res-date"
              // value={date}
              // onChange={e => 
              //   setDispatch(e.target.value)
              // }
              ></input>
            </div>

            <div>
              <label hmtlFor="res-time">Choose time</label>
              <select id="res-time"
                // value={availableTime}
                // onChange={e => setAvailableTime(e.target.value)}
              >
                {availableTimes.times.map((time, index) => 
                <option key={index}>{time}</option>
                )}
              </select>
            </div>

            <div>
              <label htmlFor="guests-number">Number of guests</label>
              <input type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                // value={guests}
                // onChange={e => setGuests(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion"
                // value={occasion}
                // onChange={e => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Promotion</option>
              </select>
            </div>

            <input type="submit" value="Make Your Reservation" class="submit"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookingForm;