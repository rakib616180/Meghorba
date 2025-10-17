import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
        <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
          {product.category}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{product.material}</span>
            <span>Size: {product.size}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-2xl font-bold text-amber-600">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
