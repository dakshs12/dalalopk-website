import Hero from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen"> 
      {/* Hero stays the same */}
      <Hero />

      {/* Welcome Section - REMOVED bg-white/gray, added bg-transparent */}
      <section className="py-20 px-6 bg-transparent"> 
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[350px]">
                <Image 
                  src="/intro.jpg" 
                  alt="Dalal Omprakash Khandelwal Intro" 
                  fill 
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
                Welcome to <br/>
                <span className="text-primary">Dalal Omprakash Khandelwal</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-medium">
                <p>
                  With a legacy of excellence since <strong>1970</strong>, <strong>Dalal Omprakash Khandelwal</strong> stands as a trusted canvassing agent in grain, pulses, and cattle feed. From carefully selected millers to global traders, we ensure every deal meets the highest standards of purity, transparency, and market integrity.
                </p>
                <p>
                  Driven by tradition and powered by market intelligence, we combine age-old business values with modern communication. Our commitment to <strong>quality checking, fair pricing, and reliable networking</strong> has helped us earn the confidence of traders across India.
                </p>
              </div>
            </div>
          </div>

          {/* Boxes - Kept White to pop against the Cream background */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent text-center">
              <h3 className="text-5xl font-extrabold text-primary mb-2">55+</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Years of Legacy</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent text-center">
              <h3 className="text-5xl font-extrabold text-primary mb-2">100+</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Daily Connections</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent text-center">
              <h3 className="text-5xl font-extrabold text-primary mb-2">100%</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Quality Assured</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent text-center">
              <h3 className="text-5xl font-extrabold text-primary mb-2">PAN</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">India Network</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}