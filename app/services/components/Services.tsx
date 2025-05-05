import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import drImg from "../../../assets/images/doctor-image.png";
import pharmacyImg from "../../../assets/images/pharmacy.png";
import pathLabImg from "../../../assets/images/pathlab.png";

const services = [
  {
    service: "Consultation and Examination",
    image: drImg,
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
  },
  {
    service: "Pathology",
    image: pathLabImg,
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
  },
  {
    service: "Pharmacy",
    image: pharmacyImg,
    description:
      "A card component has a figure, a body part, and inside body there are title and actions parts.",
  },
];

function Services() {
  return (
    <div className="min-h-screen relative isolate px-6 lg:px-8 ">
      {/* Navbar */}

      {/* Background Blur Top */}
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
      {/* Main Content */}
      <main className="relative isolate px-6 pt-32 pb-24 lg:px-8">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Services <span className="text-indigo-600">we provide!</span>
        </h1>

        {/* Cards */}
        <div className="mt-10 flex md:flex-row flex-col justify-center items-center gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 outline-1"
            >
              <figure className="px-4 pt-4 flex items-center justify-center">
                <Image
                  className="rounded-xl max-h-86 w-fit"
                  src={service.image}
                  alt="Service"
                />
              </figure>
              <div className="card-body items-center text-center px-6 pb-6">
                <h2 className="card-title text-gray-800 dark:text-gray-100">
                  {service.service}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Background Blur Bottom */}
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

export default Services;
