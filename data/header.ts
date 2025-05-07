import { CHeaderText } from "@/types";
import phoneImage from "@/assets/images/appointment-discount-phone-mockup.png";
import phoneImageDark from "@/assets/images/appointment-discount-phone-mockup.png";

export const headerText: CHeaderText = {
  announcement: {
    text: "Delivering compassionate, proven healthcare you can trust. ",
    link: {
      text: "Read more ",
      href: "#",
    },
  },
  title: {
    prefix: "Personalized Care with ",
    highlight: "Dr. Smriti Negi",
  },
  description:
    "Your health, our priority — offering trusted medical consultations and compassionate care for a healthier tomorrow.",
  cta: {
    primary: {
      text: "Book Appointment",
      href: "/booking",
    },
    secondary: {
      text: "Learn more",
      href: "#",
    },
  },
  phoneImage: {
    src: {
      dark: phoneImageDark,
      light: phoneImage,
    },
    alt: "phone image",
  },
};
