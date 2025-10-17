import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products } from './data/products';
import { CartItem, Product } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <About />
      <Contact />
      <Footer />
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
