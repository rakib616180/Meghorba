import { Award, Shield, Sparkles, Truck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Handcrafted Quality",
      description: "Each piece is carefully crafted by skilled artisans with attention to detail"
    },
    {
      icon: Shield,
      title: "Authentic Materials",
      description: "We use only genuine materials and provide certification for precious metals"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders above $100 with secure packaging"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "30-day return policy and lifetime warranty on manufacturing defects"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We blend traditional craftsmanship with modern design to create bangles that celebrate your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-white hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
