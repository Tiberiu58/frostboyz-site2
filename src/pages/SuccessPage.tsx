import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Mail, Truck } from 'lucide-react';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (sessionId) {
        // Simulate API call delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setOrderDetails({
          sessionId,
          orderNumber: `FB-${Date.now().toString().slice(-6)}`,
          estimatedDelivery: '7-15 business days',
          email: 'Order confirmation sent to your email',
        });
      }
      setLoading(false);
    };

    fetchOrderDetails();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Processing your order...</h2>
          <p className="text-gray-600">Please wait while we confirm your payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">
              Thank you for joining the Frost Fam! Your order has been confirmed and is being processed.
            </p>
          </div>

          {orderDetails && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">{orderDetails.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-mono text-xs">{orderDetails.sessionId.slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery:</span>
                  <span className="font-medium">{orderDetails.estimatedDelivery}</span>
                </div>
              </div>
            </div>
          )}

          {/* What's Next Section */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-3">What's Next?</h3>
            <div className="space-y-3 text-sm text-blue-800">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Order confirmation sent to your email</span>
              </div>
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Your order will be processed within 1-2 business days</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Tracking number will be sent once shipped</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <Link
                to="/shop"
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                to="/"
                className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Need help with your order?</p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/contact"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  Contact Support
                </Link>
                <Link
                  to="/faq"
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;