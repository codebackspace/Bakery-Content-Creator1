import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3 fill-white" /> Bestseller
          </span>
        )}
        <div className="absolute top-3 right-3 bg-white/90 text-amber-800 font-bold px-2.5 py-1 rounded-full text-sm">
          ৳{product.price.toLocaleString()}
        </div>
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1 block">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>

        <Button variant="primary" fullWidth onClick={() => addToCart(product)}>
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
