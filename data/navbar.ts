import { CNavbarText, CNavigationItems } from "@/types";

const home = {
  name: "Home",
  href: "/",
};
export const navigationItems: CNavigationItems = [
  home,
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Appointments",
    href: "/booking",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Admin",
    href: "/admin",
  },
];

export const navbarText: CNavbarText = {
  companyName: "Your Company",
  doctorName: "Dr. Smriti Negi",
  login: {
    text: "Log in",
    href: "#",
  },
  openMenu: "Open main menu",
  closeMenu: "Close menu",
};
