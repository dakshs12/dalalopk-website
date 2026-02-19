import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Changed to a 4-column grid so we can give the long brand name more room */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand (Takes up 2 columns worth of space so it doesn't get cut off) */}
          <div className="md:col-span-2 overflow-hidden pr-4">
            <h2 
              className="text-xl lg:text-2xl font-bold mb-4 text-accent uppercase tracking-wide whitespace-nowrap" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              DALAL OMPRAKASH KHANDELWAL
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm max-w-md" style={{ fontFamily: "var(--font-poppins)" }}>
              Trusted Canvassing Agents in Grain, Pulses, Chuni & Cattle Food since 1970. Connecting millers and traders with transparency and integrity.
            </p>
          </div>

          {/* Column 2: Quick Links (Shifted to the right to leave space for the brand name) */}
          <div className="md:pl-4 lg:pl-12">
            <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "var(--font-poppins)" }}>Quick Links</h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-poppins)" }}>
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">Our Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "var(--font-poppins)" }}>Contact Us</h3>
            <ul className="space-y-4" style={{ fontFamily: "var(--font-poppins)" }}>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">E-19, Raj Plaza, 23 Sanyogitaganj, Chhawni, Indore (M.P)-452001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-accent flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm flex flex-col gap-1">
                  <span>+91 94250 82577 (Vivek Khandelwal)</span>
                  <span>+91 88170 22797 (Vedant Khandelwal)</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">vivekomkhandelwal@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
          <p>&copy; {new Date().getFullYear()} Dalal Omprakash Khandelwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}