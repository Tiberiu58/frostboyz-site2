import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Crown, Zap } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';

const CollectionsPage: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState('all');

  const collections = [
    {
      id: 'all',
      name: 'All Collections',
      description: 'Explore our complete range of premium jewelry',
      icon: Sparkles,
      products: products,
    },
    {
      id: 'cuban-chains',
      name: 'Cuban Chains',
      description: 'Classic Miami Cuban chains with premium iced-out finish',
      icon: Crown,
      products: products.filter(p => p.style === 'cuban' && p.category === 'chains'),
    },
    {
      id: 'iced-bracelets',
      name: 'Iced Bracelets',
      description: 'Statement bracelets that never lose their frost',
      icon: Zap,
      products: products.filter(p => p.category === 'bracelets'),
    },
  ];

  const activeCollectionData = collections.find(c => c.id === activeCollection) || collections[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* SEO Header */}
      <div className="sr-only">
        <h1>FrostBoyz Collections - Premium Jewelry Collections</h1>
        <p>Discover our curated collections of premium iced-out jewelry. Cuban chains, bracelets, and more.</p>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="FrostBoyz Collections"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Premium Collections
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Curated collections of premium iced-out jewelry. Each piece crafted with precision, 
                designed for those who demand excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collections Navigation */}
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setActiveCollection(collection.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCollection === collection.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <collection.icon className="h-5 w-5" />
                <span>{collection.name}</span>
              </button>
            ))}
          </div>

          {/* Active Collection Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeCollectionData.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {activeCollectionData.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeCollectionData.products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1} direction="up">
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          {activeCollectionData.products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
                No products found in this collection
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Browse All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Explore our complete catalog or get in touch for custom pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Browse All Products
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Custom Orders
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default CollectionsPage;