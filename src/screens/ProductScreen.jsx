import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState('L'); // Default to 'L' as shown in image

  // Mock Data matching your image
  const product = {
    name: 'Heavyweight Black Tee',
    price: 25.00,
    description: 'Premium 100% cotton, boxy fit for the modern creator. Durable, soft, and perfect for DTG printing.',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2787&auto=format&fit=crop' // Placeholder high-quality black tee
  };

  return (
    <div className="min-h-screen bg-brandBlack text-white pt-10 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-brandLightGreen mb-8 transition-colors">
          <FaArrowLeft className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Product Image */}
          <div className="relative group">
            {/* The subtle glow behind the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-[4/5]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="space-y-8">
            
            {/* Title & Price */}
            <div>
              {/* Neon Text Effect matching the image */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brandLightGreen drop-shadow-[0_0_10px_rgba(0,255,100,0.5)]">
                {product.name}
              </h1>
              <p className="text-3xl font-light text-white">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed border-t border-gray-800 pt-6">
              {product.description}
            </p>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-300">Size</span>
                <span className="text-xs text-brandLightGreen cursor-pointer hover:underline">Size Guide</span>
              </div>
              
              <div className="flex space-x-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg transition-all border-2
                      ${selectedSize === size 
                        ? 'bg-brandGreen border-brandGreen text-black shadow-[0_0_15px_rgba(0,255,100,0.4)] scale-110' // Active State (Glowing)
                        : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white' // Inactive State
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6">
              <Link to="/design-lab">
                <button className="w-full bg-brandGreen text-black font-extrabold uppercase py-5 rounded-xl text-lg tracking-widest shadow-[0_0_20px_rgba(0,255,100,0.3)] hover:shadow-[0_0_30px_rgba(0,255,100,0.6)] hover:bg-brandLightGreen transform hover:-translate-y-1 transition-all duration-300">
                   Customize This Piece
                </button>
              </Link>
              <p className="text-center text-xs text-gray-500 mt-4">
                Free shipping on orders over $100 • Precision DTG Printing
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;