"use client";

import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "./DatePicker";
// form control
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingSchema } from "../schemas/bookingSchema";
import { bookingFormText } from "@/data/booking";

function BookingForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingSchema) => {
    console.log("Submitted data: ", data);
    // TODO: call backend API and then redirect to Stripe Checkout

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name, // Ensure data is in the correct format
        email: data.email,
        phone: data.phone,
        appointmentDate: data.appointmentDate,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }
    reset(); // clear form
  };

  return (
    <div className="mx-auto max-w-2xl py-14 px-8">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-[#ddd] text-center">
        {bookingFormText.title.text + " "}
        <span className="text-indigo-600">
          {bookingFormText.title.highlight}
        </span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            {bookingFormText.form.name.label}
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            placeholder={bookingFormText.form.name.placeholder}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
          />
          {errors.name && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            {bookingFormText.form.email.label}
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder={bookingFormText.form.email.placeholder}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            {bookingFormText.form.phone.label}
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder={bookingFormText.form.phone.placeholder}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.phone && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="appointmentDate"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            {bookingFormText.form.appointmentDate.label}
          </label>
          <Controller
            name="appointmentDate"
            control={control}
            render={({ field }) => (
              <DatePickerWithPresets
                date={field.value}
                setDate={field.onChange}
              />
            )}
          />
          {errors.appointmentDate && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.appointmentDate.message}
            </p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Button
            type="submit"
            variant="default"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
          >
            {bookingFormText.form.submit.text}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
