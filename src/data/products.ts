import { Product } from '../types';
import { stripeProducts } from '../stripe-config';

export const products: Product[] = [
  {
    id: 'prod_SyZ2m0UOo0D0V5',
    name: 'Miami Cuban Set (Bracelet+Chain)',
    price: 299.99,
    image: '/WhatsApp Image 2025-09-01 at 19.11.25.jpeg',
    images: [
      '/WhatsApp Image 2025-09-01 at 19.11.25.jpeg',
    ],
    category: 'chains',
    material: 'plated-stainless-steel',
    style: 'cuban',
    description: 'Complete Miami Cuban jewelry set featuring both bracelet and chain. Premium iced-out design that never loses its frost. Built for the streets, worn like luxury.',
    features: ['Complete Set (Bracelet + Chain)', 'Hypoallergenic', 'Premium Quality'],
    inStock: true,
    stripeConfig: stripeProducts.find(p => p.priceId === 'price_1S2buNKvTmb6p4nqZ6KCG2kr'),
  },
  {
    id: 'prod_SyYyTeOeAlKoAC',
    name: 'Miami Cuban Bracelet',
    price: 169.99,
    image: '/WhatsApp Image 2025-09-01 at 19.11.31.jpeg',
    images: [
      '/WhatsApp Image 2025-09-01 at 19.11.31.jpeg',
    ],
    category: 'bracelets',
    material: 'plated-stainless-steel',
    style: 'cuban',
    description: 'Premium Miami Cuban bracelet with iced-out finish. Hypoallergenic stainless steel construction with lifetime warranty. Perfect for stacking or wearing solo.',
    features: ['Adjustable Size', 'Hypoallergenic', 'Premium Quality'],
    inStock: true,
    stripeConfig: stripeProducts.find(p => p.priceId === 'price_1S2bqbKvTmb6p4nqSv8ixRy4'),
  },
  {
    id: 'prod_SyY3eMifFtdoyR',
    name: 'Miami Cuban Chain',
    price: 189.99,
    image: '/WhatsApp Image 2025-09-01 at 19.11.30.jpeg',
    images: [
      '/WhatsApp Image 2025-09-01 at 19.11.30.jpeg',
    ],
    category: 'chains',
    material: 'plated-stainless-steel',
    style: 'cuban',
    description: 'Classic Miami Cuban chain with premium iced-out design. Water-resistant and built to last. The perfect statement piece for any outfit.',
    features: ['Multiple Length Options', 'Hypoallergenic', 'Premium Quality'],
    inStock: true,
    stripeConfig: stripeProducts.find(p => p.priceId === 'price_1S2axkKvTmb6p4nq9ho3bF4P'),
  },
];