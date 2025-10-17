import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = items.length > 0 ? 9.99 : 0;
  const total = subtotal + tax + shipping;

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400 text-center">Add some beautiful bangles to get started!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-white rounded border hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-white rounded border hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-6 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t text-lg font-bold">
                    <span>Total</span>
                    <span className="text-amber-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-lg">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
