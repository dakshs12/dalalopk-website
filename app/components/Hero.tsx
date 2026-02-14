"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/slide1.jpg", 
    title: "Premium Quality Grains & Pulses",
    subtitle: "Trusted Canvassing Agents Since 1970",
  },
  {
    id: 2,
    image: "/slide2.jpg",
    title: "Connecting Buyers & Sellers",
    subtitle: "Transparent Deals in Chuni, Cattle Feed & More",
  },
  {
    id: 3,
    image: "/slide3.jpg",
    title: "Dalal Omprakash Khandelwal",
    subtitle: "Commitment to Quality and Integrity",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    // FIX: Changed h-[600px] to calc(100vh - 112px) to fill the remaining screen exactly
    <div className="relative h-[calc(100vh-112px)] w-full overflow-hidden bg-primary">
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darkened overlay slightly for better text read */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {slides[currentSlide].title}
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl drop-shadow-md font-light"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {slides[currentSlide].subtitle}
        </p>
        
        <div className="flex gap-4" style={{ fontFamily: "var(--font-poppins)" }}>
          <Link
            href="/products"
            className="bg-[#25d366] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition flex items-center gap-2 shadow-xl transform hover:scale-105"
          >
            Explore Products <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 shadow-sm ${
              index === currentSlide ? "bg-[#25d366] w-10" : "bg-white/60 w-3 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}