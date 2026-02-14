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
              From a Small Shop to a Pan-India Network
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg text-justify">
              <p>
                The journey of <strong>Dalal Omprakash Khandelwal</strong> began in <strong>1970</strong> with a simple vision: to bring honesty and standardization to the grain trading market. Founded by the late <strong>Shri Omprakash Ji Khandelwal</strong>, our firm started as a small canvassing agency in the heart of Indore.
              </p>
              <p>
                Over the last <strong>55 years</strong>, we have witnessed the market evolve from manual auctions to digital trading. Through it all, our core values remained unchanged. Today, led by <strong>Vivek Khandelwal</strong> and <strong>Vedant Khandelwal</strong>, we bridge the gap between Millers (Processors) and Traders across India.
              </p>
              <p>
                We don't just facilitate deals; we ensure quality. Whether it is <strong>Moong, Urad, Toor, or Cattle Feed</strong>, our seal of approval means the goods meet the highest standards of foreign matter and moisture analysis.
              </p>
            </div>
          </div>

          {/* Image Placeholder (Office or Founder Photo) */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
             {/* You will need to add an image named 'office.jpg' to your public folder */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
               {/* Remove this div and uncomment Image below when you have the photo */}
               [Add Photo of Office or Omprakash Ji Here]
            </div>
            {/* <Image 
              src="/office.jpg" 
              alt="Office of Dalal Omprakash Khandelwal" 
              fill 
              className="object-cover"
            /> 
            */}
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
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Market Intelligence</h3>
              <p className="text-gray-600">
                We provide accurate daily rate analysis, helping you buy at the right time to maximize profit.
              </p>
            </div>
             {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <CheckCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We physically verify lots for quality, specifically checking for 'sortex' standards and moisture content.
              </p>
            </div>
             {/* Value 3 */}
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
        <h2 className="text-3xl font-bold text-primary mb-10">Meet The Partners</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          {/* Partner 1 */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl w-full md:w-1/3 shadow-lg">
             <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">VK</div>
            <h3 className="text-xl font-bold text-primary">Vivek Khandelwal</h3>
            <p className="text-accent font-bold text-sm uppercase tracking-wide">Partner</p>
            <p className="text-gray-500 mt-4 text-sm">
              With decades of experience, Vivek ji handles the core relationships with major millers across MP and Maharashtra.
            </p>
          </div>

          {/* Partner 2 */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">VK</div>
            <h3 className="text-xl font-bold text-primary">Vedant Khandelwal</h3>
            <p className="text-accent font-bold text-sm uppercase tracking-wide">Partner</p>
            <p className="text-gray-500 mt-4 text-sm">
              Representing the new generation, Vedant brings modern technology and digital networking to the family business.
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