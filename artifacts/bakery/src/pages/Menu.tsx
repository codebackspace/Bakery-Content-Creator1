import React, { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory } from '../utils/data';

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'bread', label: 'Breads' },
  { id: 'pastry', label: 'Pastries' },
  { id: 'cake', label: 'Cakes' },
  { id: 'cookie', label: 'Cookies' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const products = getProductsByCategory(activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section
        className="relative py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Our Menu</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            Everything baked in-house, fresh every single day. Browse our full selection below.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex gap-3 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-14 bg-amber-50">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <>
              <p className="text-gray-500 text-sm mb-6">{products.length} items found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-xl">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
