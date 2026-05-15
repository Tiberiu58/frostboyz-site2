import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface CheckoutButtonProps {
  priceId: string;
  mode: 'payment' | 'subscription';
  className?: string;
  children?: React.ReactNode;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ className = '', children }) => {
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = () => {
    setError('Checkout is disconnected from Supabase. Add a new checkout provider before accepting orders.');
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        className={`inline-flex items-center justify-center font-semibold transition-colors ${className}`}
      >
        {children || (
          <>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Buy Now
          </>
        )}
      </button>

      {error && (
        <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">{error}</p>
          <button onClick={() => setError(null)} className="mt-1 text-xs text-amber-900 underline">
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
