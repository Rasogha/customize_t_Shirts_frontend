import { Link } from 'react-router-dom';
import { FaArrowRight, FaPaintBrush } from 'react-icons/fa';

const HomeScreen = () => {
  return (
    <div className="bg-brandBlack text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center border-b border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
              CREATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGreen to-brandLightGreen drop-shadow-[0_0_15px_rgba(0,255,100,0.5)]">
                OWN REALITY
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Premium print-on-demand for the visionaries. High-quality DTG printing on sustainable fabrics.
            </p>
            <Link 
              to="/design-lab" 
              className="inline-flex items-center gap-3 bg-brandGreen hover:bg-brandLightGreen text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,77,64,0.6)]"
            >
              <FaPaintBrush /> Enter Design Lab
            </Link>
          </div>

          {/* Right: Image (Printer/Product) */}
          <div className="relative">
             {/* Glow Effect Background */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandGreen/20 rounded-full blur-[100px] pointer-events-none"></div>
             
             {/* Main Image */}
             <img 
               src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2727&auto=format&fit=crop" 
               alt="DTG Printer" 
               className="relative z-10 w-full rounded-2xl shadow-2xl border border-gray-800 transform rotate-2 hover:rotate-0 transition duration-700"
             />
          </div>
        </div>
      </section>

      {/* 2. TRENDING CREATIONS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider mb-2">Trending Creations</h2>
              <p className="text-gray-500 text-sm">Worn by the community this week</p>
            </div>
            <div className="flex gap-2 text-gray-500">
               <span>&lt;</span> <span>&gt;</span>
            </div>
          </div>

          {/* Grid of Products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative">
                <div className="bg-gray-900 rounded-xl overflow-hidden aspect-[4/5] border border-gray-800 group-hover:border-brandGreen transition-colors">
                  <img 
                    src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80`} 
                    alt="T-Shirt" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-white">Cyber Skull Tee</h3>
                  <button className="w-full mt-3 bg-brandGreen text-white py-2 rounded text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                    Customize
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR CRAFT (Features) */}
      <section className="py-20 border-y border-gray-900 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Image */}
                <div className="order-2 lg:order-1 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                        alt="Precision Printing" 
                        className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
                    />
                     <div className="absolute -bottom-6 -right-6 bg-brandBlack p-6 border border-gray-800 rounded-xl shadow-xl hidden md:block">
                        <p className="text-brandLightGreen font-mono text-2xl font-bold">1200 DPI</p>
                        <p className="text-xs text-gray-500 uppercase">Print Resolution</p>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Our Craft: <br/>Precision Printing</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-brandLightGreen font-bold text-lg mb-2">DTG Technology</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We utilize top-tier Direct-to-Garment technology that fuses ink directly into the fabric fibers, ensuring prints that never crack or peel.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-brandLightGreen font-bold text-lg mb-2">Eco-Friendly Inks</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our water-based NeoPigment inks are 100% non-hazardous, toxin-free, and vegan-friendly. Safe for you and the planet.
                            </p>
                        </div>
                         <div>
                            <h3 className="text-brandLightGreen font-bold text-lg mb-2">Quality Control</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every single item is inspected by hand before shipping to ensure the colors pop and the stitching is perfect.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold uppercase mb-12">The Streets: Community Gallery</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8].map((item, index) => (
                    <div key={item} className={`relative group overflow-hidden rounded-lg ${index === 1 || index === 5 ? 'md:row-span-2 md:h-full' : 'h-64'}`}>
                        <img 
                            src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=800&q=80`} 
                            // Note: These are broken placeholder links, replace with real Unsplash IDs or local images
                            // For demo, I'll use a reliable source below:
                            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"}
                            alt="Community" 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="border border-white px-4 py-2 rounded-full text-xs uppercase font-bold hover:bg-white hover:text-black transition">
                                Shop Look
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomeScreen;