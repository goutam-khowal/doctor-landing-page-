import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  appointmentDate: z.date({
    required_error: "Appointment date is required",
    invalid_type_error: "Invalid date format",
  }),
});

export type BookingSchema = z.infer<typeof bookingSchema>;
