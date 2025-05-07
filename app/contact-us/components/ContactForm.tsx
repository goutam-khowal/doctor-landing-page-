"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ContactFormData, contactSchema } from "../schemas/contactFormSchema";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Submitted data: ", data);
    // TODO: Implement form submission logic
    reset();
  };

  return (
    <div className="mx-auto max-w-2xl py-14 px-8">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-[#ddd] text-center">
        Contact <span className="text-indigo-600">Us</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            Full Name
          </label>
          <input
            {...register("fullname")}
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.fullname && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.fullname.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email address"
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
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            {...register("mobile")}
            placeholder="Enter your mobile number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.mobile && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Write your message here"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.message && (
            <p className="text-red-500 dark:text-yellow-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Button
            type="submit"
            variant="default"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
