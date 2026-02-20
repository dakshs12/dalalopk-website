import Image from "next/image";

interface ProductProps {
  title: string;
  items: string[];
  image: string;
}

export default function ProductCard({ title, items, image }: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
      
      {/* 1. Image Section */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        
        {/* List of varieties */}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}