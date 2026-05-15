import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import CheckoutButton from './CheckoutButton';
import { formatPrice } from '../lib/format';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-sky-500/40">
      <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        <button
          onClick={handleToggleWishlist}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className={`flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-colors ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/95 text-gray-700 hover:text-red-500 dark:bg-gray-950/90 dark:text-gray-200'
          }`}
        >
          <Heart className="h-4 w-4" />
        </button>

        {product.stripeConfig ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white shadow-md transition-colors hover:bg-sky-700 dark:bg-white dark:text-gray-950 dark:hover:bg-sky-100">
            <CheckoutButton
              priceId={product.stripeConfig.priceId}
              mode={product.stripeConfig.mode}
              className="bg-transparent p-0 text-white hover:bg-transparent dark:text-gray-950"
            >
              <ShoppingBag className="h-4 w-4" />
            </CheckoutButton>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white shadow-md transition-colors hover:bg-sky-700 dark:bg-white dark:text-gray-950 dark:hover:bg-sky-100"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-2 text-base font-bold text-gray-950 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-black text-gray-950 dark:text-white">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through dark:text-gray-400">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm capitalize text-gray-600 dark:text-gray-300">
          {product.material.replace('-', ' ').replace('plated stainless steel', 'Plated with Stainless Steel')}
          {product.color && ` • ${product.color}`}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
