import React from 'react';
import { Link } from 'wouter';
import { Heart, Leaf, Clock, Award } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: 'Made with Love',
      description: 'Every item is handcrafted with care by our skilled bakers who are passionate about their art.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: 'Natural Ingredients',
      description: 'We use only the finest organic and locally sourced ingredients. No artificial additives, ever.',
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: 'Fresh Every Day',
      description: 'Our ovens start at 4 AM so our shelves are always stocked with fresh baked goods by 7 AM.',
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'Award Winning',
      description: 'Recognized three times as the best bakery in the city. Quality you can taste in every bite.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section
        className="relative py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Our Story</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            A family tradition, a passion for baking, and thousands of happy customers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-3">Est. 2026</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-5">
                From Grandmother's Kitchen to Your Table
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ARK BAKEHOUSE was born in a small Dhaka kitchen where our founder, Nadia Rahman, learned to bake sourdough alongside her grandmother. What started as weekend loaves for family quickly grew into a full bakery after neighbors couldn't stop asking where to buy the bread.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we operate from our beautiful flagship bakery on Baker Street, with a team of 12 passionate bakers who share our obsession with quality. Every recipe we use has been tested hundreds of times to achieve that perfect balance of flavor, texture, and freshness.
              </p>
              <Link href="/menu">
                <Button variant="primary">Explore Our Menu</Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
                alt="Baker crafting bread"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-3">What We Stand For</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our values guide every decision we make — from sourcing ingredients to the way we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold font-serif text-amber-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-3">The Team Behind the Oven</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our bakers bring decades of combined experience and a shared love of the craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Nadia Rahman', role: 'Founder & Head Baker', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg' },
              { name: 'Arif Hossain', role: 'Pastry Chef', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg' },
              { name: 'Sadia Islam', role: 'Cake Specialist', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
            ].map(member => (
              <div key={member.name} className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 shadow-lg">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-amber-900 font-serif">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
