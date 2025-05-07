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
