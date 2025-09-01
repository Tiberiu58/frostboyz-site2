import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Shield, Truck, Award, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';
import CheckoutButton from '../components/CheckoutButton';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-blue-400 hover:text-blue-600 font-medium"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const trustBadges = [
    { icon: Shield, text: 'Hypoallergenic' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: Award, text: 'Premium Quality' },
    { icon: RotateCcw, text: '14-Day Returns' },
  ];

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-400' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-900">{product.price} RON</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice} RON</span>
                )}
              </div>
            </div>

            <div className="prose text-gray-700">
              <p>{product.description}</p>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">
                  {product.material.replace('-', ' ')}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">
                  {product.color}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">
                  {product.style.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                  <badge.icon className="h-4 w-4 text-blue-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                {product.stripeConfig ? (
                  <CheckoutButton
                    priceId={product.stripeConfig.priceId}
                    mode={product.stripeConfig.mode}
                    className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
                  >
                    Buy Now
                  </CheckoutButton>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                )}
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    isInWishlist(product.id)
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-600'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 text-sm text-gray-600">
              <p className="mb-2">
                <strong>Free worldwide shipping</strong> on orders over 700 RON
              </p>
              <p>Estimated delivery: 7-15 business days</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <div key={product.id} className="group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-900">{product.price} RON</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;