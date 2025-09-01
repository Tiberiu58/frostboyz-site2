export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1S2buNKvTmb6p4nqZ6KCG2kr',
    name: 'Miami Cuban Set (Bracelet+Chain)',
    description: 'Complete Miami Cuban jewelry set featuring both bracelet and chain. Premium iced-out design that never loses its frost. Built for the streets, worn like luxury.',
    mode: 'payment',
  },
  {
    priceId: 'price_1S2bqbKvTmb6p4nqSv8ixRy4',
    name: 'Miami Cuban Bracelet',
    description: 'Premium Miami Cuban bracelet with iced-out finish. Hypoallergenic stainless steel construction with lifetime warranty. Perfect for stacking or wearing solo.',
    mode: 'payment',
  },
  {
    priceId: 'price_1S2axkKvTmb6p4nq9ho3bF4P',
    name: 'Miami Cuban Chain',
    description: 'Classic Miami Cuban chain with premium iced-out design. Water-resistant and built to last. The perfect statement piece for any outfit.',
    mode: 'payment',
  },
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};