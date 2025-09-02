import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useApp();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 px-4">Your wishlist is empty</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4">Save your favorite pieces for later</p>
          <Link
            to="/shop"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Discover Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Your Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {wishlistItems.map(item => (
            <div key={item.product.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Link to={`/product/${item.product.id}`}>
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-3 sm:p-4">
                <Link to={`/product/${item.product.id}`}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {item.product.name}
                  </h3>
                </Link>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">RON {item.product.price}</span>
                  {item.product.originalPrice && (
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through">RON {item.product.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(item.product)}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center text-xs sm:text-sm"
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;