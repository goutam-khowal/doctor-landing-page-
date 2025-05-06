import Header from "@/components/Header";
import BlurBgHOC from "@/lib/BlurBgHOC";
import React from "react";

function Homepage() {
  return <Header />;
}

export default BlurBgHOC(Homepage);
