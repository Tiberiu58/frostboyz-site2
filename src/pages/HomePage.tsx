import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed to newsletter
    const hasSubscribed = localStorage.getItem('frostboyz-newsletter-subscribed');
    const hasSeen = localStorage.getItem('frostboyz-newsletter-seen');
    
    // Show newsletter popup after 5 seconds if not subscribed
    if (!hasSubscribed && !hasSeen) {
      const timer = setTimeout(() => setShowNewsletter(true), 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    { text: 'This chain hit different. Pure ice, no cap.', rating: 5 },
    { text: 'Quality is unmatched. Been wearing daily for months.', rating: 5 },
    { text: 'Finally found jewelry that matches my vibe. FrostBoyz gets it.', rating: 5 },
  ];

  const handleNewsletterClose = () => {
    setShowNewsletter(false);
    // Mark as seen so it doesn't show again this session
    localStorage.setItem('frostboyz-newsletter-seen', 'true');
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative transition-colors duration-300">
            <NewsletterSignup 
              onClose={handleNewsletterClose}
              source="homepage-popup"
              showAsModal={true}
            />
          </div>
        </div>
      )}

      {/* Hero Section with Spline iframe background */}
      <section className="relative flex min-h-[calc(100dvh-5rem)] items-center justify-center overflow-hidden bg-[#020202] text-white">
        {/* Hero background image - optimized for mobile */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black">
          <img
            src="/WhatsApp Image 2025-09-01 at 19.11.30.jpeg"
            alt="Iced-out Cuban chain styled with black streetwear"
            className="h-full w-full object-cover object-[50%_42%] opacity-45 sm:opacity-50 md:opacity-55"
            loading="eager"
          />
          {/* Mobile gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(96,165,250,0.18),transparent_36%),linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.48),rgba(0,0,0,0.7))]"></div>
        </div>

        {/* Foreground content - optimized spacing for mobile */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight"
          >
            <span className="font-black tracking-wider text-shadow-lg uppercase drop-shadow-2xl">FrostBoyz</span><span className="text-sky-300 font-black">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8 font-bold tracking-wide px-2 sm:px-4 drop-shadow-lg"
          >
            Frost never melts.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-gray-100 max-w-2xl mx-auto px-2 sm:px-4 leading-8 drop-shadow-md"
          >
            Bijuterii iced out pentru streetwear: lanturi Cuban, bratari si piese hip hop construite pentru outfituri care ies in fata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="px-2 sm:px-4"
          >
            <Link
              to="/shop"
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-6 py-3 text-base font-black text-black shadow-xl transition-all duration-300 hover:bg-sky-300 group sm:px-8 sm:py-4 sm:text-lg"
            >
              Shop the Frost
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">Curated frost</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 dark:text-white mb-4 px-4">Featured Collections</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Lanturi Cuban, bratari iced out si seturi statement pentru look-uri trap, hip hop si urban luxury.
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
                className="inline-flex min-h-12 items-center rounded-lg border-2 border-gray-950 px-8 py-3 font-bold text-gray-950 transition-all duration-300 hover:bg-gray-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
                <div className="h-full rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-950 sm:p-8">
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
                  <item.icon className="h-12 w-12 text-sky-300 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                Bijuterii iced out pentru outfituri streetwear
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                FrostBoyz aduce in Romania lanturi iced out, bratari Cuban si seturi inspirate de cultura hip hop si trap.
                Fiecare piesa este aleasa pentru shine, prezenta si styling usor cu tricouri negre, hoodies, denim si fituri de strada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Jewelry Insights */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
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
                  className="group block overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center text-sky-700 dark:text-sky-300 font-bold text-sm transition-colors">
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
      <section className="py-20 bg-[linear-gradient(135deg,#020617,#0f172a_46%,#075985)] text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Built for the streets. Worn like luxury.</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join the movement. Elevate your game.</p>
            <Link
              to="/shop"
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-6 py-3 text-base font-black text-gray-950 transition-colors hover:bg-sky-100 sm:px-8 sm:py-4 sm:text-lg"
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
