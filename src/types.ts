import { StripeProduct } from './stripe-config';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'chains' | 'bracelets' | 'earrings';
  material: 'stainless-steel' | 'brass' | 'silver';
  color: 'gold' | 'silver' | 'black';
  style: 'cuban' | 'rhombic' | 'iced-out';
  description: string;
  features: string[];
  inStock: boolean;
  stripeConfig?: StripeProduct;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
}