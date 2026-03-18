import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import confetti from 'canvas-confetti';

const CheckoutSuccess: React.FC = () => {
  useEffect(() => {
    const fire = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b45309', '#fbbf24', '#fef3c7', '#92400e'],
      });
    };
    fire();
    const timer = setTimeout(fire, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-amber-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md mx-4">
        <div className="flex justify-center mb-5">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-3">Order Placed!</h1>
        <p className="text-gray-500 mb-2">
          Thank you for your order! 🥐 Our bakers are getting to work right away.
        </p>
        <p className="text-gray-500 mb-8">
          You'll receive a confirmation email shortly and your order will be delivered fresh to your door.
        </p>
        <div className="space-y-3">
          <Link href="/menu">
            <Button variant="primary" fullWidth>Continue Shopping</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" fullWidth>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
