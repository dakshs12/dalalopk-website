import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { title: "Moong (Green Gram)", image: "/moong.jpg", items: ["Moong Dal (With Skin)", "Moong Dal (Without Skin)", "Moong Polish"] },
    { title: "Urad (Black Gram)", image: "/urad.jpg", items: ["Urad Dal (With Skin)", "Urad Dal (Without Skin)", "Urad Polish", "Urad Whole"] },
    { title: "Toor (Pigeon Pea)", image: "/toor.jpg", items: ["Desi Toor", "Imported Toor"] },
    { title: "Masoor (Red Lentil)", image: "/masoor.jpg", items: ["Masoor Dal", "Masoor Polish"] },
    { title: "Chana (Bengal Gram)", image: "/chana.jpg", items: ["Chana Dal", "Kabuli Chana (White Chickpea)", "Chana Filter"] },
    { title: "Soyabean", image: "/soyabean.jpg", items: ["Soyabean Sortex Quality"] },
    { title: "Other Grains", image: "/wheat.jpg", items: ["Wheat", "Rajma (Kidney Bean)", "Chawla (Sorghum/Jowar)"] },
    { title: "Cattle Feed", image: "/feed.jpg", items: ["Premium Cattle Feed", "Chuni"] },
  ];

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Product Range
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
          We deal in premium quality pulses, grains, and cattle feed. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} items={product.items} image={product.image} />
        ))}
      </div>

      {/* The Contact Us Section */}
      <div className="bg-white py-16 border-t border-gray-100 text-center px-6 rounded-2xl shadow-sm max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
          Need current market rates?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto" style={{ fontFamily: "var(--font-poppins)" }}>
          Contact us today for real-time pricing and physical quality verification reports.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold tracking-widest shadow-xl hover:bg-accent hover:text-primary transition transform hover:-translate-y-1"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          CONTACT US
        </Link>
      </div>
    </main>
  );
}