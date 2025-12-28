import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brandBlack text-gray-300 border-t border-brandGreen/30 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">
              INK & <span className="text-brandLightGreen">EMERALD</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium custom apparel designed by you, crafted by us. 
              Elevate your style with high-quality prints and sustainable materials.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/design-lab" className="hover:text-brandLightGreen transition">Design Lab</Link></li>
              <li><Link to="/products" className="hover:text-brandLightGreen transition">All Products</Link></li>
              <li><Link to="/featured" className="hover:text-brandLightGreen transition">Featured Artists</Link></li>
              <li><Link to="/bulk" className="hover:text-brandLightGreen transition">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="hover:text-brandLightGreen transition">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-brandLightGreen transition">FAQ</Link></li>
              <li><Link to="/size-guide" className="hover:text-brandLightGreen transition">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-brandLightGreen transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe for latest drops and offers.</p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-l focus:outline-none focus:border-brandGreen"
              />
              <button className="bg-brandGreen hover:bg-brandLightGreen px-4 py-2 text-white rounded-r transition">
                Go
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brandGreen transition">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brandGreen transition">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brandGreen transition">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ink & Emerald. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;