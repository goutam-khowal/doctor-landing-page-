import React from "react";
import Services from "./components/Services";
import Navbar from "@/components/Navbar";

function ServicesPage() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <Services />
    </>
  );
}

export default ServicesPage;
