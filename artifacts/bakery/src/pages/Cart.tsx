import React from 'react';
import { Link } from 'wouter';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const tax = totalPrice * 0.1;
  const deliveryFee = totalPrice > 0 ? 50 : 0;
  const total = totalPrice + tax + deliveryFee;

  return (
    <div className="min-h-screen pt-20 bg-amber-50">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-8">Your Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold uppercase text-amber-600">{item.category}</span>
                      <h3 className="font-semibold text-gray-800 font-serif">{item.name}</h3>
                      <p className="text-amber-800 font-bold">৳{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-800 mb-2">৳{(item.price * item.quantity).toLocaleString()}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
                <h2 className="text-xl font-serif font-bold text-amber-900 mb-5">Order Summary</h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>VAT (10%)</span>
                    <span>৳{tax.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>৳{deliveryFee}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg text-amber-900">
                    <span>Total</span>
                    <span>৳{total.toFixed(0)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button variant="primary" fullWidth size="lg">
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <div className="mt-4 text-center text-xs text-gray-400">
                  Free delivery on orders over ৳1000
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-100 rounded-full mb-6">
                <ShoppingBag className="h-12 w-12 text-amber-400" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any baked goods yet!</p>
              <Link href="/menu">
                <Button variant="primary" size="lg">Browse Our Menu</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
