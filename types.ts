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

//* Header - CTA *
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
    form?: {
      title: {
        prefix: string;
        highlight: string;
      };
      description: string;
      placeholder: string;
      submit: {
        label: string;
        href: string;
      };
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

//* Services *
export interface Service {
  id: string;
  service: string;
  image: StaticImageData;
  description: string;
  href: string;
}

// * Booking Form

export interface CBookingFormText {
  title: {
    text: string;
    highlight: string;
  };
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    appointmentDate: {
      label: string;
    };
    submit: {
      text: string;
    };
  };
}

// * Contact us

export interface CContactFormText {
  title: {
    text: string;
    highlight: string;
  };
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    submit: {
      text: string;
    };
    message: {
      text: string;
    };
  };
}
