"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// Add other necessary imports here
import { Button } from "@/components/ui/button";
import Navbar from "../../../components/Navbar";
import { DatePickerWithPresets } from "./DatePicker";
// form
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingSchema } from "../schemas/bookingSchema";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingSchema) => {
    console.log("Submitted data: ", data);
    // TODO: call backend API and then redirect to Stripe Checkout
    reset(); // clear form
  };

  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
  });

  useEffect(() => {
    if (date) {
      const formattedDate = date.toLocaleDateString();
      setFormData((prev) => ({ ...prev, appointmentDate: formattedDate }));
    }
  }, [date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     appointmentDate: "",
  //   });
  //   setDate(undefined);
  // };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-35 lg:py-40 ">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-[#ddd] ">
          Book an Appointment
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 dark:text-slate-400"
            >
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              // value={formData.name}
              // onChange={handleChange}
              // required
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
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              // required
              {...register("email")}
              placeholder="john@example.com"
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
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              {...register("phone")}
              placeholder="+91 9876543210"
              // required
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
              Appointment Date
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
            {/* <DatePickerWithPresets date={date} setDate={setDate} /> */}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <Button
              type="submit"
              variant="default"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            >
              Book Appointment
            </Button>
          </div>
        </form>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
