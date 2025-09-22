import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';

const NewInPage: React.FC = () => {
  // For demo purposes, we'll show all products as "new"
  // In a real app, you'd filter by a "dateAdded" field or similar
  const newProducts = products;

  const highlights = [
    {
      icon: Clock,
      title: 'Fresh Drops',
      description: 'Latest additions to our premium collection',
    },
    {
      icon: TrendingUp,
      title: 'Trending Now',
      description: 'Most popular pieces among the Frost Fam',
    },
    {
      icon: Star,
      title: 'Limited Edition',
      description: 'Exclusive pieces available for a limited time',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* SEO Header */}
      <div className="sr-only">
        <h1>New In - Latest FrostBoyz Jewelry Collection</h1>
        <p>Discover the newest additions to our premium iced-out jewelry collection. Fresh drops, trending pieces, and limited editions.</p>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="New FrostBoyz Collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                New In<span className="text-blue-400">.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Fresh drops from the streets. The latest additions to our premium collection, 
                crafted for those who stay ahead of the curve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <highlight.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Drops
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Be the first to rock the newest pieces from FrostBoyz. Limited quantities available.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1} direction="up">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  </div>
                  <ProductCard product={product} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Drop
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Join the Frost Fam to get early access to new releases and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Shop All New
              </Link>
              <button className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Join Newsletter
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default NewInPage;