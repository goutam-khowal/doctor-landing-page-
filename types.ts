import type { StaticImageData } from "next/image";

interface CNavigationItem {
  name: string;
  href: string;
}

export type CNavigationItems = CNavigationItem[];

export interface CNavbarText {
  companyName: string;
  doctorName: string;
  login: {
    text: string;
    href: string;
  };
  openMenu: string;
  closeMenu: string;
}

//* Header *
export interface CHeaderText {
  announcement: {
    text: string;
    link: {
      text: string;
      href: string;
    };
  };
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  phoneImage: {
    src: {
      dark: StaticImageData;
      light: StaticImageData;
    };
    alt: string;
  };
}
