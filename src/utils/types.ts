export type FooterLink = {
  id: number;
  label?: string;
  href?: string;
  logo?: string; // optional if using an image instead of text
};

export type FooterLinksSection = {
  title: string;
  links: FooterLink[];
};

export type FooterLocation = {
  title: string;
  address: string;
  mapLink: string;
};

export type FooterContactDetails = {
  title: string;
  phone: string;
  email: string;
};

export type Developer = {
  id: number;
  name: string;
};

export type FooterMedia = {
  developers: {
    title: string;
    list: Developer[];
  };
};

export type FooterCopyright = {
  copyright: string;
};
