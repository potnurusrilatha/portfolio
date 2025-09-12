'use client';

import { useState, useEffect } from "react";

import Link from "next/link"; 


type HeaderProps = {
  font: string;
}

const Header = ({ font }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About me" },
    { href: "#projects", label: "My Works" },
    { href: "#contacts", label: "Contacts" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-colors duration-500 ${isOpen ? 'bg-[#e0b0ff] text-[#272928]' : 'bg-[#272928] text-[#b1b1b1]'}`}>
      
      {/* Logo */}
      <Link href="/" className={`text-3xl font-bold ${font}`}>
        Srilatha
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-12">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector(link.href);
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative font-semibold hover:text-[#e0b0ff] transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex flex-col justify-between w-6 h-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#e0b0ff] flex flex-col justify-center items-center gap-12 text-3xl transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector(link.href);
              if (section) section.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="font-bold text-[#272928] hover:text-[#fff] transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
      
    </header>
  );
}

export default Header;
