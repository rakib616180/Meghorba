import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Radiant Bangles</h3>
            <p className="text-gray-400">
              Bringing you the finest collection of handcrafted bangles since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Shop</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Radiant Bangles
          </p>
          <p className="mt-2 text-sm">
            © 2025 Radiant Bangles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
