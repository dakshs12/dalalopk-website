import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold text-accent mb-4">Dalal Omprakash Khandelwal</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Trusted Canvassing Agents in Grain, Pulses, Chuni & Cattle Food since 1970. 
            Connecting millers and traders with transparency and integrity.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
            <li><Link href="/products" className="hover:text-accent transition">Our Products</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <span>E-19, Raj Plaza, 23 Sanyogitaganj, Chhawni, Indore (M.P)-452001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <span>+91 94250 82577 (Vivek)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <span>vivekomkhandelwal@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dalal Omprakash Khandelwal. All rights reserved.</p>
      </div>
    </footer>
  );
}