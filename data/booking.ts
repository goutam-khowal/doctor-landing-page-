import { CBookingFormText } from "@/types";

export const bookingFormText: CBookingFormText = {
  title: {
    text: "Book an",
    highlight: "Appointment",
  },
  form: {
    name: {
      label: "Full Name",
      placeholder: "John Doe",
    },
    email: {
      label: "Email Address",
      placeholder: "john@example.com",
    },
    phone: {
      label: "Phone Number",
      placeholder: "+91 9876543210",
    },
    appointmentDate: {
      label: "Appointment Date",
    },
    submit: {
      text: "Book Appointment",
    },
  },
};
