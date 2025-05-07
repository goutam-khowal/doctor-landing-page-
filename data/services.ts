import drImg from "../assets/images/doctor-image.png";
import pharmacyImg from "../assets/images/pharmacy.png";
import pathLabImg from "../assets/images/pathlab.png";
import { Service } from "@/types";
import { navbarText } from "./navbar";

export const services: Service[] = [
  {
    id: "service1",
    service: "Consultation",
    image: drImg,
    description: `Get expert medical consultation from ${navbarText.doctorName} for all your health concerns.`,
    href: "#service1",
  },
  {
    id: "service2",
    service: "Pathology",
    image: pathLabImg,
    description:
      "State-of-the-art diagnostic services with accurate and timely test results for better health management.",
    href: "#service2",
  },
  {
    id: "service3",
    service: "Pharmacy",
    image: pharmacyImg,
    description:
      "Complete pharmacy services with genuine medicines and professional guidance for your medication needs.",
    href: "#service3",
  },
];
