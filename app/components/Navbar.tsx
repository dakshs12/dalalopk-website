"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // 1. Imported the Pathname checker

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. Activated the checker

  // SAFE LIST: We manually define exactly where each button goes
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" }, 
    { name: "PRODUCTS", href: "/products" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-28">

          {/* LEFT SIDE: Logo & Brand */}
          <Link 
            href="/" 
            onClick={(e) => {
              // 3. THE MAGIC: If we are already on Home ("/"), stop the normal snap load and smooth scroll instead!
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="relative w-[160px] h-[100px] flex-shrink-0 drop-shadow-md">
              <Image
                src="/logo.png"
                alt="OK Logo"
                fill
                className="object-contain scale-[2.0]"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1
                className="text-primary font-serif font-extrabold text-2xl lg:text-3xl leading-none tracking-wide"
                style={{
                  fontFamily: "var(--font-playfair)",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.15)"
                }}
              >
                DALAL OMPRAKASH <br className="hidden md:block" /> KHANDELWAL
              </h1>

              <span
                className="text-[#25d366] font-extrabold text-sm tracking-[0.35em] mt-1 uppercase opacity-100 drop-shadow-sm"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Since 1970
              </span>
            </div>
          </Link>

          {/* RIGHT SIDE: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-primary font-bold text-[16px] tracking-wide py-2 transition-colors duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link.name}
                {/* The Green Underline Effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#25d366] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg hover:bg-accent hover:text-primary transition transform hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              CONTACT US
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-6 py-6 space-y-4 flex flex-col text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary font-bold text-lg tracking-widest"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white py-3 rounded-full font-bold tracking-widest shadow-md mt-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}