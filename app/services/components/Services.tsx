"use client";

import Image from "next/image";
import React from "react";
import drImg from "../../../assets/images/doctor-image.png";
import pharmacyImg from "../../../assets/images/pharmacy.png";
import pathLabImg from "../../../assets/images/pathlab.png";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

function Services() {
  console.log(drImg);
  return (
    <>
      {/* Main Content */}
      <main className="relative isolate px-6 pt-14 pb-24 lg:px-8">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl mb-4">
          Services <span className="text-indigo-600">we provide!</span>
        </h1>

        {/* Cards */}
        <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10 place-items-center w-fit mx-auto">
          {services.map((service, i) => (
            <div
              id={service.id}
              key={i}
              className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 outline-1 max-w-[344px] rounded-2xl"
              onClick={() => {
                // Wait for navigation
                setTimeout(() => {
                  const element = document.getElementById(service.id);
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset -
                      40;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }, 0);
              }}
            >
              <figure className="px-4 pt-4 flex items-center justify-center">
                <Image
                  className="rounded-xl max-h-86 w-fit"
                  src={service.image}
                  alt={service.service}
                />
              </figure>
              <div className="card-body items-center text-center px-6 pb-6">
                <h2 className="card-title text-gray-800 dark:text-gray-100">
                  {service.service}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 italic opacity-85 font-light">
                  {service.description}
                </p>
                <div className="card-actions mt-4">
                  <Button variant={"ghost"}>
                    <Link href={service.href} className="btn btn-primary">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Background Blur Bottom */}
    </>
  );
}

export default Services;
