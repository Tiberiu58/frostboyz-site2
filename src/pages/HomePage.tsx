import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletter(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    { name: 'Marcus J.', text: 'This chain hit different. Pure ice, no cap.', rating: 5 },
    { name: 'Zoe M.', text: 'Quality is unmatched. Been wearing daily for months.', rating: 5 },
    { name: 'Tyler K.', text: 'Finally found jewelry that matches my vibe. FrostBoyz gets it.', rating: 5 },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletter(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Join the Frost Fam</h3>
              <p className="text-gray-600 mb-6">Get 10% off your first order + exclusive drops</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Claim 10% Off
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Spline iframe background */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
          <iframe
            src="https://my.spline.design/untitled-b0b8b8b8b8b8b8b8/"
            title="FrostBoyz Spline"
            className="w-full h-full border-0"
            loading="eager"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            FrostBoyz<span className="text-blue-400">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium tracking-wide">Frost never melts.</p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Born from urban culture. Trap-inspired, icy, bold. Built for the streets, worn like luxury.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 group"
          >
            Shop the Frost
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Icy look. Zero melt. Discover our most coveted pieces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/shop"
              className="inline-flex items-center border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What The Fam Says</h2>
            <p className="text-xl text-gray-600">Real talk from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-800 mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-gray-900">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose FrostBoyz?</h2>
            <p className="text-xl text-gray-400">Not the man. The Boss.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400">Hypoallergenic materials, built to last</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-400">Worldwide delivery in 7-15 days</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-400">Your frost is protected forever</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Rated</h3>
              <p className="text-gray-400">Trusted by thousands of customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Built for the streets. Worn like luxury.</h2>
          <p className="text-xl mb-8">Join the movement. Elevate your game.</p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Start Your Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
