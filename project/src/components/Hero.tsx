import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 via-white to-rose-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Timeless Elegance
              <span className="block text-amber-600">On Your Wrist</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our handcrafted collection of exquisite bangles, where tradition meets contemporary design. Each piece tells a story of artistry and grace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-amber-600"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Beautiful bangles collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
