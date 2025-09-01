import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import CheckoutButton from './CheckoutButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleToggleWishlist}
          className={`p-2 rounded-full shadow-md transition-colors ${
            isInWishlist(product.id)
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className="h-4 w-4" />
        </button>
        {product.stripeConfig ? (
          <div className="p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-colors">
            <CheckoutButton
              priceId={product.stripeConfig.priceId}
              mode={product.stripeConfig.mode}
              className="p-0 bg-transparent hover:bg-transparent"
            >
              <ShoppingBag className="h-4 w-4" />
            </CheckoutButton>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1 capitalize">
          {product.material.replace('-', ' ')} • {product.color}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;