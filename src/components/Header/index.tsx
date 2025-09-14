'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  font?: { variable: string }; // Accept Next.js font object
};

const Header = ({ font }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "My Works" },
    { href: "/about", label: "About Me" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-42 py-4 z-50 transition-colors duration-500 ${
        isOpen ? "bg-[#e0b0ff] text-[#272928]" : "bg-[#272928] text-[#b1b1b1]"
      }`}
    >
 <Link
  href="/"
  className={`flex flex-col cursor-pointer ${font?.variable || ""} ml-4`}
>
  <div className="flex items-baseline gap-1 relative">
    <span className="text-3xl md:text-4xl text-white font-bold">
      Srilatha
    </span>
    <span className="text-3xl md:text-4xl text-white font-bold relative">
      Potnuru
      <span className="absolute right-0 -bottom-5 text-green-400 text-xl md:text-lg  font-medium tracking-wide">
        Portfolio
      </span>
    </span>
  </div>
</Link>




      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-12 mr-4">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`relative font-semibold transition-all duration-300 ${
              pathname === link.href
                ? "text-[#22c55e] drop-shadow-[0_0_12px_#22c55e]"
                : "hover:text-[#22c55e] hover:drop-shadow-[0_0_8px_#22c55e] hover:drop-shadow-[0_0_12px_#facc15]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden flex flex-col justify-between w-6 h-6 cursor-pointer mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-0.5 w-full bg-current transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-full bg-current transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#e0b0ff] flex flex-col justify-center items-center gap-12 text-3xl transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`font-bold transition-colors duration-300 ${
              pathname === link.href
                ? "text-[#fff]"
                : "text-[#272928] hover:text-[#fff]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
