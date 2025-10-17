import { ShoppingCart, Menu, X, Sparkles, Search, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-50 via-white to-rose-50 backdrop-blur-lg sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Radiant Bangles
              </h1>
              <p className="text-xs text-gray-500">Timeless Elegance</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
            >
              Collections
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <button className="hidden md:flex p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>

            <button className="hidden md:flex p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all">
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-br from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="lg:hidden p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden py-4 space-y-1 border-t border-amber-100 animate-in slide-in-from-top">
            <a
              href="#home"
              className="block py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#about"
              className="block py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
