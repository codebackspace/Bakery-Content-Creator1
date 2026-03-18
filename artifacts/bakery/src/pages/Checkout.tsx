import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCart } from '../contexts/CartContext';
import { DeliveryInfo, PaymentMethod } from '../types';
import { paymentMethods } from '../utils/data';

const Checkout: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [, navigate] = useLocation();
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({ name: '', address: '', phone: '', email: '' });
  const [selectedPayment, setSelectedPayment] = useState<string>(paymentMethods[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const tax = totalPrice * 0.1;
  const deliveryFee = 50;
  const total = totalPrice + tax + deliveryFee;

  useEffect(() => {
    if (cartItems.length === 0) navigate('/cart');
  }, [cartItems, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!deliveryInfo.name.trim()) newErrors.name = 'Name is required';
    if (!deliveryInfo.address.trim()) newErrors.address = 'Address is required';
    if (!deliveryInfo.phone.trim()) newErrors.phone = 'Phone is required';
    if (!deliveryInfo.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(deliveryInfo.email)) newErrors.email = 'Invalid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success');
    }, 1500);
  };

  const paymentIcons: Record<string, string> = {
    cash: '💵',
    credit: '💳',
    mobile: '📱',
  };

  return (
    <div className="min-h-screen pt-20 bg-amber-50">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-serif font-semibold text-amber-900 mb-5">Delivery Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <Input label="Full Name" id="name" name="name" value={deliveryInfo.name} onChange={handleChange} error={errors.name} required placeholder="Rahim Uddin" />
                    <Input label="Phone Number" id="phone" name="phone" type="tel" value={deliveryInfo.phone} onChange={handleChange} error={errors.phone} required placeholder="+880 1700-000000" />
                  </div>
                  <Input label="Email Address" id="email" name="email" type="email" value={deliveryInfo.email} onChange={handleChange} error={errors.email} required placeholder="rahim@example.com" />
                  <Input label="Delivery Address" id="address" name="address" value={deliveryInfo.address} onChange={handleChange} error={errors.address} required placeholder="House 5, Road 12, Block C, Dhaka" />
                </div>

                {/* Payment */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-serif font-semibold text-amber-900 mb-5">Payment Method</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {paymentMethods.map((method: PaymentMethod) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPayment === method.id
                            ? 'border-amber-700 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{paymentIcons[method.id]}</span>
                        <span className="text-sm font-medium text-gray-700">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
                <h2 className="text-xl font-serif font-bold text-amber-900 mb-5">Order Summary</h2>
                <div className="space-y-3 mb-5">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-600">
                      <span>{item.name} × {item.quantity}</span>
                      <span>৳{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-100 pt-3 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between"><span>Subtotal</span><span>৳{totalPrice.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span>VAT (10%)</span><span>৳{tax.toFixed(0)}</span></div>
                    <div className="flex justify-between"><span>Delivery</span><span>৳{deliveryFee}</span></div>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg text-amber-900">
                    <span>Total</span>
                    <span>৳{total.toFixed(0)}</span>
                  </div>
                </div>

                <Button type="submit" variant="primary" fullWidth size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="h-4 w-4" />
                  Secure & encrypted checkout
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
