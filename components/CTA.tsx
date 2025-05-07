"use client";

import { headerText } from "@/data/cta";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ctaSchema } from "./schemas/ctaSchema";

type CtaFormData = z.infer<typeof ctaSchema>;

function CTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CtaFormData>({
    resolver: zodResolver(ctaSchema),
  });

  const onSubmit = (data: CtaFormData) => {
    console.log("Submitted data: ", data);
    // TODO: Implement form submission logic
    reset();
  };

  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl">
            {headerText.cta.form?.title.prefix}
            <span className="text-indigo-600">
              {headerText.cta.form?.title.highlight}
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 italic opacity-85 font-extralight sm:text-xl/8">
            {headerText.cta.form?.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sm:flex sm:gap-4 border-2"
          >
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                {headerText.cta.form?.placeholder}
              </label>

              <input
                {...register("email")}
                type="email"
                placeholder={headerText.cta.form?.placeholder}
                className="w-full rounded-md border-gray-200 bg-white p-3 shadow-xs transition focus:border-white focus:ring-3 focus:ring-indigo-400 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white h-12"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 dark:text-yellow-600 ">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:w-auto h-12"
            >
              <span className="text-sm font-medium">
                {headerText.cta.form?.submit.label} &rarr;
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CTA;
