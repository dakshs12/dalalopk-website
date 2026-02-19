import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Header Section */}
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legacy</h1>
        <p className="text-xl text-accent max-w-2xl mx-auto px-4">
          Connecting the Grain Markets of India with Trust & Transparency Since 1970.
        </p>
      </div>

      {/* 2. The Story Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              A Legacy of Trust & Transparency
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
              <p>
                Established in 1970 by <strong>Shri Omprakash Ji Khandelwal</strong> in <strong>Indore</strong>, Dalal Omprakash Khandelwal was founded with a vision to bring <strong>integrity, transparency, and standardization</strong> to grain trading.
              </p>
              <p>
                <strong>Over five decades</strong>, we have evolved with India’s agricultural markets — moving from manual auctions to modern digital trade — while staying rooted in trust and ethical dealing.
              </p>
              <p>
                Today, under the leadership of <strong>Vivek Khandelwal</strong> and <strong>Omprakash Ji Khandelwal</strong>, we connect millers and traders nationwide, ensuring quality in products like Moong, Urad, Toor, and Cattle Feed through strict adherence to foreign matter and moisture standards.
              </p>
            </div>
          </div>

          {/* Actual Image */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <Image 
              src="/about.jpg" /* Make sure this exactly matches the name of the file you put in the public folder! */
              alt="Dalal Omprakash Khandelwal Team" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. The "Why Us" Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Why Traders Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Market Intelligence</h3>
              <p className="text-gray-600">
                We provide accurate daily rate analysis, helping you buy at the right time to maximize profit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <CheckCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We physically verify lots for quality, specifically checking for 'sortex' standards and moisture content.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Dispute Resolution</h3>
              <p className="text-gray-600">
                In the rare case of a disagreement, we act as neutral arbitrators to ensure fair settlement for both parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Founder */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">OK</div>
            <h3 className="text-xl font-bold text-primary">Omprakash Ji Khandelwal</h3>
            <p className="text-accent font-bold text-sm uppercase tracking-wide">Founder</p>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Founded Dalal Omprakash Khandelwal in 1970, establishing a legacy of trust and ethical practices in the grain trading community.
            </p>
          </div>

          {/* Card 2: Partner */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
             <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">VK</div>
            <h3 className="text-xl font-bold text-primary">Vivek Khandelwal</h3>
            <p className="text-accent font-bold text-sm uppercase tracking-wide">Partner</p>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Manages key relationships with major millers across MP and India, ensuring smooth operations and long-term partnerships.
            </p>
          </div>

          {/* Card 3: Next Gen */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">VK</div>
            <h3 className="text-xl font-bold text-primary">Vedant Khandelwal</h3>
            <p className="text-accent font-bold text-sm uppercase tracking-wide">Next Gen Associate</p>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Introduces technology-driven processes and international business exposure to enhance efficiency and expand global trade.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to start trading?</h2>
        <Link href="/contact" className="inline-block bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition">
          Contact Us Today
        </Link>
      </section>

    </main>
  );
}