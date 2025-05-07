import BlurBgHOC from "@/lib/BlurBgHOC";
import React from "react";
import CTA from "../../components/CTA";
import ContactForm from "./components/ContactForm";

function ContactUsPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default BlurBgHOC(ContactUsPage);
