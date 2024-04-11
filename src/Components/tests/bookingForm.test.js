import { render, screen } from "@testing-library/react";
import BookingForm from "../../Components/BookingForm.js";

describe("validate behavior of updateTimes and initializeTimes", () => {
  test("validating that initializeTimes function returns correct expected value", () => {
    render(<BookingForm />)
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const selectedDate = "2024/03/19";
    
  })
})

