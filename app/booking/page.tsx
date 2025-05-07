import BookingForm from "@/app/booking/components/BookingForm";
import BlurBgHOC from "@/lib/BlurBgHOC";
import React from "react";

function AppointmentForm() {
  return <BookingForm />;
}

export default BlurBgHOC(AppointmentForm);
