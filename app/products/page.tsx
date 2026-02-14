import ProductCard from "../components/ProductCard";

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
    <main className="min-h-screen py-16 px-6"> {/* Removed bg-color here */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Product Range</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deal in premium quality pulses, grains, and cattle feed. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} items={product.items} image={product.image} />
        ))}
      </div>
    </main>
  );
}