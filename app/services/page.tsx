import React from "react";
import Services from "./components/Services";
import BlurBgHOC from "@/lib/BlurBgHOC";

function ServicesPage() {
  return <Services />;
}

export default BlurBgHOC(ServicesPage);
