import { Product } from '../types';
import { stripeProducts } from '../stripe-config';

export const products: Product[] = [
  {
    id: 'prod_SwtuH7eQliJfv7',
    name: 'FrostBoyz Cuban Chain – Test',
    price: 150,
    image: '/WhatsApp Image 2025-09-01 at 19.11.30.jpeg',
    images: [
      '/WhatsApp Image 2025-09-01 at 19.11.30.jpeg',
    ],
    category: 'chains',
    material: 'plated-stainless-steel',
    style: 'iced-out',
    description: 'Premium iced-out Cuban chain that never loses its frost. Built for the streets, worn like luxury.',
    features: ['Hypoallergenic', 'Water-resistant', 'Premium Quality', 'Lifetime Warranty'],
    inStock: true,
    stripeConfig: stripeProducts.find(p => p.priceId === 'price_1S106e3qSLAVJKap8vm4PoqH'),
  },
];