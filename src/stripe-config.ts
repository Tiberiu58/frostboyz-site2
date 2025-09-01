export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1S106e3qSLAVJKap8vm4PoqH',
    name: 'FrostBoyz Cuban Chain – Test',
    description: 'Premium iced-out Cuban chain that never loses its frost. Built for the streets, worn like luxury.',
    mode: 'payment',
  },
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};