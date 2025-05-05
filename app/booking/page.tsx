import BookingForm from "@/app/booking/components/BookingForm";
import Navbar from "@/components/Navbar";
import React from "react";

function AppointmentForm() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <BookingForm />
    </>
  );
}

export default AppointmentForm;
