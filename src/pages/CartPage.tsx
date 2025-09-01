import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

const CartPage: React.FC = () => {
  const { cartItems, updateCartQuantity, removeFromCart, cartTotal } = useApp();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Add some frost to your collection</p>
          <Link
            to="/shop"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const shippingCost = cartTotal >= 150 ? 0 : 15;
  const tax = Math.round(cartTotal * 0.08 * 100) / 100;
  const finalTotal = cartTotal + shippingCost + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.product.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                  />
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {item.product.material.replace('-', ' ').replace('plated stainless steel', 'Plated with Stainless Steel')}
                      {item.product.color && ` • ${item.product.color}`}
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                      RON {item.product.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md h-fit transition-colors duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>RON {cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `RON ${shippingCost.toFixed(2)}`}</span>
              </div>
              
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Tax</span>
                <span>RON {tax.toFixed(2)}</span>
              </div>
              
              <hr className="my-4" />
              
              <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>RON {finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {cartTotal < 150 && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Add RON {(150 - cartTotal).toFixed(2)} more for free shipping
                </p>
              </div>
            )}

            <button className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center mt-4 text-blue-400 hover:text-blue-600 font-medium"
            >
              Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Secure checkout with SSL encryption
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  14-day return policy
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Worldwide shipping available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;