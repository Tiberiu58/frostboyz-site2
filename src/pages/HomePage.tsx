import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [hasSubmittedNewsletter, setHasSubmittedNewsletter] = useState(false);

  useEffect(() => {
    // Only show newsletter popup if user is logged in and hasn't submitted email yet
    if (user && !hasSubmittedNewsletter) {
      const timer = setTimeout(() => setShowNewsletter(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [user, hasSubmittedNewsletter]);

  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    { text: 'This chain hit different. Pure ice, no cap.', rating: 5 },
    { text: 'Quality is unmatched. Been wearing daily for months.', rating: 5 },
    { text: 'Finally found jewelry that matches my vibe. FrostBoyz gets it.', rating: 5 },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletter(false);
    setHasSubmittedNewsletter(true);
    setEmail('');
  };

  const handleNewsletterClose = () => {
    setShowNewsletter(false);
    // Don't set hasSubmittedNewsletter to true, so it can show again
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={handleNewsletterClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Join the Frost Fam</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Get 10% off your first order + exclusive drops</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Claim 10% Off
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Spline iframe background */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundColor: '#020202' }}>
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/20250901_2230_Silver Jewelry Set_remix_01k43c0skhfre96qrsb43v5af3.png"
            alt="FrostBoyz Premium Jewelry"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="font-black tracking-wider text-shadow-lg uppercase text-4xl sm:text-6xl md:text-8xl">FrostBoyz</span><span className="text-blue-400 font-black">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-medium tracking-wide px-4"
          >
            Frost never melts.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto px-4"
          >
            Born from urban culture. Trap-inspired, icy, bold. Built for the streets, worn like luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 group"
            >
              Shop the Frost
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">Featured Collections</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Icy look. Zero melt. Discover our most coveted pieces.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.2}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <Link
                to="/shop"
                className="inline-flex items-center border-2 border-black dark:border-white text-black dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">What The Fam Says</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">Real talk from real customers</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.2} direction="up">
                <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg shadow-md text-center transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4 italic">"{t.text}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">Built Different</h2>
              <p className="text-lg sm:text-xl text-gray-300 px-4">Where street culture meets premium craftsmanship</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: 'Premium Quality', desc: 'Hypoallergenic materials, built to last' },
              { icon: Truck, title: 'Fast Shipping', desc: 'Worldwide delivery in 7-15 days' },
              { icon: Award, title: 'Lifetime Warranty', desc: 'Your frost is protected forever' },
              { icon: Star, title: '5-Star Rated', desc: 'Trusted by customers' },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="up">
                <div className="text-center px-4">
                  <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jewelry Insights */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">Jewelry Insights</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Level up your game with insider knowledge from the streets
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 'cuban-chain-styling',
                title: 'Top 3 Ways to Style Cuban Chains',
                description: 'From subtle flex to full ice mode. Master the art of layering like a pro.',
                image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                id: 'jewelry-care-guide',
                title: 'Keep Your Ice Forever Fresh',
                description: 'Street-tested tips to maintain that permanent frost. Your jewelry deserves respect.',
                image: 'https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                id: 'trap-jewelry-history',
                title: 'The Culture Behind the Ice',
                description: 'How trap culture revolutionized jewelry. From the streets to luxury, this is our story.',
                image: 'https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.2} direction="up">
                <Link
                  to={`/insights/${article.id}`}
                  className="group block bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-600 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Built for the streets. Worn like luxury.</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join the movement. Elevate your game.</p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Start Your Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default HomePage;