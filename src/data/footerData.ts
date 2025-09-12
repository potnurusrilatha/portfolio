import { FooterLinksSection, FooterLocation, FooterContactDetails, FooterMedia, FooterCopyright, Developer } from '@/utils/types'

// Footer Links
export const footerLinks: FooterLinksSection = {
  title: "Quick Links",
  links: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Contacts", href: "#contacts" },
    // You can add more links or images
  ],
};

// Footer Location
export const footerLocation: FooterLocation = {
  title: "Our Location",
  address: "stockholm",
  mapLink: "https://www.google.com/maps", // your actual Google Maps link
};

// Contact Details
export const footerContactDetails: FooterContactDetails = {
  title: "Contact Us",
  phone: "+1234567890",
  email: "info@example.com",
};

// Developers / Media
export const footerDevelopersList: Developer[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alex Johnson" },
];

// export const footerMedia: FooterMedia = {
//   developers: {
//     title: "Developers",
//     list: footerDevelopersList,
//   },
// };

// Copyright
export const footerCopyright: FooterCopyright = {
  copyright: "© 2025 Jasmine. All rights reserved.",
};
