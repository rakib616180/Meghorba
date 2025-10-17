import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { Filter } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of bangles for every occasion
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="flex items-center text-gray-700 font-semibold">
            <Filter className="w-4 h-4 mr-2" />
            Filter:
          </span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
