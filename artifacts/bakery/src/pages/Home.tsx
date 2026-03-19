import React from 'react';
import { Link } from 'wouter';
import { Wheat, Cookie, Cake } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getBestSellers } from '../utils/data';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link }) => (
  <Link href={link}>
    <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-serif text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </Link>
);

const Home: React.FC = () => {
  const bestSellers = getBestSellers();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-center bg-cover"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl animate-slide-up">
            <p className="text-amber-300 font-semibold uppercase tracking-widest text-sm mb-3">
              Freshly Baked Daily
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 leading-tight">
              Artisan Breads &amp; Baked Delights
            </h1>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Every morning we craft our baked goods with locally sourced flour, premium butter, and a passion passed down for generations. Taste the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button variant="primary" size="lg">
                  View Our Menu
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-900">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
          {[['100+', 'Recipes'], ['2K+', 'Happy Customers']].map(([num, label]) => (
            <div key={label} className="text-center text-white">
              <p className="text-2xl font-bold text-amber-300">{num}</p>
              <p className="text-xs text-amber-100">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-3">What We Bake</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From hearty artisan loaves to delicate pastries, everything is crafted fresh each day using traditional recipes and premium ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              icon={<Wheat className="h-12 w-12 text-amber-600" />}
              title="Artisan Breads"
              description="Sourdoughs, focaccias, multigrain loaves — baked fresh every morning with love."
              link="/menu?category=bread"
            />
            <CategoryCard
              icon={<Cookie className="h-12 w-12 text-amber-600" />}
              title="Pastries & Cookies"
              description="Buttery croissants, cinnamon rolls, and melt-in-your-mouth cookies for every craving."
              link="/menu?category=pastry"
            />
            <CategoryCard
              icon={<Cake className="h-12 w-12 text-amber-600" />}
              title="Cakes & Tarts"
              description="Celebration cakes, fruit tarts, and cheesecakes crafted for every special occasion."
              link="/menu?category=cake"
            />
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-3">Our Bestsellers</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These are the items our customers come back for again and again. Try them and you'll understand why.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button variant="outline" size="lg">
                See Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Why Us */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-300 font-semibold uppercase tracking-widest text-sm mb-3">Why ARK BAKEHOUSE?</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Baked with Tradition, Served with Love
              </h2>
              <p className="text-amber-100 mb-6 leading-relaxed">
                We source the finest organic flours, locally farmed eggs, and European-style butter to ensure every bite is exceptional. No preservatives, no shortcuts — just honest, wholesome baking.
              </p>
              <ul className="space-y-3">
                {['100% Natural Ingredients', 'No Preservatives or Additives', 'Baked Fresh Every Morning', 'Same-Day Delivery Available'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-amber-100">
                    <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
                alt="Baker at work"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-3">Ready to Order?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Browse our full menu and get fresh baked goods delivered right to your door.
          </p>
          <Link href="/menu">
            <Button variant="primary" size="lg">
              Order Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
